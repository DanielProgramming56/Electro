import dotenv from "dotenv"
dotenv.config()
import mongoose from 'mongoose';

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URI, {
            
        })

        console.log('connected sucessfully');

    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

