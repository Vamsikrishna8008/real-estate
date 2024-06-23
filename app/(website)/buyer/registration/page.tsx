"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  registrationFormSchema,
  registrationFormSchemaType,
} from "@/lib/schemas";
import { useRouter } from "next/navigation";
import { postAll } from "@/lib/dbOperations";
import { SuccessToast } from "@/components/Toaster";

const Register = () => {
  const router = useRouter();

  const proccessForm: SubmitHandler<registrationFormSchemaType> = async (
    data
  ) => {
    const res = await postAll({ uri: "users/register", data: data });
    SuccessToast(res.msg);
    router.back();
  };

  const form = useForm<registrationFormSchemaType>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  return (
    <div className="h-screen w-screen flex flex-col gap-3 justify-center items-center bg-gradient-to-r from-cyan-100 to-cyan-300">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(proccessForm)}
          className="shadow-md hover:border-2 border-primary w-[95%] md:w-[60%] lg:w-[40%] py-4 px-8"
        >
          <h1 className="text-2xl text-center">Register</h1>

          <div className="flex flex-col gap-4 mt-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="123-456-7890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@example.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="mt-6">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Register;
