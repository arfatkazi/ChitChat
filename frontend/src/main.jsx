import React from "react"
import ReactDOM from "react-dom/client" // Import ReactDOM from react-dom/client
import { BrowserRouter } from "react-router-dom" // Import BrowserRouter for routing
import App from "./App.jsx"
import "./index.css"

// Create the root element using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
