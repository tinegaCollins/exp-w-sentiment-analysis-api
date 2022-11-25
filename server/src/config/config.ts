import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSSWORD || '';
const MONGO_URL = process.env.MONGO_URI || 'mongodb+srv://CEMS_admin:admin1@cems.5le7maf.mongodb.net/?retryWrites=true&w=majority';

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 5000;

export const config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
}
