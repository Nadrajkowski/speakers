import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout/Layout';
import registerServiceWorker from './registerServiceWorker';

render(
	(
		<BrowserRouter>
			<Layout />
		</BrowserRouter>
	),
	document.getElementById('root')
);

registerServiceWorker();
