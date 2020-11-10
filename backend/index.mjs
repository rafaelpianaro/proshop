//tentei com modules. precisa colocar no package.json -> "type": "module",
import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.mjs'
import connectDB from './config/connection.mjs '

import productRoutes from './routes/productRoutes.mjs'
import userRoutes from './routes/userRoutes.mjs'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

// app.use((req, res, next) => {
//     console.log('req', req.originalUrl)
//     next()
// })

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))