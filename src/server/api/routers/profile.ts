import { z } from "zod";

import { createTRPCRouter, privateProcedure, publicProcedure } from "~/server/api/trpc";
import { clerkClient } from '@clerk/nextjs';
import { retryDelay } from "node_modules/@trpc/client/dist/internals/retryDelay";

export const profileRouter = createTRPCRouter({

    upsertProfile: privateProcedure
    .input(z.object({
      userID: z.number(), 
      firstName: z.string(),
      lastName: z.string(), 
      projectedGraduationDate: z.date(),
      genderIdentity: z.string(),
      sexuality: z.string(),
      preferredGender: z.string(),
      dateOfBirth: z.date(),
      height: z.number(), 
      nextTerm1: z.string(), 
      nextTerm2: z.string(), 
      nextTerm3: z.string(), 
      cityOfResidence: z.string(),
      provinceOfResidence: z.string(),
      accountCreatedDate: z.date(),
    }))
    .mutation(async ({ ctx, input}) => {
      const user = await ctx.db.userProfile.upsert ({
        where: {
          userID: input.userID,
        },
        update: {
          userID: input.userID,
          firstName: input.firstName,
          lastName: input.lastName,
          projectedGraduationDate: input.projectedGraduationDate,
          genderIdentity: input.genderIdentity,
          sexuality: input.sexuality,
          preferredGender: input.preferredGender,
          dateOfBirth: input.dateOfBirth,
          height: input.height, 
          nextTerm1: input.nextTerm1,
          nextTerm2: input.nextTerm2,
          nextTerm3: input.nextTerm3,
          cityOfResidence: input.cityOfResidence,
          provinceOfResidence: input.provinceOfResidence,
          accountCreatedDate: input.accountCreatedDate,
        },
        create: {
          userID: input.userID,
          firstName: input.firstName,
          lastName: input.lastName,
          projectedGraduationDate: input.projectedGraduationDate,
          genderIdentity: input.genderIdentity,
          sexuality: input.sexuality,
          preferredGender: input.preferredGender,
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

    getProfile: privateProcedure
    .input(z.object({userID: z.number()}))
    .query(async ({ctx, input}) => {
      const ret = await ctx.db.userProfile.findFirstOrThrow (
        { where: { userID: input.userID }} 
      )
      return ret;
    }),
});