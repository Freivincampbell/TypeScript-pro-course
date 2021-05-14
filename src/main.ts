interface IPerson {
	name: string,
	age: number,
}

type keys = keyof IPerson
type personAge = IPerson['age']

const foo = {
	x: true,
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
	return obj[key]
}


getProperty(foo, 'x')
