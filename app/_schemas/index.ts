import { z } from "zod";

export const contactInfo = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, { message: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
  phone: z
    .string({ required_error: "Contact number is required" })
    .min(1, { message: "Contact number is required" })
    .regex(/^0\d{10}$/, {
      message: "Phone number must be 11 digits and start with 0",
    }),
  message: z
    .string({ required_error: "Message is required" })
    .min(1, { message: "Message is required" }),
});
export type contactInfoType = z.infer<typeof contactInfo>;
