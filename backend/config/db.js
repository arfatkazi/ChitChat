import mongoose from "mongoose"

const connectDB = async () => {
	try {
		mongoose.connect(process.env.MONGO_DB_URI)
		console.log(`database connected`)
	} catch (error) {
		console.log(`Error database not connected: `, error.message)
	}
}

export default connectDB
