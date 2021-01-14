import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
  
    <Router>
    <Navbar />
    {/* <Hero> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    {/* </Hero> */}
    <Footer />
    </Router>
    
    </>
  );
}

export default App;