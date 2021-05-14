interface A {
	a: string
}

interface B {
	b: string
}

type C = A & B

const foo: C = {
	a: '',
	b: ''
}
