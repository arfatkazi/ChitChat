import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

const protectRoute = async (req, res, next) => {
	try {
		const token = req.cookies.jwt

		// Check if token exists
		if (!token) {
			return res
				.status(401)
				.json({ error: `Access denied. No token provided.` })
		}

		// Verify the token
		const decoded = jwt.verify(token, process.env.JWT_SECRET)

		if (!decoded) {
			return res.status(401).json({ error: `Unauthorized Tone does not match` })
		}

		const user = await User.findById(decoded.userId).select("-password")

		if (!user) {
			return res.status(404).json({ error: `User not found!` })
		}

		// Attach the decoded user information to the request object
		req.user = user // <- this 2 user is from database
		// Proceed to the next middleware or route handler
		next()
	} catch (error) {
		console.log(`Error protectRoute controller:`, error.message)
		// Handle specific JWT errors
		if (error.name === "JsonWebTokenError") {
			return res.status(401).json({ error: "Invalid token." })
		} else if (error.name === "TokenExpiredError") {
			return res.status(401).json({ error: "Token has expired." })
		}
		return res.status(500).json({ error: `Internal server error` })
	}
}

export default protectRoute
