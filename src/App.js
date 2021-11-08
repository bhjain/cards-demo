import './App.css';
import Card from './Components/Navbar/Cards/Card';
import Nav from './Components/Navbar/Nav';
import SecondNav from './Components/SecondNav/SecondNav';

function App() {
  return (
    <div className="App" style={{backgroundColor: "#efeeea", minHeight: "100vh"}}>
      <Nav />
      <SecondNav />
      <Card />
    </div>
  );
}

export default App;
