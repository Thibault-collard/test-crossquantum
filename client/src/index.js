import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SinglePageMovies from './components/SinglePageMovies.js';
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import store from "./store/store";

ReactDOM.render(
	<div>
		<Provider store={store}>
		<BrowserRouter>
			<Route exact path="/movies/:id" component={SinglePageMovies}/>
			<Route exact path="/" component={App} />
		</BrowserRouter>
	</Provider>
</div>
,document.getElementById('root'));

registerServiceWorker();