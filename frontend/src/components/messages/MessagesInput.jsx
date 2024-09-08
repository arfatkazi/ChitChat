import React from "react"
import { TbSend } from "react-icons/tb"

const MessagesInput = () => {
	return (
		<form className="px-4 my-3">
			<div className="w-full relative">
				<input
					type="text"
					placeholder="Type a message"
					className="border text-sm rounded-full block w-full p-2.5 pr-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
				/>
				<button
					type="submit"
					className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-500 hover:text-blue-700"
				>
					<TbSend size={20} />
				</button>
			</div>
		</form>
	)
}

export default MessagesInput
