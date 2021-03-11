import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './App/Pages/Home/Home';
import Team from './App/Pages/Team/Team';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/team/:id" component={Team} />
        </Switch>
    </Router>
  );
}

export default App;
