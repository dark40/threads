import mongoose from 'mongoose';

let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', false)

    if (!process.env.MONGODB_URI) return console.log('No MONGODB_URI found in .env file')
    if (isConnected) return console.log('Already connected to DB')

    try {
        await mongoose.connect(process.env.MONGODB_URI)
        
        isConnected = true
        console.log('Connected to DB')
    } catch (error) {
        console.log(error)
    }

}