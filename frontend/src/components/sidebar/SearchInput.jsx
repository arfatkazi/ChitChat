import React from "react"
import { IoSearch } from "react-icons/io5"

const SearchInput = () => {
	return (
		<form className="w-full flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
			<input
				type="text"
				placeholder="Search..."
				className="input input-bordered rounded-full p-2 pl-4 pr-12 text-sm sm:text-base md:text-lg w-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
			/>
			<button
				type="submit"
				className="btn btn-circle bg-sky-500 hover:bg-sky-600 text-white flex justify-center items-center p-2 sm:p-2.5 md:p-3"
			>
				<IoSearch size={20} />
			</button>
		</form>
	)
}

export default SearchInput
