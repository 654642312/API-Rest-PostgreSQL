import express from 'express'

import indexRouter from './routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(indexRouter)

app.listen(4000, () => {
    console.log('server on port ', 4000)
})