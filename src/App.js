import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import NavigationBar from './components/NavigationBar/NavigationBar';



function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Home></Home>
      <About></About>
    </div>
  );
}

export default App;
