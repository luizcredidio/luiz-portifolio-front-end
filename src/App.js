import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./routes/home";
import Projects from "./routes/projects";
import Resume from "./routes/resume";
import { AnimatePresence } from "framer-motion";
import ContactMe from "./routes/contactMe";

function App() {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/contact-me">
          <ContactMe />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;
