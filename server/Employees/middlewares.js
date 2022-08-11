/** @format */

const bcrypt = require('bcrypt')

const hashPasswords = (next, docs) => {
	const promises = []

	docs.map(doc =>
		promises.push(
			bcrypt.hash(doc.password, 10).then(hash => (doc.password = hash)),
		),
	)

	Promise.all(promises).then(() => next())
}

module.exports = {hashPasswords}
