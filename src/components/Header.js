import React from 'react';
import { Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse} from 'shards-react';
  import {Link, NavLink} from 'react-router-dom'

class Header extends React.Component {

  state = {
    dropdownOpen: false,
    collapseOpen: false
  };

  toggleDropdown = () => {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }


  toggleNavbar = () => {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {

  

  return (
    <Navbar id="headerDiv">

      <NavbarBrand data-testid="headerH1EL" id="headerH1">ADRIAN ROSALES</NavbarBrand>
      <NavbarToggler onClick={this.toggleNavbar} />
      <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar>
            <NavItem className="headerLinkItems">
              <Link  to="/">
                Home
              </Link>
            </NavItem>
            <NavItem className="headerLinkItems">
              <Link  to="/about">
                About
              </Link>
            </NavItem>
            <NavItem className="headerLinkItems">
              <Link  to="/projects">
                Projects
              </Link>
            </NavItem>
            <NavItem >
              <Link className="headerLinkItems" to="/Contact">
                Contact
              </Link>
            </NavItem>
            
          </Nav>

          
        </Collapse>

      

    </Navbar>
  );

  }
}



export default Header;