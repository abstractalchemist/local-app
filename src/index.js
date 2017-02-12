'use strict';

import React from 'react';
import Rx from 'rx';
import ReactDOM from 'react-dom';

import Canvas from './games';

class Table extends React.Component {
    constructor() {
	super();
    }

    render() {
	return (<table/>);
    }
}

class Main extends React.Component {
    constructor() {
	super();
    }

    render() {
	return (<div>
		<Canvas />
		</div>);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("starting main");
    ReactDOM.render(<Main />,  document.getElementById('content'));
})
