import { z } from "zod";

import { createTRPCRouter, privateProcedure, publicProcedure } from "~/server/api/trpc";
import { clerkClient } from '@clerk/nextjs';
import { retryDelay } from "node_modules/@trpc/client/dist/internals/retryDelay";

export const profileRouter = createTRPCRouter({

    upsertProfile: privateProcedure
    .input(z.object({
      UserID: z.number(), 
      Name: z.string(),
      DateOfBirth: z.string(),
      Gender: z.string(),
      Religion: z.string(),
      SexualOrientation: z.string(),
      Height: z.number(),
      School: z.string(),
      YearAndMajor: z.string(),
      Location: z.string(),
      CurrentStudyTerm: z.string(),
      Mbti: z.number(),
      Tags: z.string(),
      PhoneNumber: z.string(),
      Discord: z.string(),
      Instagram: z.string(),
      PersonalDescription: z.string(),
      RelationshipStyle: z.string(),
      BenefitsAndCompensation: z.string(),
      Interests: z.string(),
      DealBreakers: z.string(),
      DesiredTraits: z.string(),
      AccountCreatedDate: z.date()
    }))
    .mutation(async ({ ctx, input}) => {
      const user = await ctx.db.userProfile.upsert ({
        where: {
          UserID: input.UserID,
        },
        update: {
          UserID: input.UserID, 
          Name: input.Name,
          DateOfBirth: input.DateOfBirth,
          Gender: input.Gender,
          Religion: input.Religion,
          SexualOrientation: input.SexualOrientation,
          Height: input.Height,
          School: input.School,
          YearAndMajor: input.YearAndMajor,
          Location: input.Location,
          CurrentStudyTerm: input.CurrentStudyTerm,
          Mbti: input.Mbti,
          Tags: input.Tags,
          PhoneNumber: input.PhoneNumber,
          Discord: input.Discord,
          Instagram: input.Instagram,
          PersonalDescription: input.PersonalDescription,
          RelationshipStyle: input.RelationshipStyle,
          BenefitsAndCompensation: input.BenefitsAndCompensation,
          Interests: input.Interests,
          DealBreakers: input.DealBreakers,
          DesiredTraits: input.DesiredTraits,
          AccountCreatedDate: input.AccountCreatedDate
        },
        create: {
          UserID: input.UserID, 
          Name: input.Name,
          DateOfBirth: input.DateOfBirth,
          Gender: input.Gender,
          Religion: input.Religion,
          SexualOrientation: input.SexualOrientation,
          Height: input.Height,
          School: input.School,
          YearAndMajor: input.YearAndMajor,
          Location: input.Location,
          CurrentStudyTerm: input.CurrentStudyTerm,
          Mbti: input.Mbti,
          Tags: input.Tags,
          PhoneNumber: input.PhoneNumber,
          Discord: input.Discord,
          Instagram: input.Instagram,
          PersonalDescription: input.PersonalDescription,
          RelationshipStyle: input.RelationshipStyle,
          BenefitsAndCompensation: input.BenefitsAndCompensation,
          Interests: input.Interests,
          DealBreakers: input.DealBreakers,
          DesiredTraits: input.DesiredTraits,
          AccountCreatedDate: input.AccountCreatedDate
        }
      })
      return user;
    }),

    getProfile: privateProcedure
    .input(z.object({UserID: z.number()}))
    .query(async ({ctx, input}) => {
      const ret = await ctx.db.userProfile.findFirstOrThrow ({ 
        where: { UserID: input.UserID }
      })
      return ret;
    }),

    getMatches: privateProcedure
    .input(z.object({UserID: z.number()}))
    .query(async ({ctx, input}) => {
        const ret = await ctx.db.applications.findMany ({
          where: { applicantID: input.UserID,
                  applicationStatus:  1
                  },
          select: {receiverID: true}
        })
        return ret;
    })
});