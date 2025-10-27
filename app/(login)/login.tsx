"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleIcon, Loader2 } from "lucide-react";
import { signIn, signUp } from "./actions";
import { ActionState } from "@/lib/auth/middleware";
import { SignIn, SignUp } from "@clerk/nextjs";

export function Login({ mode = "signin" }: { mode?: "signin" | "signup" }) {
  return (
    <div className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          {mode === "signup" ? (
            <SignUp signInUrl="/sign-in" forceRedirectUrl={"/pricing"}></SignUp>
          ) : (
            <SignIn signUpUrl="/sign-up"></SignIn>
          )}
        </div>
      </div>
    </div>
  );
}
