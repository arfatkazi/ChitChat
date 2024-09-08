import React from "react"
import SearchInput from "./SearchInput"
import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"

const Sidebar = () => {
	return (
		<div className="border-r border-slate-500 p-4 flex flex-col pt-12 w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 h-full bg-gray-800 overflow-y-auto custom-scrollbar">
			<SearchInput />
			<div className="divider px-3 my-4 border-t border-slate-600"></div>
			<Conversations />
			<div className="mt-auto">
				<LogoutButton />
			</div>
		</div>
	)
}

export default Sidebar
