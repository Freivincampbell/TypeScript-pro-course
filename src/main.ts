import {Observable, of} from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

declare  module 'rxjs/Observable' {
	interface Objservable<T> {
		toJames(): Observable<'James'>
	}
}

Observable.prototype.toJames = function () {
	return Observable.of('James')
}

const o = Observable
	.of('John')
	.toJames()
	.map((x) => x.toUpperCase())


o.subscribe((x) => console.log(x))
