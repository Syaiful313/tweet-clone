"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import useLogin from "@/hooks/api/auth/useLogin";
import { LoginSchema } from "@/app/login/schemas";
import { useFormik } from "formik";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const { loginUser } = useLogin();

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      await loginUser(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="login">Email</Label>
          <Input
            id="login"
            type="text"
            placeholder="example@mail.com"
            value={formik.values.login}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {!!formik.touched.login && !!formik.errors.login ? (
            <p className="text-xs text-red-500">{formik.errors.login}</p>
          ) : null}
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            required
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {!!formik.touched.password && !!formik.errors.password ? (
            <p className="text-xs text-red-500">{formik.errors.password}</p>
          ) : null}
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </form>
  );
}
