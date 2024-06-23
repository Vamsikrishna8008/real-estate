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
import { loginFormSchema, loginFormSchemaType } from "@/lib/schemas";
// import { login } from "@/lib/actions";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getAllDetails, postAll } from "@/lib/dbOperations";

const Login = () => {
  const { toast } = useToast();
  const router = useRouter();

  const proccessForm: SubmitHandler<loginFormSchemaType> = async (data) => {
    const res = await postAll({ uri: "admin/login", data: data });
    await localStorage.setItem("token", res.token);
    router.replace("admin");
  };

  const form = useForm<loginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <div className="h-screen w-screen flex flex-col gap-3 justify-center items-center bg-gradient-to-r from-cyan-100 to-cyan-300">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(proccessForm)}
          className="shadow-md border-2 border-primary w-[95%] md:w-[60%] lg:w-[40%] py-4 px-8"
        >
          <h1 className="text-2xl text-center">Login</h1>

          <div className="flex flex-col gap-4 mt-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Admin" {...field} />
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
                    <Input placeholder="Admin" type="password" {...field} />
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

export default Login;
