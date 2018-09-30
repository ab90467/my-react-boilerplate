/*global module:true*/

import React from 'react';
import ReactDOM from 'react-dom';

/*const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render( < div > { title } > < NavBar / > < /div>,
    document.getElementById('app')
);*/

//import React, { Component } from 'react'

// https://medium.com/codingthesmartway-com-blog/getting-started-with-material-ui-for-react-material-design-for-react-364b2688b555

import NavBar from './components/NavBar'
ReactDOM.render( < div > < NavBar / > < /div>, document.getElementById('app'))

        module.hot.accept();