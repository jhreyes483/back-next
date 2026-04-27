"use server"

import { SignUpInput, SignUpSchema } from "@/src/features/auth/schemas/authSchema"
import { authService } from "../services/AuthRepository"

export async function signUpAction( input : SignUpInput) {
    const data = SignUpSchema.safeParse(input)

    if(!data.success){
        return {
            error: 'Hubo un error',
            success: ''
        }
    }
    console.log(data.success)

    await authService.register(data.data)
}