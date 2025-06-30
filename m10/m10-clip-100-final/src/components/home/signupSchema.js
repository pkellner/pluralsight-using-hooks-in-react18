import { z } from "zod";

export const signupSchema = z.object({
  firstName: z
    .string()
    .trim()
    .nonempty("First name is required"),

  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid e-mail address")
    .toLowerCase(),
});

export const initialSignupState = {
  message: "",
  isSuccess: false,
  submitting: false,
  firstName: "",
  lastName: "",
  email: "",
};