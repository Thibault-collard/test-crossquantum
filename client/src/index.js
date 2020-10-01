import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import store from "./store/store";

ReactDOM.render(
	<div>
		<Provider store={store}>
		<BrowserRouter>
			<Route exact path="/" component={App} />
		</BrowserRouter>
	</Provider>
</div>
,document.getElementById('root'));

registerServiceWorker();