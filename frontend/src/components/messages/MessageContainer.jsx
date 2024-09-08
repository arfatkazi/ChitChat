import React from "react"
import Messages from "./Messages"
import MessagesInput from "./MessagesInput"
import { TbMessagePlus } from "react-icons/tb"

const NoChatSelected = () => {
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="px-4 text-center sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-semibold flex flex-col items-center gap-2">
				<p className="">ChatApp for EveryBody</p>
				<p className="text-sm sm:text-base md:text-lg lg:text-xl">
					Select a chat to start messaging
				</p>
				<TbMessagePlus className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl" />
			</div>
		</div>
	)
}

const MessageContainer = () => {
	const isNoChatSelected = true
	return (
		<div className="flex flex-col w-full h-full md:min-w-[75vw]">
			{!isNoChatSelected ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className="bg-slate-500 px-4 py-2 mb-2">
						<span className="label-text">To: </span>
						<span className="text-gray-900 font-bold ml-1">Furkan</span>
					</div>
					<Messages />
					<MessagesInput />
				</>
			)}
		</div>
	)
}

export default MessageContainer
