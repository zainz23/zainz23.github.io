import React, {Component} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import {Navigation} from "@material-ui/icons";
import { NavLink, Switch, Route } from 'react-router-dom';




function App() {
    class Navigation extends Component {
        render() {
            return (
                <nav>
                    <ul>
                        <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
                        <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
                        <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
                    </ul>
                </nav>
            );
        }
    }
    const Home = () => (
        <div className='home'>
            <h1>Welcome to my portfolio website</h1>
            <p> Feel free to browse around and learn more about me.</p>
        </div>
    );

    const About = () => (
        <div className='about'>
            <h1>About Me</h1>
            <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
            <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
        </div>
    );

    const Contact = () => (
        <div className='contact'>
            <h1>Contact Me</h1>
            <p>You can reach me via email: <strong>hello@example.com</strong></p>
        </div>
    );

    const Main = () => (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact} />
        </Switch>
    );


    return (
      <div className='app'>
          <h1>React Router Demo</h1>
          <Navigation />
          <Main/>
      </div>
  );
}

export default App;
