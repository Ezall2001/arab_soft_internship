/** @format */

const Conges = require('./conge_model')
const Employees = require('../Employees/employees_model')

const {getErrorMsgs} = require('../helpers')

const post_conge = async (req, res) => {
	try {
		const new_conge = new Conges(req.body)
		await new_conge.save({
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

const get_conges = async (req, res) => {
	try {
		const user = req.user
		let result = []
		if (user.role === 'e')
			result = await Conges.find({matricule: user.matricule})
		else if (user.role === 's') {
			const promises = []
			const employees = await Employees.find({codeService: user.codeService})
			employees.forEach(employee =>
				promises.push(Conges.find({matricule: employee.matricule})),
			)

			const values = await Promise.all(promises)
			result = values.flat(2)
		} else if (user.role === 'r') result = await Conges.find({})

		res.json({status: '200', data: result})
	} catch (e) {
		res.json({status: 400})
	}
}

const put_acceptConge = async (req, res) => {
	try {
		let newEtat
		const doc = await Conges.findById(req.params.id)

		if (doc.etat === 'ps' && req.user.role === 's') newEtat = 'pr'
		else if (doc.etat === 'pr' && req.user.role === 'r') newEtat = 'a'

		if (newEtat) await Conges.findByIdAndUpdate(req.params.id, {etat: newEtat})

		res.send({status: 200, etat: newEtat})
	} catch (e) {
		res.json({status: 400})
	}
}

const put_refuseConge = async (req, res) => {
	try {
		await Conges.findByIdAndUpdate(req.params.id, {etat: 'r'})
		res.send({status: 200, etat: 'r'})
	} catch (e) {
		res.json({status: 400})
	}
}

module.exports = {
	get_conges,
	post_conge,
	put_acceptConge,
	put_refuseConge,
}
