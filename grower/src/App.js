//jshint esversion:6

import './App.css';
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
//import Sign from "./components/Sign.jsx";
import Landing from "./components/Landing.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Banner />
    <Landing />
    <Footer />
    </div>
  );
}

export default App;
