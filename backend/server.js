import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.Routes.js"
import messageRoutes from "./routes/message.Routes.js"
import connectDB from "./config/db.js"
const app = express()
const port = process.env.PORT || 5000

dotenv.config()
// middlewares
app.use(express.json())
app.use(cookieParser())
// app.use(express.urlencoded({ extended: true }))

//Defining routes
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

//  default local routes
app.get("/", (req, res) => {
	console.log(`home page`)
})

app.listen(port, () => {
	//  DATABASE CONNECTION
	connectDB()
	console.log(`server is listening on ${port}`)
})
