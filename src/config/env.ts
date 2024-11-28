import { z } from 'zod'

const schema = z.object({
  PORT: z.coerce.number().default(7000)
})

export const env = schema.parse(process.env)
