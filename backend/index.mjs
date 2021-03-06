//tentei com modules. precisa colocar no package.json -> "type": "module",
import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.mjs'
import connectDB from './config/connection.mjs '

import productRoutes from './routes/productRoutes.mjs'
import userRoutes from './routes/userRoutes.mjs'
import orderRoutes from './routes/orderRoutes.mjs'
import uploadRoutes from './routes/uploadRoutes.mjs'

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
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))