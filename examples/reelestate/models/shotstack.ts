import { z } from 'zod';
import {
  shotstackRenderResponseSchema,
  shotstackStatusResponseSchema
} from '@validation/shotstack';

export type ShotstackRenderResponse = z.infer<
  typeof shotstackRenderResponseSchema
>;
export type ShotstackStatusResponse = z.infer<
  typeof shotstackStatusResponseSchema
>;
