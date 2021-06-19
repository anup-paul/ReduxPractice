import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Books from "./Components/Books/Books";

function App() {
  return (
    <div>

      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route >
          <Route path="/books">
            <Books></Books>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
