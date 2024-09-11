import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation"
import { toast } from "react-hot-toast"

const useGetMessages = () => {
	const [loading, setLoading] = useState(false)
	const { messages, setMessages, selectedConversation } = useConversation()

	useEffect(() => {
		console.log(
			"Fetching messages for conversation ID:",
			selectedConversation?._id
		)
		const getMessages = async () => {
			setLoading(true)
			try {
				// Fetch messages for the selected conversation
				const res = await fetch(`/api/messages/${selectedConversation._id}`)

				// Check if the response is ok (status is in the range 200-299)
				if (!res.ok) {
					throw new Error(`Failed to fetch messages: ${res.statusText}`)
				}

				const data = await res.json()

				// Check if the response contains an error
				if (data.error) {
					throw new Error(data.error)
				}

				// Update the messages state
				setMessages(data)
			} catch (error) {
				// Show an error toast with the error message
				toast.error(
					error.message || "An error occurred while fetching messages."
				)
			} finally {
				// Always set loading to false when the fetch is complete
				setLoading(false)
			}
		}

		// Fetch messages only if the selected conversation ID is available
		if (selectedConversation?._id) {
			getMessages()
		}
	}, [selectedConversation?._id, setMessages])

	return { messages, loading }
}

export default useGetMessages
