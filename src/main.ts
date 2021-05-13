interface IBar {
	bar: any
}

function isBar(arg: any): arg is IBar {
	return arg.bar !== undefined
}

function isString(arg: any): arg is string {
	return typeof arg === 'string'
}

function foo(x: number | string) {
	if (isString(x)) {
		console.log(typeof x)
	}
	console.log(typeof x)
}
