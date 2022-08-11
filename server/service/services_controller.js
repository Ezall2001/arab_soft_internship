/** @format */

const fs = require('fs')
const Promise = require('bluebird')
const Services = require('./services_model')

Promise.promisifyAll(fs)

const get_serviceByCode = async (req, res) => {
	const code = req.params.code
	const result = await Services.find({code})

	res.send(result)
}

const post_service = async (req, res) => {
	const new_service = new Services(req.body)
	const result = await new_service.save()

	res.send(result)
}

const post_testServices = async (req, res) => {
	const data = await fs.readFileSync(
		'./server/test_data/test_services.json',
		'utf-8',
	)

	const test_services = await JSON.parse(data)
	try {
		await Services.insertMany(test_services.data)
		res.send(200)
	} catch (e) {
		console.log(e)
		res.send(e)
	}
}

const delete_all = async (req, res) => {
	const result = await Services.deleteMany({})
	res.send(result)
}

module.exports = {
	get_serviceByCode,
	post_service,
	post_testServices,
	delete_all,
}
