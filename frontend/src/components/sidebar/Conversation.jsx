import React from "react"

const Conversation = ({ conversation, emoji, lastIndex }) => {
	return (
		<>
			<div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 cursor-pointer mb-1 transition-all duration-200">
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
			{!lastIndex && <div className="" />}
		</>
	)
}

export default Conversation
