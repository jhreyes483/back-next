import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { nextCookies } from 'better-auth/next-js'
import { db  } from '../db'

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: 'pg',
        usePlural: true
    }),
    // habilita la autenticacion por email de la libreria better-auth
    emailAndPassword: {
        enabled : true
    },
    plugins: [nextCookies()]
})