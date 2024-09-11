import { useCallback, useState } from "react"
import useConversation from "../zustand/useConversation"
import { toast } from "react-hot-toast"

const useSendMessage = () => {
	const [loading, setLoading] = useState(false)
	const { messages, setMessages, selectedConversation } = useConversation()

	const sendMessage = useCallback(
		async (message) => {
			if (!selectedConversation) {
				toast.error("No conversation selected.")
				return
			}

			if (!message.trim()) {
				toast.error("Message cannot be empty.")
				return
			}

			setLoading(true)
			try {
				const res = await fetch(
					`/api/messages/send/${selectedConversation._id}`,
					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ message }),
					}
				)

				if (!res.ok) {
					const errorData = await res.json()
					throw new Error(errorData.error || "Failed to send message.")
				}

				const data = await res.json()
				setMessages((prevMessages) => [...prevMessages, data]) // Functional state update
			} catch (error) {
				toast.error(error.message || "An unknown error occurred.")
			} finally {
				setLoading(false)
			}
		},
		[selectedConversation, setMessages]
	)

	return { sendMessage, loading }
}

export default useSendMessage
