import express from "express"
const router = express.Router()
import { getMessages, sendMessage } from "../controllers/message.controller.js"
import protectRoute from "../middlewares/protectRoutes.js"

router.get("/:id", protectRoute, getMessages)
router.post("/send/:id", protectRoute, sendMessage)

export default router
