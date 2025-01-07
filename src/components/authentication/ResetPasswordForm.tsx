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
import { useState } from "react";
import { Loader2 } from "lucide-react";

const passwordValidation =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

const formSchema = z
  .object({
    fullName: z
      .string({
        required_error: "Full name is required",
      })
      .min(2)
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
 

const ResetPasswordForm = () => {

    const [loading, setLoading] = useState(false);


  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormDescription>
                    A Reset password link will be sent to the above provided email
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
                   
            <Button type="submit" disabled={loading} className="w-full" >
                {loading && <Loader2 className="mr-2 h-4 animate-spin "  />}
                Reset Password</Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ResetPasswordForm;
