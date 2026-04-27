import { auth } from "@/src/lib/auth"
import { SignUpInput } from "../schemas/authSchema"

class AuthService {
    async register(credentials : SignUpInput) {
        const {name, email, password} = credentials

        // Revisar si el usuario existe

        // Validacion de negocio

        // Manejar el registro
        await auth.api.signUpEmail({
            body:{
                name, 
                email,
                password
            }
        })

        return {
            error: '',
            success: 'Cuenta creada revisa tu email'
        }
    }
}

export const authService = new AuthService()