import React from "react"

const Message = () => {
	return (
		<div className="chat chat-end flex flex-col items-end p-2 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-7xl">
			<div className="chat-image avatar">
				<div className="w-8 sm:w-10 md:w-12 lg:w-14 rounded-full overflow-hidden">
					<img
						src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
						alt="user avatar"
					/>
				</div>
			</div>
			<div className="chat-bubble bg-blue-500 text-white px-4 py-2 rounded-lg max-w-full text-sm sm:text-base md:text-lg">
				hi what is up
			</div>
			<div className="chat-footer text-xs sm:text-sm text-gray-400 mt-1">
				12:42
			</div>
		</div>
	)
}

export default Message
