import { Component } from "react"
import { TiSocialLinkedin } from "react-icons/ti";
import { FiGithub } from "react-icons/fi";

import "./index.css"

import Header from '../Header'

class Home extends Component{
    render(){
        return (
        <>
          <Header/>
          <div className="home-container">
            <div>
                <div className="profile-container">
                    <img src="https://img.freepik.com/free-vector/tiktok-profile-picture-template_742173-4482.jpg?t=st=1735478171~exp=1735481771~hmac=e30813aa925bc27dab9467a67d0039a8bece9949eb69f8a2c089dd998578cca6&w=740" alt="Durga Prasad profile" className="profile"/>
                </div>
            </div>
            <div className="profile-details">
                <p className="hello_p1">Hello, I'm</p>
                <h1 className="name">Durga Prasad</h1>
                <p className="stack">Fullstack Developer</p>
                <div className="btn-container">
                    <button className="btn btn-color-1">Download CV</button>
                    <button className="btn btn-color-2">Contact Info</button>
                </div>
                <div className="icons-container">
                    <a className="icon-container" href="www.linkedin.com/in/dprasad10" target="__blank"><TiSocialLinkedin className="icon"/></a>
                    <a className="icon-container" href="www.linkedin.com/in/dprasad10" target="__blank"><FiGithub className="icon"/></a>
                </div>
            </div>
          </div>
          
          
          
        </> 
        )
    }
}

export default Home