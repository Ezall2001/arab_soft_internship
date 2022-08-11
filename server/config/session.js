/** @format */

const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

const {DB_URI, SECRET} = process.env

const store = new MongoDBStore(
	{
		uri: DB_URI,
		collection: 'sessions',
	},
	err => {
		err
			? console.log(`failed at creating store: ${err}`)
			: console.log('store created successfully')
	},
)

const createSession = () =>
	session({
		secret: SECRET,
		saveUninitialized: true,
		resave: false,
		store: store,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 14,
			sameSite: 'strict',
			httpOnly: true,
		},
	})

module.exports = createSession
