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
import CountryInfo from "./Components/Countries/CountryInfo";
import ReadingList from "./Components/Books/ReadingList";

function App() {
  return (
    <div>

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route >
          <Route path="/home">
            <Home></Home>
          </Route >
          <Route path="/country/:id" >
            <CountryInfo></CountryInfo>
          </Route>
          <Route path="/books">
            <Books></Books>
          </Route>
          <Route path="/readingList">
            <ReadingList></ReadingList>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
