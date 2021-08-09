import React , {Component , useState } from 'react';
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  



class Navibar extends Component
{
    constructor(props)
    {
        super(props);
        // this.toggle = this.toggle.bind(this);

    }
    // state = {
    //     isOpen : false
    // } 
    // toggle(){
    //     this.setState ({
    //         isOpen : true
    //     });
    // };
    render(){
        return(
            // <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            //     <Link to = '/' className = "navbar-brand">
            //         {/* <img src = '' alt = '' /> */}
            //         <div>thenumanchega</div>
            //     </Link>
            //     <div className = "collapse navbar-collapse show ml-sm-5">
            //         <ul className = "navbar-nav">
            //             <li className = "nav-item">
            //                 <Link className = "nav-Link" to = "/">
            //                     Home
            //                 </Link>
            //             </li>
            //             <li className = "nav-item">
            //                 <Link className = "nav-Link" to = "/recipies">
            //                     Recipies
            //                 </Link>
            //             </li>
            //         </ul>

            //     </div>

            // </nav>
            <Navbar color = "light" light expand = "md">
                <NavbarBrand href="/">Recipipe</NavbarBrand>
                <NavbarToggler  />
                <Collapse  navbar>
                    <Nav className = "mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/recipies">Recipies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="">Logout</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
        );
    };
};

export default Navibar;