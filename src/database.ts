import { Pool } from 'pg'

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'mysecretpassword',
    database: 'firstapi',
    port: 5432
})