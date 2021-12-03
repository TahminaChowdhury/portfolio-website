import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavigationBar from './components/NavigationBar/NavigationBar'
import Home from './components/Home/Home';
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import NotFound from './components/NotFound/NotFound';
import ProjectDetails from './components/Portfolio/ProjectDetails';
import Blog from './components/Blog/Blog';




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/navigationbar">
            <NavigationBar></NavigationBar>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/portfolio">
            <Portfolio></Portfolio>
          </Route>

          <Route path="/projectdetails/:id">
            <ProjectDetails></ProjectDetails>
          </Route>

          <Route path="/blog">
            <Blog></Blog>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
