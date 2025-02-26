"use client"
import { LoginForm } from "@/components/LoginForm";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <Image
          src="/undraw_login_wqkt.png"
          alt="login illustration"
          fill
          sizes="(max-width: 1024px) 0px, 50vw"
          className="object-contain dark:brightness-[0.8] dark:grayscale-[50%]"
        />
      </div>
    </div>
  );
}
