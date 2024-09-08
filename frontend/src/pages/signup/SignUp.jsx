import React, { useState } from "react"
import GenderCheckbox from "./GenderCheckbox"
import { Link } from "react-router-dom"

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		userName: "",
		password: "",
		confirmPassword: "",
		gender: "",
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(inputs)
	}
	return (
		<>
			<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
				<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
					<h1 className="text-3xl font-semibold text-center text-gray-300 pb-5">
						Sign Up
					</h1>
					<div className="divider divider-info -mt-4"></div>

					<form onSubmit={handleSubmit}>
						<div>
							<label className="label p-2">
								<span className="text-base label-text text-white">
									Full Name
								</span>
							</label>
							<input
								type="text"
								placeholder="Full Name"
								className="w-full  pl-3 input-bordered  h-10 mt-2 mb-2 p-2 rounded-md"
								value={inputs.fullName}
								onChange={(e) =>
									setInputs({ ...inputs, fullName: e.target.value })
								}
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
								className="w-full  pl-3 input-bordered  h-10 mt-2 mb-2 p-2 rounded-md"
								value={inputs.userName}
								onChange={(e) =>
									setInputs({ ...inputs, userName: e.target.value })
								}
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
								className="w-full  pl-3 input-bordered  h-10 mt-2 mb-2 p-2 rounded-md"
								value={inputs.password}
								onChange={(e) =>
									setInputs({ ...inputs, password: e.target.value })
								}
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
								className="w-full  pl-3 input-bordered  h-10 mt-2 mb-2 p-2 rounded-md"
								value={inputs.confirmPassword}
								onChange={(e) =>
									setInputs({ ...inputs, confirmPassword: e.target.value })
								}
							/>
						</div>

						<GenderCheckbox />

						<Link
							className="text-sm hover:underline transition-all hover:text-sky-200 mt-2 inline-block text-white"
							to={"/login"}
						>
							Already have an account?
						</Link>

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
