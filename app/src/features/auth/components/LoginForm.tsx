"use client"

import FormGlobal from "./forms/FormGlobal"
import FormInput from "./forms/FormInput"
import FormLabel from "./forms/FormLabel"
import FormSubmit from "./forms/FormSubmit"

export default function LoginForm(){
    return (
        <FormGlobal >
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
                type="email" 
                id="email"
                placeholder="Ingresa tu Email"
            />
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput 
                type="password" 
                id="password"
                placeholder="Ingresa tu Password"
            />
            <FormSubmit value ="guardar"></FormSubmit>
        </FormGlobal>
    )
}