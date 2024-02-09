import { z } from "zod";

import { createTRPCRouter, privateProcedure, publicProcedure } from "~/server/api/trpc";
import { clerkClient } from '@clerk/nextjs';

export const profileRouter = createTRPCRouter({

    createProfile: privateProcedure
    .input(z.object({
      userID: z.number(), firstName: z.string(),
      lastName: z.string(), projectedGraduationDate: z.date(),
      genderIdentity: z.union([z.string(), z.null()]), sexuality: z.union([z.string(), z.null()]), 
      dateOfBirth: z.date(), height: z.number(), 
      nextTerm1: z.string(), nextTerm2: z.string(), 
      nextTerm3: z.string(), cityOfResidence: z.union([z.string(), z.null()]), 
      provinceOfResidence: z.string(), accountCreatedDate: z.date(),
    }))
    .mutation(async ({ ctx, input}) => {
      const user = await ctx.db.userProfile.create({
        data: {
          userID: input.userID,
          firstName: input.firstName,
          lastName: input.lastName,
          projectedGraduationDate: input.projectedGraduationDate,
          genderIdentity: input.genderIdentity,
          sexuality: input.sexuality,
          dateOfBirth: input.dateOfBirth,
          height: input.height, 
          nextTerm1: input.nextTerm1,
          nextTerm2: input.nextTerm2,
          nextTerm3: input.nextTerm3,
          cityOfResidence: input.cityOfResidence,
          provinceOfResidence: input.provinceOfResidence,
          accountCreatedDate: input.accountCreatedDate,
        }
      })

      return user;
    }),

    
});