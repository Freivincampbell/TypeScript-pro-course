interface Person {
	name: string
}

interface Person {
	name: string
	age: number
}

// interface Person {
// 	name: number
// 	age: number
// }


const person: Person = {
	name: 'Freivin',
	age: 27
}

interface Window {
	$: any,
	angular: any
}

window.$


interface Foo {
	bar(qux: string): string
}

interface Foo {
	x: number
}

const foo: Foo = {
	x: 123,
	bar(qux: string): string {
		return ''
	}
}
