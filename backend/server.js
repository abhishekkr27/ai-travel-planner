const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")

const authRoutes = require("./routes/authRoutes")
const tripRoutes = require("./routes/tripRoutes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/trips", tripRoutes)

app.listen(5000, () => {
console.log("Server running on port 5000")
})