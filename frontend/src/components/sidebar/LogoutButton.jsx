import { BiLogOut } from "react-icons/bi"
import useLogout from "../../hooks/useLogout"

const LogoutButton = () => {
	const { loading, logout } = useLogout()

	return (
		<div className="mt-auto">
			<button
				onClick={logout}
				className="flex items-center justify-center p-2 mt-2 bg-blue-600 text-white rounded-full shadow-md transition-transform transform hover:scale-105 active:scale-95 disabled:opacity-50"
				disabled={loading}
			>
				{!loading ? (
					<BiLogOut className="w-6 h-6" />
				) : (
					<span className="loading loading-spinner"></span>
				)}
			</button>
		</div>
	)
}

export default LogoutButton
