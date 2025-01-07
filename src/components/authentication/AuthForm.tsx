"use client";

import { useState } from "react";

import { Button } from "../ui/button";
import Link from "next/link";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import ResetPasswordForm from "./ResetPasswordForm";

const AuthForm = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className="space-y-6 ">
      <div className="flex flex-col space-y-2 text-center  ">
        <div className=" text-2xl font-semibold tracking-tight ">
          {mode === "reset"
            ? "Reset Password"
            : mode === "login"
            ? "Login"
            : "Signup"}
        </div>
        <p className=" text-sm text-muted-foreground tracking-tight ">
          {mode === "reset"
            ? "Enter your email below to reset password."
            : mode === "login"
            ? "Enter your email and password to login to your account"
            : "Enter your info below to create an account"}
        </p>
      </div>

      {mode === "login" && (
        <>
          <LoginForm />
          <div className="flex justify-between ">
            <Button
              className=" pl-0 "
              variant={"link"}
              onClick={() => setMode("signup")}
            >
              Need an account? Signup
            </Button>
            <Button
              className=" pr-0 "
              variant={"link"}
              onClick={() => setMode("reset")}
            >
              Forgot password?
            </Button>
          </div>
        </>
      )}
      {mode === "signup" && (
        <>
          <SignupForm />
          <div className="w-max ">
            <Button
              className=" pl-0 "
              variant={"link"}
              onClick={() => setMode("login")}
            >
              Already have an account?Signin
            </Button>
          </div>
          <p className="text-sm" >
            By clicking signup, you agree to our{" "}
            <Link
              href={"#"}
              className="underline underline-offset-4 hover:text-black/50 "
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href={"#"}
              className="underline underline-offset-4 hover:text-black/50"
            >
              Privacy policy
            </Link>
          </p>
        </>
      )}
      {mode === "reset" && (
        <>
          <ResetPasswordForm />
          <div className="flex justify-between ">
            <Button
              className=" pl-0 "
              variant={"link"}
              onClick={() => setMode("login")}
            >
              Back to login?
            </Button>
            
          </div>
        </>
      )}
    </div>
  );
};

export default AuthForm;
