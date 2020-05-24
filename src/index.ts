import 'dotenv'
const port = process.env.NODE_ENV_PORT

import express from 'express'

const app = express()

app.listen(port || 3000, () => {
    console.log('running...')
})