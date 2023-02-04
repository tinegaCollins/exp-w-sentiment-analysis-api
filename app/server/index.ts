import mongoose from 'mongoose'
const config = useRuntimeConfig()
export default async () => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect('mongodb+srv://tinega:realmadrid@cluster0.u12g5up.mongodb.net/?retryWrites=true&w=majority')
        console.log('Database connection established.')
    } catch (err) {
        console.error('DB connection failed.', err)
    }
}
