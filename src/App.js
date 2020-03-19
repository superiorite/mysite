import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Button } from '@material-ui/core';


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="main">
        <Menu />
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
                <Link to="/" className="ddott">Главная</Link>
              </div>
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
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.showDescription = this.showDescription.bind(this)
    this.hideDescription = this.hideDescription.bind(this)
    this.state = {description: ''}
  }
  showDescription(event) {
    this.setState({text: 'Это главная страница. Скоро будет добавлено детальное описание данного проекта'});
  }
  hideDescription(event) {
    this.setState({text: ''});
  }
  render() {
    return (
      <div>
        <Button variant="contained" color="primary"
          onClick={this.showDescription}>
          Описание
        </Button>
        <Button variant="contained" color="secondary"
          onClick={this.hideDescription}>
          Скрыть
        </Button>
        <h2>{this.state.text}</h2>
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


export default App;
