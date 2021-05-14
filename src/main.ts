interface Person {
	name: string,
	age: number,
}

// type ReadOnly<Person> = {
// 	readonly [Property in keyof Person]: Person[Property]
// }

type partialPerson = Partial<Person>
// pick
// record

function makePersonReadOnly(p: Person): Readonly<Person> {
	return Object.freeze(p)
}

type Stringified<T> = {
	[P in keyof T]: string
}

const stringifiedPerson: Stringified<Person> = {
	name: 'Freivin',
	age: '27',
}

