import {Switch, Route} from "react-router-dom"

import Home from './components/Home'
import AboutMe from "./components/AboutMe";

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about-me" component={AboutMe}/>
    </Switch>
  )
}

export default App
