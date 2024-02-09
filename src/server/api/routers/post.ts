import { z } from "zod";

import { createTRPCRouter, privateProcedure, publicProcedure } from "~/server/api/trpc";
import { clerkClient } from '@clerk/nextjs';

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ ctx, input }) => {
      return {
        greeting: `Hello ${input.text}`,

      };
    }),
}); 