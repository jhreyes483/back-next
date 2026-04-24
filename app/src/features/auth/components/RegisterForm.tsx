"use client"
import {FormGlobal,FormInput, FormLabel, FormSubmit} from "./forms"

export default function RegisterForm(){
    return (
        <FormGlobal>
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <FormInput
                id="name"
                type="text"
                placeholder="Ingresa tu nombre"
            ></FormInput>

            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
                id="email"
                type="email"
                placeholder="Ingresa tu email"
            />
        </FormGlobal>
    )
}