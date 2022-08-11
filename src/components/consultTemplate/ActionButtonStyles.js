/** @format */

const faded = color => {
	return {
		'opacity': 0.3,
		'background-color': 'transparent',
		'color': color,
		'pointer-events': 'none',
	}
}

const active = color => {
	return {
		'opacity': 1,
		'background-color': color,
		'color': 'white',
		'pointer-events': 'none',
	}
}

const idle = color => {
	return {
		'opacity': 1,
		'background-color': 'transparent',
		'color': color,
	}
}

const getStyle = ({role, etat, type, color}) => {
	if (
		(etat === 'accepte' && type === 'a') ||
		(etat === 'refuse' && type === 'r')
	)
		return active(color)
	else if (
		(etat === 'accepte' && type === 'r') ||
		(etat === 'refuse' && type === 'a')
	)
		return faded(color)
	else if (
		(etat === 'en attente superviseur' || etat === 'en attente RH') &&
		role === 'e'
	)
		return faded(color)
	else if (
		(etat === 'en attente superviseur' && role === 's') ||
		(etat === 'en attente RH' && role === 'r')
	)
		return idle(color)
	else if (etat === 'en attente superviseur' && role === 'r')
		return faded(color)
	else if (etat === 'en attente RH' && role === 's' && type === 'a')
		return active(color)
	else if (etat === 'en attente RH' && role === 's' && type === 'r')
		return faded(color)
}

export default getStyle
