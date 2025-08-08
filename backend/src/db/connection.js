import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongoose connect successfully`)
    } catch (error) {
        console.log('connection failed !!', error.message)

    }
}
export default connectDB