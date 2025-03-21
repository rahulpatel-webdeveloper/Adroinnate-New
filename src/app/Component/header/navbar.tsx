
import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary header-navbar">
      <Container>
        <Navbar.Brand as={Link} href="#">
          <Image src="/assets/images/logo.png" alt="Logo" width={250} height={60} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-center d-flex" id="navbarScroll">
          <Nav className="flex-end my-2 my-lg-0 d-flex" style={{ maxHeight: '100px' }} navbarScroll>
            
            <NavDropdown 
              title="What We Do" 
              id="what-we-do-nav-dropdown"             
            >             
              
              <NavDropdown.Item as={Link} href="#action/3.2">Cyber Threat Intelligence</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#action/3.3">Digital Forensics & Incident Response</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#action/3.4">Cyber Threat Hunting & Detection Engineering</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#action/3.5">Security Information and Event Management (SIEM)</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#action/3.6">Security Orchestration, Automation, and Response (SOAR)</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#action/3.7">Advanced Threat Detection and Response (EDR, XDR)</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown  title="Industries"  id="industries-nav-dropdown">              
              <NavDropdown.Item as={Link} href="#action/3.2">Education</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#action/3.3">Energy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} href="#action/3.4">Financial Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#action/3.4">Healthcare</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#action/3.4">Local and Regional Government</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown 
              title="Company" 
              id="company-nav-dropdown" 
              
            >
              
              <NavDropdown.Item as={Link} href="#action/3.2">Work with Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="#action/3.3">Our leadership</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} href="#action/3.4">Case Studies</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} href="#action2">Become a Partner</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Button variant="btn default-btn">
          <span className="mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
          </span>
          Contact us
        </Button>
      </Container>
    </Navbar>
  );
}
