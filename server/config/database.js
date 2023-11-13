import mongoose from "mongoose"
export const ConnectDatabase = async (next) => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URI)
        console.log('database connected successfully');
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}