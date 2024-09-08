import React from "react"

const Conversation = () => {
	return (
		<>
			<div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 cursor-pointer mb-1 transition-all duration-200">
				<div className="avatar online flex-shrink-0">
					<div className="w-10 sm:w-12 rounded-full">
						<img
							src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
							alt="user avatar"
						/>
					</div>
				</div>
				<div className="flex flex-col flex-1 overflow-hidden">
					<div className="flex gap-3 justify-between items-center">
						<p className="font-bold text-gray-200 text-sm sm:text-base md:text-lg truncate pl-3">
							arfat kazi
						</p>
						<span className="text-xl">😍</span>
					</div>
				</div>
			</div>
			<div className="divider my-0 py-0 h-1"></div>
		</>
	)
}

export default Conversation
