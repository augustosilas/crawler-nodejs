import 'dotenv'
const port = process.env.NODE_ENV_PORT

import express, { request } from 'express'

import routes from './routes'

const app = express()

app.use(routes)

app.listen(port || 3000, () => {
    console.log('running...')
})