function addTo(x?: number) {
	x = x || 0
	return function add(y: number) {
		return x! + y;
	}
}

const addTo1 = addTo(1)
addTo1(4)
