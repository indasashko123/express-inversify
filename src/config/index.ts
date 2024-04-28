import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
    port : process.env.PORT,

    database : {
        base : process.env.DB_NAME,
        username : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        host : process.env.DB_HOST,
        port : Number(process.env.DB_PORT),
        dialect : process.env.DIALECT,
    }
}