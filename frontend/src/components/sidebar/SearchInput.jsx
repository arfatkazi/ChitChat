import React from "react"
import { IoSearch } from "react-icons/io5"

const SearchInput = () => {
	return (
		<form className="w-full flex items-center gap-5">
			<input
				type="text"
				placeholder="Search..."
				className="input input-bordered rounded-full p-2 focus:outline-none  pr-24"
			/>
			<button
				type="submit"
				className="btn btn-circle bg-sky-500 hover:bg-sky-600 text-white flex justify-center items-center"
			>
				<IoSearch size={20} />
			</button>
		</form>
	)
}

export default SearchInput
