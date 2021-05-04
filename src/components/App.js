import React from 'react';
import { Header, Home, Footer, PopularMeals, Menu, AboutUs } from './index';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<React.Fragment>
					<GlobalStyle />
					<Header />
					<Route exact path="/" component={Home} />
					<Route path="/popular-meals" component={PopularMeals} />
					<Route path="/menu" component={Menu} />
					<Route path="/about-us" component={AboutUs} />
					<Footer />
				</React.Fragment>
			</Switch>
		</Router>
	);
}

export default App;
