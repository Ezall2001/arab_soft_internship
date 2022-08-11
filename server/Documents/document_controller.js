/** @format */

const Documents = require('./documents_model')
const Employees = require('../Employees/employees_model')

const {getErrorMsgs} = require('../helpers')

const post_document = async (req, res) => {
	try {
		const new_document = new Documents(req.body)
		await new_document.save({
			user_matricule: req.user.matricule,
		})
		res.json({status: 200})
	} catch (e) {
		let errorObjs = e.custom ? e.errors : getErrorMsgs(e)

		res.json({
			status: 400,
			errors: errorObjs,
		})
	}
}

const get_documents = async (req, res) => {
	try {
		const user = req.user
		let result = []
		if (user.role === 'e')
			result = await Documents.find({matricule: user.matricule})
		else if (user.role === 's') {
			const promises = []
			const employees = await Employees.find({codeService: user.codeService})
			employees.forEach(employee =>
				promises.push(Documents.find({matricule: employee.matricule})),
			)

			const values = await Promise.all(promises)
			result = values.flat(2)
		} else if (user.role === 'r') result = await Documents.find({})

		res.json({status: '200', data: result})
	} catch (e) {
		res.json({status: 400})
	}
}

const put_acceptDocument = async (req, res) => {
	try {
		let newEtat
		const doc = await Documents.findById(req.params.id)

		if (doc.etat === 'ps' && req.user.role === 's') newEtat = 'pr'
		else if (doc.etat === 'pr' && req.user.role === 'r') newEtat = 'a'

		if (newEtat)
			await Documents.findByIdAndUpdate(req.params.id, {etat: newEtat})

		res.send({status: 200, etat: newEtat})
	} catch (e) {
		res.json({status: 400})
	}
}

const put_refuseDocument = async (req, res) => {
	try {
		await Documents.findByIdAndUpdate(req.params.id, {etat: 'r'})
		res.send({status: 200, etat: 'r'})
	} catch (e) {
		res.json({status: 400})
	}
}

module.exports = {
	get_documents,
	post_document,
	put_acceptDocument,
	put_refuseDocument,
}
