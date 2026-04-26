/**
 * Valida que los campos del formulario sean correctos
 */
import z from 'zod'
import { useForm } from 'react-hook-form'
import { FormInput, FormLabel, FormSubmit } from '@/app/src/features/auth/components/forms'

export const BaseAuthSchema = z.object({
    name:     z.string().min(1 /** hace que el usuario no ingrese algo vacio */,{error: 'El nombre es obligatorio'}),
    email:    z.email({error: 'E-mail no es valido'}),
    password: z.string().min(8,{error:'El password debe ser minimo de 8 caracteres'}),
    passwordConfirmation: z.string().min(1, {error: 'El password de confirmacion no puede ir vacio'})
})

/**
 * Hereda de BaseAuthSchema
 */
export const SignUpSchema = BaseAuthSchema.pick({
    name: true,
    email: true,
    password: true,
    passwordConfirmation: true
})