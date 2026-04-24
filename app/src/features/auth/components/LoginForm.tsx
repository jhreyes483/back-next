"use client"
import {FormGlobal,FormInput, FormLabel, FormSubmit} from "./forms"

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