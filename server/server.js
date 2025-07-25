import express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

// Initialize express

const app = express()

//connect to db
await connectDB()

// middleware
app.use(cors())

// Routes
app.get('/', (req,res)=> res.send("API Working"))
app.post('/clerk', express.json(), clerkWebhooks)

// Port 
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`⚙️  Server is running on Port ${PORT}`)
})