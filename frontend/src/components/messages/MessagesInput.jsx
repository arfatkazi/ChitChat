import { useState } from "react"
import { TbSend } from "react-icons/tb"
import useSendMessage from "../../hooks/useSendMessage"
import { toast } from "react-hot-toast"

const MessagesInput = () => {
	const [message, setMessage] = useState("")
	const { loading, sendMessage } = useSendMessage()

	const handleSubmit = async (e) => {
		e.preventDefault()
		const trimmedMessage = message.trim()

		if (!trimmedMessage) {
			toast.error("Message cannot be empty.")
			return
		}

		try {
			await sendMessage(trimmedMessage)
			setMessage("")
		} catch (error) {
			toast.error(error.message)
		}
	}

	return (
		<form
			className="px-4 my-3"
			onSubmit={handleSubmit}
		>
			<div className="w-full relative">
				<input
					type="text"
					placeholder="Type a message"
					aria-label="Type a message"
					className="border text-sm rounded-full block w-full p-2.5 pr-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					disabled={loading} // Disable input when loading
				/>
				<button
					type="submit"
					aria-label="Send message"
					className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-500 hover:text-blue-700"
					disabled={loading || !message.trim()} // Disable button when loading or message is empty
				>
					{loading ? (
						<span className="loading loading-spinner"></span>
					) : (
						<TbSend size={20} />
					)}
				</button>
			</div>
		</form>
	)
}

export default MessagesInput
