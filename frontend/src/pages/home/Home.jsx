import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
	return (
		<div className="flex flex-row h-screen w-full rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 p-4 gap-4">
			<Sidebar className="w-1/3 md:w-1/4 h-full" />
			<MessageContainer className="flex-1 w-2/3 md:w-3/4 h-full" />
		</div>
	)
}

export default Home
