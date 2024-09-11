import React from "react"
import Message from "./Message"
import useGetMessages from "../../hooks/useGetMessages"
import Skeleton from "../skeleton/Skeleton"

const Messages = () => {
	const { messages, loading } = useGetMessages()
	console.log(messages)

	return (
		<div className="py-4 flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-2">
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<Message
						key={message._id}
						message={message}
					/>
				))}
			{loading && [...Array(3).map((_, index) => <Skeleton key={index} />)]}
			{!loading && messages.length === 0 && (
				<p className="text-center">
					Send a message to start a new conversation
				</p>
			)}
		</div>
	)
}

export default Messages
