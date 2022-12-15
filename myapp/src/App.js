import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CardGroup from 'react-bootstrap/CardGroup';




function App() {
  return (
    <div className="App">
      
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">My-First-React-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <CardGroup>
      <Card>
        <Card.Img variant="center" src="data:image/png;base64,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" />
        <Card.Body>
          <Card.Title>HTML</Card.Title>
          <Card.Text>
          HTML signifie « HyperText Markup Language » qu'on peut traduire par « langage de balises pour l'hypertexte ». Il est utilisé afin de créer et de représenter le contenu d'une page web et sa structure.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="data:image/png;base64,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 /1000px1000" />
        <Card.Body>
          <Card.Title>JAVASCRIPT</Card.Title>
          <Card.Text>
          JavaScript (souvent abrégé en « JS ») est un langage de script léger, orienté objet, principalement connu comme le langage de script des pages web. Mais il est aussi utilisé dans de nombreux environnements extérieurs aux navigateurs web tels que Node.js, Apache CouchDB voire Adobe Acrobat.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.pngkey.com/png/detail/122-1226930_react-native-mobile-app-development-react-native-app.png"></Card.Img>
        <Card.Body>
          <Card.Title>REACT</Card.Title>
          <Card.Text>
          React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page HTML à chaque changement d'état
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4">CopyRights</p>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
    
    </div>
  );
}

export default App;
