import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useGetConversation = () => {
	const [loading, setLoading] = useState(false)
	const [conversations, setConversations] = useState([])
	useEffect(() => {
		const controller = new AbortController()
		const getConversations = async () => {
			setLoading(true)
			try {
				const res = await fetch("/api/users", { signal: controller.signal }) // it get request so no any method, post, body
				const data = await res.json()
				if (data.error) {
					throw new Error(data.error)
				}
				setConversations(data)
			} catch (error) {
				if (error.name !== "AbortError") {
					toast.error(error.message)
				}
			} finally {
				setLoading(false)
			}
		}
		getConversations()
		return () => controller.abort()
	}, [])
	return { loading, conversations }
}

export default useGetConversation
