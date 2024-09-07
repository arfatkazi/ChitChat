import React from "react"

const GenderCheckbox = () => {
	return (
		<div className="flex mt-2 mb-1">
			<div className="form-control flex justify-center items-center">
				<label className="label gap-2 cursor-pointer">
					<span className="mr-2 text-white">Male</span>
					<input
						type="checkbox"
						className="checkbox border-slate-900"
					/>
				</label>
			</div>
			<div className="form-control flex justify-center items-center">
				<label className="label gap-2 cursor-pointer ml-3">
					<span className="text-white">Female</span>
					<input
						type="checkbox"
						className="checkbox border-slate-900"
					/>
				</label>
			</div>
		</div>
	)
}

export default GenderCheckbox
