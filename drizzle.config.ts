/**
 * Lee variables de netorno 
 */
import 'dotenv/config'
/**
 * Tiene diferentes funciones para interactuar con la base de datos
 */
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    out: './drizzle',
    schema: './src/db/schema/*', // aca deja las migraciones y squemas
    dialect: 'postgresql', // motor de db
    dbCredentials: {
        url: process.env.DATABASE_URL!
    }
})