import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
	return (
		<div className="flex flex-col lg:flex-row h-screen lg:h-[calc(100vh-4rem)] lg:w-full rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
			<Sidebar className="w-full lg:w-1/4" />
			<MessageContainer className="flex-1 w-full lg:w-3/4" />
		</div>
	)
}

export default Home
