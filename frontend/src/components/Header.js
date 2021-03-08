import React from 'react'
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { FaHome } from 'react-icons/fa';
import { GoGraph } from 'react-icons/go';
import { useHistory } from "react-router-dom";


// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/userActions';

const Header = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push('/login')
  };
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Latent View</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav >
            {userInfo ? (
              <>
              <LinkContainer to='/'>
                <Nav.Link>
                 <FaHome/> Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/reports'>
                <Nav.Link>
                   <GoGraph/> Reports
                </Nav.Link>
              </LinkContainer>
              <Button variant="outline-info" onClick={logoutHandler} >Logout</Button>
               
                </> 
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
export default Header
