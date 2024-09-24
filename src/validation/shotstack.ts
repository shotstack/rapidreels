import { z } from 'zod';

export const shotstackRenderResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  response: z.object({
    message: z.string(),
    id: z.string()
  })
});

export const shotstackStatusResponseSchema = z.object({
  response: z.object({
    status: z.string(),
    id: z.string(),
    owner: z.string(),
    url: z.string().optional(),
    data: z.record(z.any()),
    created: z.string(),
    updated: z.string()
  })
});
