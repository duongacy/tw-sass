import { z } from 'zod';
const DataSchema = z.object({
  id: z.number(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  avatar: z.string(),
});
const SupportSchema = z.object({
  url: z.string(),
  text: z.string(),
});
const UserSchema = z.object({
  data: DataSchema,
  support: SupportSchema,
});
export type User = z.infer<typeof UserSchema>;
