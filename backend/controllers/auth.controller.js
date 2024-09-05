import bcrypt from "bcrypt"
import User from "../models/user.model.js"
import generateTokenAndSetCookie from "../utils/generateToken.js"

export const signup = async (req, res) => {
	try {
		const { fullName, username, password, confirmPassword, gender } = req.body

		if (password !== confirmPassword) {
			return res.status(401).json({ error: `Passwords don't match` })
		}

		const user = await User.findOne({ username })
		if (user) {
			return res.status(400).json({ message: `user already exists` })
		}

		// hashing the password
		const genSalt = await bcrypt.genSalt(10)
		const hashPassword = await bcrypt.hash(password, genSalt)

		// profile pic
		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

		const newUser = new User({
			fullName,
			username,
			password: hashPassword,
			gender,
			profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
		})
		if (newUser) {
			await newUser.save() // saving to database
			// GENERATE JWT TOKEN HERE
			const token = generateTokenAndSetCookie(newUser._id, res)
			return res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				username: newUser.username,
				profilePic: newUser.profilePic,
			})
		} else {
			return res.status(400).json({ error: `invalid user data` })
		}
	} catch (error) {
		console.log(`Error in signup controller: `, error.message)
		return res.status(500).json({ error: "internal server error" })
	}
}

export const login = async (req, res) => {
	try {
		const { username, password } = req.body
		const user = await User.findOne({ username })
		const isPasswordCorrect = await bcrypt.compare(
			password,
			user?.password || ""
		) // 1st password is from input and second user.password is from database
		if (!user || !isPasswordCorrect) {
			return res.status(401).json({ error: `Invalid username and password!` })
		}

		generateTokenAndSetCookie(user._id, res)

		return res.status(201).json({
			message: "login successfully",
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			password: user.password,
			profilePic: user.profilePic,
		})
	} catch (error) {
		console.log(`Error in login controller: `, error.message)
		return res.status(500).json({ error: "internal server error" })
	}
}

export const logout = async (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 }) //expires: new Date(0)
		return res.status(200).json({ message: "Logged out successfully" })
	} catch (error) {
		console.log(`Error in logout controller: `, error.message)
		return res.status(500).json({ error: "internal server error" })
	}
}
