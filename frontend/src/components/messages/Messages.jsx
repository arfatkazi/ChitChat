import React from "react"
import Message from "./Message"
import useGetMessages from "../../hooks/useGetMessages"

const Messages = () => {
	const { messages, loading } = useGetMessages()
	console.log(messages)
	return (
		<div className="py-4 flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-2">
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
			<Message />
		</div>
	)
}

export default Messages
