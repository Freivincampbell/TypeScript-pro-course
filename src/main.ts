enum Shapes {
	Circle,
	Square,
	Triangle,
}
const circle = Shapes.Circle

console.log(Shapes)


enum CDS {
	OnPush,
	Default,
}

function isDefaultCDS(cds: CDS): boolean {
	return cds === null || cds === CDS.Default
}

console.log(isDefaultCDS(CDS.Default))
