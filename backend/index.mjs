//tentei com modules. precisa colocar no package.json -> "type": "module",
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/connection.mjs '

import productRoutes from './routes/productRoutes.mjs'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))