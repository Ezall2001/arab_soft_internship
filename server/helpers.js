/** @format */

const getErrorMsgs = errorObj => {
	const msgs = []
	for (let errorName in errorObj.errors) {
		const msg = errorObj.errors[errorName].message
		msgs.push({path: errorName, message: msg})
	}

	return msgs
}

module.exports = {getErrorMsgs}
