import './App.css';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import LoginForm from './Components/Login/LoginForm';
import Nav from './Components/Navbar/Nav';
import RegisterScreen from './Components/Register/RegisterScreen';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Main from './Main';
import Register2 from './Components/Register/Register2';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/register2" element={<Register2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
