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
            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <FormInput
                id="password"
                type="password"
                placeholder="Password"
                />

            <FormLabel htmlFor="password_confirmation">Repetir Contraseña</FormLabel>
            <FormInput
                id="password"
                type="password"
                placeholder="Repite tu password"
                />
        </FormGlobal>
    )
}