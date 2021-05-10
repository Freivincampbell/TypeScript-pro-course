interface IObj {
	bar: number,
	foo?: number
}

const obj: IObj = {
	bar: 10
}

obj['bar'] = 20;
obj['foo'] = 20;
