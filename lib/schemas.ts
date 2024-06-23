import * as z from "zod";

export type loginFormSchemaType = z.infer<typeof loginFormSchema>;
export const loginFormSchema = z.object({
  username: z.string().min(1, {
    message: "UserName is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export type propertyFormSchemaType = z.infer<typeof propertyFormSchema>;

export const propertyFormSchema = z.object({
  title: z.string().min(1, {
    message: "Title is requered",
  }),
  description: z.string().min(1, {
    message: "Description is requered",
  }),
  address: z.string().min(1, { message: "Address is required" }),
  cost: z.preprocess(
    (val) => Number(val),
    z.number().min(1, { message: "Cost is required" })
  ),
  image: z.instanceof(File).refine((file) => file instanceof File, {
    message: "Image is required",
  }),
});

export type contactFormSchemaType = z.infer<typeof contactFormSchema>;
export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  number: z.string().min(1, { message: "Number is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});
export const registrationFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export type registrationFormSchemaType = z.infer<typeof registrationFormSchema>;
