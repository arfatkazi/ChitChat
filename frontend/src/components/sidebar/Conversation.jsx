import React from "react"
import useConversation from "../../zustand/useConversation"

const Conversation = ({ conversation, emoji, lastIndex }) => {
	const { selectedConversation, setSelectedConversation } = useConversation()

	const isSelected = selectedConversation?._id === conversation._id
	return (
		<>
			<div
				className={`flex gap-2 items-center hover:bg-sky-500 rounded p-1.5 cursor-pointer mb-1 transition-colors duration-75 h-full ${
					isSelected ? "bg-sky-500" : ""
				} `}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className="avatar online flex-shrink-0">
					<div className="w-10 sm:w-12 rounded-full">
						<img
							src={conversation.profilePic}
							alt="user avatar"
						/>
					</div>
				</div>
				<div className="flex flex-col flex-1 overflow-hidden">
					<div className="flex gap-3 justify-between items-center">
						<p className="font-bold text-gray-200 text-sm sm:text-base md:text-lg truncate pl-3">
							{conversation.fullName}
						</p>
						<span className="text-xl">{emoji}</span>
					</div>
				</div>
			</div>
			{!lastIndex && <div className="divider my-0 py-0 h-1" />}
		</>
	)
}

export default Conversation
