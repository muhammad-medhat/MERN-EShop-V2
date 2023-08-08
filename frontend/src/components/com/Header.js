import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
// import { LinkContainer } from "react-router-bootstrap";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useLogoutMutation } from '../slices/usersApiSlice';
// import { logout } from '../slices/authSlice';
// import SearchBox from './SearchBox';
import logo from "../../assets/logo.png";
// import { resetCart } from '../slices/cartSlice';

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="ProShop" />
            ProShop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href="/cart">
              <FaShoppingCart /> Cart
            </Nav.Link>
            <Nav.Link href="/login">
              <FaUser /> Login
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
