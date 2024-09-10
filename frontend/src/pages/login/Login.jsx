import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin"

const Login = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const { loading, login } = useLogin()

	const handleSubmit = async (e) => {
		e.preventDefault()
		await login({ username, password })
	}
	return (
		<>
			<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
				<div className="w-full p-6 bg-gray-300 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-2xl ">
					<h1 className="text-3xl font-semibold text-center text-blue-200 capitalize  transition-all">
						login
					</h1>
					<div className="divider divider-info mt-1"></div>

					<form onSubmit={handleSubmit}>
						<div>
							<label className="label  pt-8 ">
								<span className="text-base label-text text-gray-200">
									Username
								</span>
							</label>
							<input
								type="text"
								name="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								placeholder=" Username"
								className="w-full input-bordered h-10 pl-3 rounded-md"
							/>
						</div>
						<div>
							<label className="label  pt-8">
								<span className="text-base label-text text-gray-200">
									Password
								</span>
							</label>
							<input
								type="password"
								name="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Password"
								className="w-full input-bordered h-10 pl-3 rounded-md"
							/>
						</div>
						<Link
							to={"/signup"}
							className="text-sm hover:underline hover:text-blue-800 mt-3 inline-block text-gray-200 transition-all"
						>
							{"Don't"} have an account?
						</Link>
						<div>
							<button
								className="mx-32 mt-5 bg-blue-600 text-white px-10 py-2 rounded-lg transition-all hover:bg-sky-500 hover:shadow-lg"
								disabled={loading}
							>
								{loading ? (
									<span className="loading loading-spinner"></span>
								) : (
									"Login"
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Login
