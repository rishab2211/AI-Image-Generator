"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useId, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { signup } from "@/app/auth-actions";
import { useRouter } from "next/navigation";



const passwordValidation =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

const formSchema = z
  .object({
    fullName: z
      .string({
        required_error: "Full name is required",
      })
      .min(2,{
        message : "fullName must contain atleast 2 character"
      })
      .max(50),
    email: z.string().email({
      message: "A valid email address is required",
    }),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(8, {
        message: "Password must be 8 characters long",
      })
      .regex(passwordValidation, {
        message:
          "Password must contain atleast 1 Uppercase, 1 Lowercase, 1 Numeric and 1 Special character",
      }),
    confirmPassword: z.string({
      required_error: "Enter confirm password",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password must be same",
    path: ["confirmPassword"],
  });

const SignupForm = () => {

    const [loading, setLoading] = useState(false);
    const toastId = useId();
    const router = useRouter();


  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.loading("Signing up...",{id: toastId});
    setLoading(true);

    const formData =new FormData();

    formData.append("fullName",values.fullName);
    formData.append("email",values.email);
    formData.append("password",values.password);
    formData.append("confirmPassword",values.confirmPassword);

    const {success, error} = await signup(formData);
    console.log("success : "+success);
    console.log("error : "+error);
    
    if(!success){
        toast.error(String(error),{id: toastId});
    }else{
        toast.success("Signed up successfully! Please confirm email validation with the link sent at your email address ", {id:toastId});
        router.push("/login");
    }

    setLoading(false)
    
    
  }

  return (
    <>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" type="text" {...field} />
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
                    <Input placeholder="Enter your email" {...field} />
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
                    <Input placeholder="Create password" {...field} />
                  </FormControl>
                  <FormDescription>
                    Create a strong password for your account
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter Confirm password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
           <div className="text-center">
           <Button type="submit" disabled={loading} className="w-full" >
                {loading && <Loader2 className="mr-2 h-4 animate-spin "  />}
                Submit</Button>
           </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default SignupForm;
