declare enum Foo {
	Bar = 1
}

const x: Foo.Bar = 1

const enum Shapes {
	Circle,
	Square,
	Triangle,
}
const circle = Shapes.Circle

console.log(circle)


enum CDS {
	OnPush,
	Default,
}

function isDefaultCDS(cds: CDS): boolean {
	return cds === null || cds === CDS.Default
}

console.log(isDefaultCDS(CDS.Default))
