import { z } from 'zod'

// Email validation
export const emailSchema = z.string().email('Invalid email address')

// Password validation
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character')

// Phone validation
export const phoneSchema = z.string().regex(
  // eslint-disable-next-line no-useless-escape
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  'Invalid phone number'
)

// Common validation schemas
export const userSchema = z.object({
  id: z.string().uuid(),
  email: emailSchema,
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: phoneSchema.optional(),
  role: z.enum(['admin', 'user', 'guest']),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required'),
})

export const signupSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
    name: z.string().min(2, 'Name must be at least 2 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

// Validation helpers
export const isValidEmail = (email: string): boolean => {
  try {
    emailSchema.parse(email)
    return true
  } catch {
    return false
  }
}

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export const isValidUUID = (uuid: string): boolean => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
  return uuidRegex.test(uuid)
}

// Type exports
export type User = z.infer<typeof userSchema>
export type LoginInput = z.infer<typeof loginSchema>
export type SignupInput = z.infer<typeof signupSchema>
