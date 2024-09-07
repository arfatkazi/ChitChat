import React from "react"
import GenderCheckbox from "./GenderCheckbox"

const SignUp = () => {
	return (
		<>
			<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
				<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
					<h1 className="text-3xl font-semibold text-center text-gray-300 pb-5">
						Sign Up
					</h1>

					<form>
						<div>
							<label className="label p-2">
								<span className="text-base label-text text-white">
									Full Name
								</span>
							</label>
							<input
								type="text"
								placeholder="Full Name"
								className="w-full input input-bordered  h-8 mt-2 mb-2 p-2 rounded-md"
							/>
						</div>

						<div>
							<label className="label p-2 ">
								<span className="text-base label-text text-white">
									Username
								</span>
							</label>
							<input
								type="text"
								placeholder="Username"
								className="w-full input input-bordered h-10 mt-2 mb-2 p-2 rounded-md"
							/>
						</div>

						<div>
							<label className="label p-2">
								<span className="text-base label-text text-white">
									Password
								</span>
							</label>
							<input
								type="password"
								placeholder="Password"
								className="w-full input input-bordered h-10 mt-2 mb-2 p-2 rounded-md"
							/>
						</div>

						<div>
							<label className="label">
								<span className="text-base label-text text-white">
									Confirm Password
								</span>
							</label>
							<input
								type="password"
								placeholder="Confirm Password"
								className="w-full input input-bordered h-10 mt-2 mb-2 p-2 rounded-md"
							/>
						</div>

						<GenderCheckbox />

						<a
							className="text-sm hover:underline transition-all hover:text-sky-200 mt-2 inline-block text-white"
							href="#"
						>
							Already have an account?
						</a>

						<div>
							<button className="bg-blue-500 mt-5 px-5 py-1 ml-28 rounded-sm transition-all text-white hover:bg-sky-400 hover:shadow-md">
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default SignUp
