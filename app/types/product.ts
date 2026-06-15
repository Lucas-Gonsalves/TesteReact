import { z } from "zod";

export const productSchema = z.object({
  name: z.string(),
  image: z.url(),
  model: z.string(),
  treadwear: z.number(),
  traction: z.string(),
  temperature: z.string(),
  pattern: z.string(),
  loadIndex: z.string(),
  speedRating: z.string(),
  noise: z.number(),
  rollingResistance: z.string(),
  wetGrip: z.string(),
  cars: z.array(z.string()),
});

export type Product = z.infer<typeof productSchema>;
