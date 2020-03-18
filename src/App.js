import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="main">
        <Menu />
        <Logo />
        <Quote />
      </div>
    );
  }
}


class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <Router>
          <div>
            <nav>
              <div className="ccd">
                <Link to="/projects" className="ddott">Проекты</Link>
              </div>
              <div className="ccd">
                <Link to="/about" className="ddott">Обо мне</Link>
              </div>
              <div className="ccd">
                <Link to="/blog" className="ddott">Блог</Link>
              </div>
              <div className="ccd">
                <Link to="/contacts" className="ddott">Контакты</Link>
              </div>
            </nav>

            <Switch>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contacts">
                <Contacts />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

function Projects() {
  return <h2>Проекты</h2>;
}

function About() {
  return <h2>Обо мне</h2>;
}

function Blog() {
  return <h2>Блог</h2>;
}

function Contacts() {
  return <h2>Контакты</h2>;
}

const Quote = props => {
  return (
    <div className="quote">
      Идеи появляются и исчезают,<br/>
      истории остаются.
    </div>
  );
}


const Logo = props => {
  return <img src="./superiorite.png"/>
}

export default App;
