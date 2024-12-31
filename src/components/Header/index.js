import { Component } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import './index.css'

class Header extends Component{
  state = {menuClicked: false}

  onClickMenu = () => {
    this.setState(prev=> ({menuClicked: !prev.menuClicked}))
  }

  render() {
    const {menuClicked} = this.state
    const clicked = menuClicked ? "open":""
    return (
      <>
    <nav>
      <div className="logo">Durga Prasad Ch</div>
      <div className="hamburger-menu">
        <div className={`hamburger-icon ${clicked}`} onClick={this.onClickMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu-links ${clicked}`}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about-me">About Me</NavLink></li>
          <li><NavLink to="/experience">Experience</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </div>
      </div>
      <div className="hamburger-menu-lg">
          <li><NavLink to="/" className="li">Home</NavLink></li>
          <li><NavLink to="/experience" className="li">Experience</NavLink></li>
          <li><NavLink to="/projects" className="li">Projects</NavLink></li>
          <li><NavLink to="/about-me" className="li">About Me</NavLink></li>
          <li><NavLink to="/contact" className="li">Contact</NavLink></li>
        </div>
    </nav>
    </>
    )
  }

  }




export default Header