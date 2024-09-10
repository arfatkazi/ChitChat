import React from "react"
import Conversation from "./Conversation"
import useGetConversations from "../../hooks/useGetConversation"
import { getRandomEmoji } from "../../utils/emojis.js"

const Conversations = () => {
	const { loading, conversations, error } = useGetConversations()
	console.log("Conversation : ", conversations)
	if (loading) {
		return <span className="loading loading-spinner mx-auto"></span>
	}

	if (error) {
		return (
			<p className="text-red-500 mx-auto">
				Failed to load conversations. Please try again later.
			</p>
		)
	}
	return (
		<div className="py-2 flex flex-col gap-2 overflow-y-auto h-full custom-scrollbar">
			{conversations.map((conversation, index) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIndex={index === conversation.length - 1}
				/>
			))}
			{loading ? (
				<span className="loading loading-spinner mx-auto"></span>
			) : null}
		</div>
	)
}

export default Conversations
