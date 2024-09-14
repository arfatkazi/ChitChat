import { useEffect } from "react"
import useConversation from "../../zustand/useConversation"
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { TiMessages } from "react-icons/ti"
import { useAuthContext } from "../../context/AuthContext"

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation()

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null)
	}, [setSelectedConversation])

	return (
		<div className="flex flex-col h-full w-full bg-white dark:bg-gray-800 border-l border-gray-300 dark:border-gray-700">
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className="bg-gray-500 text-white px-4 py-2 flex items-center justify-between border-b border-gray-300 dark:border-gray-700">
						<span className="text-sm sm:text-base">To:</span>{" "}
						<span className="text-lg sm:text-xl font-bold">
							{selectedConversation.fullName}
						</span>
					</div>
					{/* Messages */}
					<div className="flex-grow overflow-auto p-4">
						<Messages />
					</div>
					{/* Message Input */}
					<div className="p-4 bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
						<MessageInput />
					</div>
				</>
			)}
		</div>
	)
}

const NoChatSelected = () => {
	const { authUser } = useAuthContext()
	return (
		<div className="flex flex-col items-center justify-center h-full p-4 text-center">
			<div className="flex flex-col items-center gap-2">
				<p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
					Welcome 👋 {authUser.fullName} ❄
				</p>
				<p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
					Select a chat to start messaging
				</p>
				<TiMessages className="text-3xl sm:text-4xl md:text-5xl text-gray-600 dark:text-gray-400" />
			</div>
		</div>
	)
}

export default MessageContainer
