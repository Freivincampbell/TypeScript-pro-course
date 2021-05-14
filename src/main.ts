interface Foo {
	foo: string
}

const obj: Object = {
	foo: ''
}

const obj2: object = {
	foo: ''
}

Object.create(obj2)

const wm = new WeakMap<Object, number>()

wm.set({}, 123)
