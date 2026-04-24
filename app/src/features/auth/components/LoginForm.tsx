"use client"

import FormGlobal from "./forms/FormGlobal"

export default function LoginForm(){
    return (
        <FormGlobal >
            <label className="block" htmlFor="email">Email</label>
            <input 
                type="email" 
                id="email"
                placeholder="Ingresa tu Email"
                className="border border-slate-200 w-full p-2"
            />
            <label className="block" htmlFor="password">Password</label>
            <input 
                type="password" 
                id="password"
                placeholder="Ingresa tu Password"
                className="border border-slate-200 w-full p-2"
            />
        </FormGlobal>


    )
}