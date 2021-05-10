function log(msg: string, flag: boolean) {
	if (msg.length > 1) {
		return null
	}

	const MEANING_OF_LIFE = 42
	console.log(msg)
	return undefined
}

function compare(arg: any) {
	switch (typeof arg) {
		case 'number':
			console.log('this is a number')
		case 'string':
			console.log('Fallthrough case')
			break
		default:
			console.log('Default case')
	}
}
