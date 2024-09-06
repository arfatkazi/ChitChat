import React from "react"

const Login = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
				<div className="w-full p-6 bg-gray-300 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-2xl ">
					<h1 className="text-3xl font-semibold text-center text-blue-500 capitalize">
						login
					</h1>
					<form>
						<div>
							<label className="label  pt-8 ">
								<span className="text-base label-text text-gray-200">
									Username
								</span>
							</label>
							<input
								type="text"
								placeholder=" Username"
								className="w-full input-bordered h-10 pl-3 rounded-md"
							/>
						</div>
						<div>
							<label className="label  pt-8 ">
								<span className="text-base label-text text-gray-200">
									Password
								</span>
							</label>
							<input
								type="text"
								placeholder="Password"
								className="w-full input-bordered h-10 pl-3 rounded-md"
							/>
						</div>
						<a
							href="#"
							className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-200"
						>
							{"Don't"} have an account?
						</a>
						<div>
							<button className="">Login</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Login
