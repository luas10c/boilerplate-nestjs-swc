import { z } from 'zod/v4'

export const env = z
  .object({
    PORT: z.coerce.number().default(7000)
  })
  .parse(process.env)
