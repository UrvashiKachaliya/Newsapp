import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

export default function News() {
  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className='fw-bold text-white'>NEWS-APP</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-5">
            <Nav.Link as={Link} to="/" className='px-3 text-white'>Home</Nav.Link> 
            <Nav.Link as={Link} to="/tesla" className='px-3 text-white'>Tesla</Nav.Link> 
            <Nav.Link as={Link} to="/apple" className='px-3 text-white'>Apple</Nav.Link>
            <Nav.Link as={Link} to="/techcrunch" className='px-3 text-white'>TechCrunch</Nav.Link> 
            <InputGroup className="my-2">
              <Form.Control
                placeholder="Search News Here"
              />
              <Button className='outline-none'>
                <SearchIcon />
              </Button>
            </InputGroup>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
