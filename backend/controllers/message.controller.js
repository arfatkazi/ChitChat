import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async (req, res) => {
	try {
		const { message } = req.body // this message come from message model
		const { id: receiverId } = req.params // Retrieve receiver ID from the route parameter
		const senderId = req.user._id // Retrieve sender ID from the authenticated user middle ware

		//we find coversation for both people sender or receiver
		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		})
		// if conversation does not exist than create
		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			})
		}

		// Create a new message

		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		})

		// Save the new message to the database
		await newMessage.save()

		if (newMessage) {
			conversation.messages.push(newMessage._id) // Add the new message ID to the conversation's messages array
			await conversation.save() //Save the updated conversation
		}

		await Promise.all([conversation.save(), newMessage.save()])
		return res.status(201).json(newMessage)
	} catch (error) {
		console.log(`Error sendmessage controller:`, error.message)
		return res
			.status(500)
			.json({ error: `Internal messagesection server error` })
	}
}

// export const getMessages = async (req, res) => {
// 	try {
// 		const { id: userToChatId } = req.params
// 		const senderId = req.user._id

// 		const conversation = await Conversation.findOne({
// 			participants: { $all: [senderId, userToChatId] },
// 		}).populate("messages")

// 		if (!conversation) {
// 			return res.status(404).json([])
// 		}
// 		const messages = conversation.messages

// 		return res.status(200).json(messages)
// 	} catch (error) {
// 		console.log(`Error getMessage controller:`, error.message)
// 		return res.status(500).json({ error: `Internal getMessage server error` })
// 	}
// }

export const getMessages = async (req, res) => {
	try {
		const { id: userToChatId } = req.params
		const senderId = req.user._id

		console.log(`Request params:`, req.params)
		console.log(`Sender ID:`, senderId)
		console.log(`User to Chat ID:`, userToChatId)

		if (!userToChatId || !senderId) {
			return res.status(400).json({ error: "Invalid parameters" })
		}

		// Find the conversation
		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate("messages")

		if (!conversation) {
			console.log("Conversation not found")
			return res.status(404).json([])
		}

		console.log("Conversation found:", conversation)
		const messages = conversation.messages

		return res.status(200).json(messages)
	} catch (error) {
		console.error("Error in getMessages controller:", error)
		return res.status(500).json({ error: "Internal server error" })
	}
}
