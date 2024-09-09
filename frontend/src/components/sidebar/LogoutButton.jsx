import React from "react"
import { BiLogOut } from "react-icons/bi"
import useLogOut from "../../hooks/useLogOut"

const LogoutButton = () => {
	const { loading, logout } = useLogOut()

	return (
		<div className="mt-auto flex justify-center sm:justify-start pr-4">
			<button
				onClick={logout}
				disabled={loading}
				className={`flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full py-2 px-4 transition duration-200 ${
					loading ? "opacity-50 cursor-not-allowed" : ""
				}`}
			>
				{!loading ? (
					<>
						<BiLogOut className="w-5 h-5 sm:w-6 sm:h-6" />
						<span className="hidden sm:inline">Logout</span>
					</>
				) : (
					<span className="loading loading-spinner"></span>
				)}
			</button>
		</div>
	)
}

export default LogoutButton
