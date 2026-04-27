import { toNextJsHandler } from "better-auth/next-js";
import { auth } from '@/lib/auth'

/**
 * Identifica que es un proyercto  de next.js y que esta utilizando drizzle,
 * betterAuth todo seteado
 * 
 * se utiliza GET y POST porque va a utilizar POST para setear el cooke
 * pero tambien va a utilizar GET para aslgunas peticiones y para saber si el usuario esta autentocado
 */
export const { GET, POST } = toNextJsHandler(auth)