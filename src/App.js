import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import data from "./data/contenu.json";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faChevronCircleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

library.add(fab, faBars, faChevronCircleDown, faAngleUp);

function App() {
  const { infos, cv, projets } = data;
  const [activeSection, setActiveSection] = useState("home");

  const waypointBotOffset = 75;

  const handleMenuChange = (visibleSection) => {
    console.log("entering " + visibleSection);
    setActiveSection(visibleSection);
  };

  return (
    <div className="App">
      <Header
        data={infos.header}
        socialMedia={infos.réseaux}
        activeSection={activeSection}
        waypointOffset={waypointBotOffset}
        handleShow={handleMenuChange}
      />
      <About
        data={infos.about}
        waypointOffset={waypointBotOffset}
        handleShow={handleMenuChange}
      />
      <Resume
        data={cv}
        waypointOffset={waypointBotOffset}
        handleShow={handleMenuChange}
      />
      <Projects
        data={projets}
        waypointOffset={waypointBotOffset}
        handleShow={handleMenuChange}
      />
      <Contact
        data={infos.about.contact}
        waypointOffset={waypointBotOffset}
        handleShow={handleMenuChange}
      />
      <Footer data={infos.réseaux} />
    </div>
  );
}

export default App;
