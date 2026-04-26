"use client"
import { useForm } from "react-hook-form"
import {FormError, FormGlobal,FormInput, FormLabel, FormSubmit} from "./forms"
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpSchema } from "@/app/src/shared/components/schemas/authSchema"

export default function RegisterForm(){

    /**
     * del hook extraemos register (permite conectar con los campos del formulario)
     * en  resolver: zodResolver(SignUpSchema) se conecta el Schema creado en app\src\shared\components\schemas\authSchema.ts
     */
    const { register, handleSubmit, formState : { errors } } = useForm({
        resolver: zodResolver(SignUpSchema)
    })
    console.log(errors)


    const onSubmit = () =>{
        console.log('Submit...')
    }

    return (
        <FormGlobal 
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <FormInput
                id="name"
                type="text"
                placeholder="Ingresa tu nombre"
                {...register('name')}
            />
            {errors.name && <FormError>{errors.name.message}</FormError>}

            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
                id="email"
                type="email"
                placeholder="Ingresa tu email"
                {...register('email')}
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}

            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <FormInput
                id="password"
                type="password"
                placeholder="Password"
                {...register('password')}
            />
            {errors.password && <FormError>{errors.password.message}</FormError>}

            <FormLabel htmlFor="password_confirmation">Repetir Contraseña</FormLabel>
            <FormInput
                id="password"
                type="password"
                placeholder="Repite tu password"
                {...register('passwordConfirmation')}
                />
                {errors.passwordConfirmation && <FormError>{errors.passwordConfirmation.message}</FormError>}
            <FormSubmit 
            value="registrarme"
            />
        </FormGlobal>
    )
}