const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const db = require('./config/db')

dotenv.config()

// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use('/api',require('./routes/testRoutes'))
app.use('/auth',require('./routes/authRoutes'))
app.use('/user',require('./routes/userRoutes'))
app.use('/resturant',require('./routes/resturantRoutes'))
app.use('/category',require('./routes/categoryRoutes'))
app.use('/food',require('./routes/foodRoutes'))

app.get('/', (req,res)=>{
return res.status (200).send('Welcome to Food Server app')
})

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})
