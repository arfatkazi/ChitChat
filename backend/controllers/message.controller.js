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

export const getMessages = async (req, res) => {
	try {
		const { id: userToChatId } = req.params
		const senderId = req.user._id

		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate("messages")

		if (!conversation) {
			return res.status(404).json([])
		}
		const messages = conversation.messages

		return res.status(200).json(messages)
	} catch (error) {
		console.log(`Error getMessage controller:`, error.message)
		return res.status(500).json({ error: `Internal getMessage server error` })
	}
}
