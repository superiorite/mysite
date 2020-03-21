import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Button from '@material-ui/core/Button';



class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="main">
        <Menu />
        <Quote />
        <Clock />
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
    this.handleClickLike = this.handleClickLike.bind(this)
    this.handleClickDis = this.handleClickDis.bind(this)
    this.state = {
      liked: "",
    }
  }
  handleClickLike() {
    this.setState({liked: "yes"})
  }
  handleClickDis() {
    this.setState({liked: "no"})
  }
  render() {
    return (
      <div id="main">
        <div id="main-quote">
        <span id="quote-text">Идеи<br/> появляются<br/> и исчезают,<br/>
          а истории <br/>остаются.</span>
        </div>
        <div id="description">Это мой первый и не последний, <br/>я надеюсь 
          учебный проект, <br/> где я тренирую навыки написания <br/> SPA-приложений с помощью React.</div>
        <div id="btns-like">
          <span class="btns-like">
            <Button 
              variant="contained"
              color={this.state.liked === "yes" ? "primary" : ""}
              onClick={this.handleClickLike}
              size="large">
                Нравится
            </Button>
          </span>
          <span class="btns-like">
            <Button 
              variant="contained"
              color={this.state.liked === "no" ? "secondary" : ""}
              onClick={this.handleClickDis}
              size="large">
                Не нравится
            </Button>
          </span>
        </div>
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

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date : new Date()});
  }

  render() {
    return (
      <div>
        <h4> Now {this.state.date.toLocaleString()}.</h4>
      </div>
    );
  }
}


export default App;
