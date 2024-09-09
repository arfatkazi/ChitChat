import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"
const handleInputError = ({
	fullName,
	username,
	password,
	confirmPassword,
	gender,
}) => {
	if (!fullName || !username || !password || !confirmPassword || !gender) {
		toast.error("Please fill  in all field")
		return false
	}
	if (password !== confirmPassword) {
		toast.error(`password doesn't match`)
		return false
	}
	if (password.length < 6) {
		toast.error(`Password must be at least 6 characters `)
		return false
	}

	return true
}

// this is custom hook for signup
const UseSignUp = () => {
	const [loading, setLoading] = useState(false)
	const { setAuthUser } = useAuthContext()

	const signup = async ({
		fullName,
		username,
		password,
		confirmPassword,
		gender,
	}) => {
		const success = handleInputError({
			fullName,
			username,
			password,
			confirmPassword,
			gender,
		})

		if (!success) return
		setLoading(true)
		try {
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					fullName,
					username,
					password,
					confirmPassword,
					gender,
				}),
			})
			const data = await res.json()
			console.log(data)

			if (data.error) {
				throw new Error(data.error)
			}
			//localstorage
			localStorage.setItem("chat-user", JSON.stringify(data))
			//context
			setAuthUser(data)
		} catch (error) {
			toast.error(error.message)
		} finally {
			setLoading(false)
		}
	}
	return { loading, signup }
}

export default UseSignUp
