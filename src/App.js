import "./App.css";
import Carousel from "./component/Carousel";
import Destinations from "./component/Destination";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Search from "./component/Search";
import Selects from "./component/Selects";

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Hero></Hero>
        <Destinations></Destinations>
        <Search></Search>
        <Selects></Selects>
        <Footer></Footer>
    </div>
  );
}

export default App;
