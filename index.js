function allKeysAndSymbols(object) {
	// реализация
	let tmpObject = object;
	let res = new Set();
	while (tmpObject) {
		let properties = Object.keys(Object.getOwnPropertyDescriptors(tmpObject))
		let symbols = Object.getOwnPropertySymbols(tmpObject)

		properties.forEach(e => res.add(e));
		symbols.forEach(e => res.add(e));

		tmpObject = tmpObject.__proto__;
	}

	console.log(res)
}

let x = {}
let xx = Symbol('xxx')
x.test1 = 0
x[xx] = 1
let y = Object.create(x)
let yy = Symbol('xxx')
y.test1 = 2
y[xx] = 3
y[yy] = 4

allKeysAndSymbols(y); // ["constructor", "__defineGetter__", "__defineSetter__", "hasOwnProperty", ... ]
