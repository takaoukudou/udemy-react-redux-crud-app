import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import EventsIndex from "./components/events_index";
import EventsNew from "./components/events_new";
import reportWebVitals from "./reportWebVitals";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<switch>
					<Route exact path="/events/new" component={EventsNew}></Route>
					<Route exact path="/" component={EventsIndex}></Route>
				</switch>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
