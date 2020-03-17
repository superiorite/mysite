import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Menu />
    );
  }
}


class Menu extends React.Component {
  render() {
    let menus = [
      'Проекты',
      'Обо мне',
      'Блог',
      'Контакты'
      ]
    return (
      <div className="menu">
        {menus.map((v, i) => {
          return <div key={i} className="ccd"><a className="ddott" href="#">{v}</a></div>
        })}
      </div>
    );
  }
}

export default App;
