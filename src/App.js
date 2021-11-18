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
import Creator from "./Components/Creator/Creator";
import YourBides from "./Components/YourBides/YourBides";
import Nft from "./Components/Nftpage/Nft";
import Congracts from "./Components/Congrachulation/Congracts";
import CreateNft from "./Components/Nftpage/CreateNft";
import Profile from "./Components/Profile/Profile";
import Setting from "./Components/Setting/Setting";
import Kyc from "./Components/Kyc/Kyc";

function App() {
  
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <div style={{backgroundColor:"black"}}> */}
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register2" element={<Register2 />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/creator" element={<Creator />} />
        <Route path='/yourbides' element={<YourBides />} />
        <Route path='/nftpage' element={<Nft />} />
        <Route path='/congrats' element={<Congracts />} />
        <Route path='/createNft' element={<CreateNft />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/kyc' element={<Kyc />} /> 
      {/* </div> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
