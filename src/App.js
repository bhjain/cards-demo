import "./App.css";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import LoginForm from "./Components/Login/LoginForm";
import Nav from "./Components/Navbar/Nav";
import RegisterScreen from "./Components/Register/RegisterScreen";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import Register2 from "./Components/Register/Register2";
import Logout from "./Components/Logout/Logout";
import Discover from "./Components/Discover/Discover";

function App() {
  
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register2" element={<Register2 />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
