/** @format */

const express = require('express')
const passport = require('passport')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
require('dotenv').config({path: path.resolve(__dirname, '.env')})
const connect = require('./config/db')
const createSession = require('./config/session')
require('./config/passport')
const router = require('./router')

const {PORT} = process.env
const app = express()

connect()
	.then(() =>
		app.listen(PORT, () => console.log(`app listening on PORT: ${PORT}`)),
	)
	.catch(err =>
		console.log(`couldn't establish connection to the database: ${err}`),
	)

app.use(morgan('dev'))
app.use(helmet())
app.use(
	cors({
		origin: 'http://localhost:3001',
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowedHeaders: ['Content-Type'],
		credentials: true,
	}),
)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(createSession())
app.use(passport.initialize())
app.use(passport.session())
app.use(router)
