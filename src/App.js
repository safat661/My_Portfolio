
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

import Footer from './components/Footer';


class App extends React.Component {
  
  constructor(props){

    super(props);
    this.state = {
      title: "Khan Safat Islam Ananta",
      headerLinks: [
        {title: "Home", path: "/"},
        {title: "About", path: "/about"},
        {title: "Contact", path: "/contact"},
      ],
      home: {
        title: "be relentless",
        subTitle: "Projects that make a difference",
        text: "checkout my projects below"
      },
      about: {
        title: "About me"
      },
      contact: {
        title: "Lets's talk"
      }

    }
  }
  
  render() {

    return (
      <Router>
        <Container className='p-0' fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand> Khan Safat Islam Ananta </Navbar.Brand>
            
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="m-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        </Container>
      </Router>
    );
  }
}

export default App;
