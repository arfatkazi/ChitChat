import User from "../models/user.model.js"

export const getUserForSideBar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id
		const filterUser = await User.find({ _id: { $ne: loggedInUserId } }).select(
			"-password"
		)

		return res.status(200).json(filterUser)
	} catch (error) {
		console.log(`Error get user controller : `, error.message)
		return res.status(500).json({ error: `Internal server error` })
	}
}
