"use client";
import RegisterSchema from "@/app/register/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useRegister from "@/hooks/api/auth/useRegister";
import { cn } from "@/lib/utils";
import { useFormik } from "formik";
import Link from "next/link";

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const { registerUser } = useRegister();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      await registerUser(values);
    },
  });

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Register to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your details below to create an account.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            name="name"
            type="text"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {!!formik.touched.name && !!formik.errors.name ? (
            <p className="text-red-500">{formik.errors.name}</p>
          ) : null}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            type="email"
            placeholder="myname@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {!!formik.touched.email && !!formik.errors.email ? (
            <p className="text-red-500">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {!!formik.touched.password && !!formik.errors.password ? (
            <p className="text-red-500">{formik.errors.password}</p>
          ) : null}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Confirm Password</Label>
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {!!formik.touched.confirmPassword && !!formik.errors.confirmPassword ? (
            <p className="text-red-500">{formik.errors.confirmPassword}</p>
          ) : null}
        </div>

        <Button type="submit" className="w-full">
          Register
        </Button>
      </div>

      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline underline-offset-4">
          Sign In
        </Link>
      </div>
    </form>
  );
}
