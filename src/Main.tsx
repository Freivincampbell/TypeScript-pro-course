import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as hyperscript from 'hyperscript';

const Hello = ({place}) =>
	<h1>Hello, {place}!</h1>

hyperscript.render(
	<Hello place="World"/>,
	document.getElementById('example')
)
