import { z } from "zod";

import { createTRPCRouter, privateProcedure, publicProcedure } from "~/server/api/trpc";
import { clerkClient } from '@clerk/nextjs';
import { retryDelay } from "node_modules/@trpc/client/dist/internals/retryDelay";

export const profileRouter = createTRPCRouter({

    getProfile: privateProcedure
    .input(z.object({UserID: z.string()}))
    .query(async ({ctx, input}) => {
      const ret = await ctx.db.userProfile.findFirstOrThrow ({ 
        where: { UserID: input.UserID }
      })
      return ret;
    }),

    getMatches: privateProcedure
    .input(z.object({UserID: z.string()}))
    .query(async ({ctx, input}) => {
        const ret = await ctx.db.applications.findMany ({
          where: { applicantID: input.UserID,
                  applicationStatus:  1
                  },
          select: {receiverID: true}
        })
        return ret;
    }),

    browseList: privateProcedure
    .input(z.object({UserID: z.string()}))
    .query(async ({ctx, input}) => {
        const user = await ctx.db.userProfile.findFirstOrThrow ({ 
            where: { UserID: input.UserID }
        })

        let ret
        if (user.SexualOrientation == 'bisexual' || user.SexualOrientation == 'pansexual') {
            let filler = await ctx.db.userProfile.findMany ({ 
                where: { Gender: user.Gender, SexualOrientation: 'homosexual' }
            })
            let fillerTwo = await ctx.db.userProfile.findMany ({ 
                where: { Gender: user.Gender, SexualOrientation: 'bisexual' }
            })
            let fillerThree;
            let fillerFour;
            if (user.Gender == 'male') {
                fillerThree = await ctx.db.userProfile.findMany ({ 
                    where: {  Gender: 'female', SexualOrientation: 'heterosexual' }
                })
                fillerFour = await ctx.db.userProfile.findMany ({ 
                    where: {  Gender: 'female', SexualOrientation: 'bisexual' }
                })
            }
            else {
                fillerThree = await ctx.db.userProfile.findMany ({ 
                    where: {  Gender: 'male', SexualOrientation: 'heterosexual' }
                })
                fillerFour = await ctx.db.userProfile.findMany ({ 
                    where: {  Gender: 'male', SexualOrientation: 'bisexual' }
                })
            }
            ret = filler;
            ret = ret.concat(fillerTwo)
            ret = ret.concat(fillerThree)
            ret = ret.concat(fillerFour)
        }
        else if (user.SexualOrientation == 'homosexual') {
            ret = await ctx.db.userProfile.findMany ({ 
                where: {  Gender: user.Gender, SexualOrientation: {in: ['bisexual', 'pansexual', 'homosexual']} }
            })
        }
        else if (user.SexualOrientation == 'heterosexual') {
            if (user.Gender == 'male') {
                ret = await ctx.db.userProfile.findMany ({ 
                    where: {  Gender: 'female', SexualOrientation: {in: ['bisexual', 'pansexual', 'heterosexual']} }
                })
            }
            else {
                ret = await ctx.db.userProfile.findMany ({ 
                    where: {  Gender: 'male', SexualOrientation: {in: ['bisexual', 'pansexual', 'heterosexual']} }
                })
            }
        }
        else if (user.SexualOrientation == 'asexual') {
            ret = await ctx.db.userProfile.findMany ({ 
                where: {  SexualOrientation: 'asexual' }
            })
        }
        return ret;
    })
});