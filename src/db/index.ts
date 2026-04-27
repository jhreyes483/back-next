/**
 * libretias
 */
import { drizzle } from 'drizzle-orm/node-postgres'

/**
 * propios
 */
import { relations } from './relations'
import * as schema from './schema'

export const db = drizzle(process.env.DATABASE_URL!, {
    relations,
    schema
})