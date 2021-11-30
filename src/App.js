import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import About from './components/About/About';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact'



function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
}

export default App;
