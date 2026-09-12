import mongoose from "mongoose"

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI)

    console.log(
      `MongoDB connected: ${connection.connection.host}`
    )
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB