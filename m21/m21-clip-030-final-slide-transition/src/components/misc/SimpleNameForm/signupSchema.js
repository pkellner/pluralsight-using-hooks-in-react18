import { z } from "zod";

export const signupSchema = z.object({
  firstName: z
    .string()
    .transform((val) => val.trim())
    .pipe(z.string().min(1, "First name is required")),
  lastName: z
    .string()
    .transform((val) => val.trim())
    .pipe(z.string().min(2, "Last Name > 2 char is required")),
  email: z
    .string()
    .transform((val) => val.trim())
    .pipe(z.string().min(1, "Email is required").email("Please enter a valid email address")),
});

export const initialSignupState = {
  message: "",
  isSuccess: false,
  submitting: false,
  firstName: "",
  lastName: "",
  email: "",
};