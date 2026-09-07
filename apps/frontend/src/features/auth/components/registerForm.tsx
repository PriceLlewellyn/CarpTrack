import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { registerUser } from "./api/authApi" 
import { Button } from "./ui/button" 
import { 
  Card, 
  CardHeader, 
  CardDescription, 
  CardTitle, 
  CardContent 
} from "./ui/card" 
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "./ui/field"
import { Input } from "./ui/input"
import { useNavigate } from "react-router-dom"
import { registerSchema, type RegisterFormValues } from "../schemas/auth.schema"


export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const [serverError, setServerError] = useState<string | null>(null)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      age: 0,
      confirmPassword: "",
    },
  })

  // 2. Form submission handler using your API function
  const onSubmit = async (values: RegisterFormValues) => {
    setServerError(null)

    try {
      // Map UI values to the payload expected by backend
      const response = await registerUser({
        username: values.name, // Change to 'name' if backend uses 'name'
        email: values.email,
        password: values.password,
        age: values.age,
      })

      localStorage.setItem("access_token", response.access_token)
      navigate("/dashboard")
    } catch (error) {
      if (error instanceof Error) {
        setServerError(error.message)
      } else {
        setServerError("An unexpected system error occurred")
      }
    }
  }

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup className="space-y-4">
            
            {/* Display Backend Server Errors */}
            {serverError && (
              <div className="p-3 text-sm font-medium text-destructive bg-destructive/10 rounded-md">
                {serverError}
              </div>
            )}

            {/* Name Field */}
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                disabled={isSubmitting}
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm font-medium text-destructive">{errors.name.message}</p>
              )}
            </Field>

            {/* Email Field */}
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                disabled={isSubmitting}
                {...register("email")}
              />
              {errors.email ? (
                <p className="text-sm font-medium text-destructive">{errors.email.message}</p>
              ) : (
                <FieldDescription>
                  We&apos;ll use this to contact you. We will not share your email with anyone else.
                </FieldDescription>
              )}
            </Field>

            {/* Password Field */}
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                disabled={isSubmitting}
                {...register("password")}
              />
              {errors.password ? (
                <p className="text-sm font-medium text-destructive">{errors.password.message}</p>
              ) : (
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              )}
            </Field>

            {/* Confirm Password Field */}
            <Field>
              <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
              <Input
                id="confirm-password"
                type="password"
                disabled={isSubmitting}
                {...register("confirmPassword")}
              />
              {errors.confirmPassword ? (
                <p className="text-sm font-medium text-destructive">{errors.confirmPassword.message}</p>
              ) : (
                <FieldDescription>Please confirm your password.</FieldDescription>
              )}
            </Field>

            {/* Actions */}
            <FieldGroup className="pt-2 space-y-2">
              <Field>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </Button>
                <Button variant="outline" type="button" className="w-full" disabled={isSubmitting}>
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center pt-2">
                  Already have an account? <a href="/login" className="underline">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>

          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}