import React, { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import   Button  from "./Button.css";

class Navbar extends Component {
state = { clicked: false }

handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
}



    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React<i className="fa fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.cliked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                     
                </ul>
                <button className="signup">Sign Up</button>

            </nav>
            
        )
    }
}
export default Navbar
