import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
		},
		fullName: {
			type: String,
			required: true,
		},

		gender: {
			type: String,
			enum: ["male", "female"],
			required: true,
		},

		profilePic: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
	},
	{ timestamps: true }
)

const User = mongoose.model("User", userSchema)

export default User
