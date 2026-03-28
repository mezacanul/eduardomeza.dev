import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().pipe(z.email()),
  subject: z.string().trim().min(2).max(100),
  message: z.string().trim().min(10).max(1500),
});

export type ContactFormType = z.infer<
  typeof contactFormSchema
>;

export { contactFormSchema };
