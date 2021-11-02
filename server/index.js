import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from "./routes/posts.js"

const app = express() // inits express

app.use("/posts", postRoutes) // every posts in routes will start as http://localhost:5000/posts

app.use(bodyParser.json({limit: "30mb", extended: "true"}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: "true"}))
app.use(cors())

// Use database from https://www.mongodb.com/atlas/database

const CONNECTION_URL = "Url to mongo DB" // this is hidden for a reason :)
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log("Server running on port: " + PORT)))
    .catch((error) => console.log(error.message))