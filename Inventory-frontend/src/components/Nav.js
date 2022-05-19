import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => (
    <div className="Nav">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <img 
              src={require('../images/company-logo.png')}
              alt="Company Logo"
              className="Logo"
              />
            <Navbar.Brand href="/">Inventory Management - Product Analysis System</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/products">Add Products</Nav.Link>
                <Nav.Link href="/stockevents">Stock Reports</Nav.Link>
                <Nav.Link href="/addstockevents">Enter Stock Events</Nav.Link>   
                <Nav.Link href="/visualizereports">Product Analysis</Nav.Link>          
                <NavDropdown title="More" id="collasible-nav-dropdown">                 
                  <NavDropdown.Item onClick={()=> window.open("analysis.html", "_blank")}>            
                    Analyze Data</NavDropdown.Item>
                  <NavDropdown.Item onClick={()=> window.open("csvloader.html", "_blank")}>Load CSV data</NavDropdown.Item> 
                  <NavDropdown.Divider /> 
                  <NavDropdown.Item href="/about">About</NavDropdown.Item>                                 
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link onClick={()=> window.open
                  ("https://github.com/Patorobo/Inventory-Management/blob/main/README.md", "_blank")}>                  
                  App Info</Nav.Link>
                <Nav.Link onClick={()=> window.open                
                  ("https://github.com/Patorobo/Inventory-Management/", "_blank")}>Github</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);
