import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.Routes.js'
import messageRoutes from './routes/message.Routes.js'
import userRoutes from './routes/user.Routes.js'
import connectDB from './config/db.js'
const app = express()
const port = process.env.PORT || 5000

const __dirname = path.resolve()
dotenv.config()
// middlewares
app.use(express.json())
app.use(cookieParser())
// app.use(express.urlencoded({ extended: true }))

//Defining routes
app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)

app.use(express.static(path.join(__dirname, '/frontend/dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
})

app.listen(port, () => {
  //  DATABASE CONNECTION
  connectDB()
  console.log(`server is listening on ${port}`)
})
