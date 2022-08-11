/** @format */

const formatDate = date => {
	return date.slice(0, 10)
}

const formatEtat = etat => {
	if (etat === 'a') return 'accepte'
	if (etat === 'r') return 'refuse'
	if (etat === 'ps') return 'en attente superviseur'
	if (etat === 'pr') return 'en attente RH'
}

const dataFormatter = data => {
	return data.map(item =>
		Object.keys(item).map(key => {
			let value = item[key]

			if (key === 'etat') value = formatEtat(value)
			else if (typeof value === 'string' && Date.parse(value))
				value = formatDate(value)

			return {key, value}
		}),
	)
}

export default dataFormatter
