import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(todoRoutes)

// mongodb+srv://username:<password>@cluster0.0xgrx3f.mongodb.net/test
// mongodb+srv://username:<password>@cluster0.0xgrx3f.mongodb.net/?retryWrites=true&w=majority
const uri: string = `mongodb+srv://username:<password>@cluster0.0xgrx3f.mongodb.net/?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set('useFindAndModify', false)

mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .catch((error) => {
        throw error
    })
