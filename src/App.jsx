import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections"></div>
      <Intro />
      <Portfolio />
      <Works />
      <Contact/>
    </div>
  );
}

export default App;
