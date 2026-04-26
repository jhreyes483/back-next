
"use client"

import { FormGlobal, FormInput, FormLabel, FormSubmit } from "./forms"

export default function ForgotPasswordForm(){
    return (
        <FormGlobal>
            <FormLabel>Correo</FormLabel>
            <FormInput
                type="email"
                id="email"
                placeholder="Ingresa tu email"
            />
            <FormSubmit
                value="enviar instrucciones"
            />
        </FormGlobal>
    )
}