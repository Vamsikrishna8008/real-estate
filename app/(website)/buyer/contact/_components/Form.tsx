"use client";
import { SuccessToast } from "@/components/Toaster";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { postAll } from "@/lib/dbOperations";
import { contactFormSchema, contactFormSchemaType } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const router = useRouter();
  const form = useForm<contactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      number: "",
      message: "",
    },
  });

  const processForm = async (data: contactFormSchemaType) => {
    console.log(data, "llll");
    const res = await postAll({ uri: "admin/contact", data });
    SuccessToast(res.msg);
    router.back();
  };

  return (
    <div className="flex flex-row gap-3 justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(processForm)}
          className="shadow-md w-[95%] md:w-[70%] lg:w-[80%] py-4 px-8"
        >
          <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
          <div className="flex flex-col gap-4 mt-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Number" type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
