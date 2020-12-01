import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'
import WelcomePage from 'components/pages/WelcomePage'
import GamePage from 'components/pages/GamePage'


function App() {
	return (
		<Router>
			<Switch>
				<Route path="/game" component={GamePage} />
				<Route path="/" component={WelcomePage} />
			</Switch>
		</Router>
  );
}

export default App;
