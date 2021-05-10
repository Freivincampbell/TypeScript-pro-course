import 'reflect-metadata'
import {Component, Input } from '@angular/core'

@Component({
	selector: 'app'
})
class AppComponent {
	@Input() foo: string
}
