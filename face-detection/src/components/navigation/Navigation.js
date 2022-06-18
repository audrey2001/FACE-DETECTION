import React,{useState} from 'react'
import logo from "./logo.png"
import Tilt from 'react-parallax-tilt';
import {NavLink} from "react-router-dom"
import "./nav.css"

const Navigation = () => {
    const [active,setActive] = useState("list-style")
    const [toogleIcon ,setToogleIcon] = useState("menu-toggler")
    

    const ToogleContanier = () => {
        active === "list-style"
         ? setActive("list-style nav_active")
         : setActive("list-style")

// when you open the hamburger menu, the x sign should show
        toogleIcon === "menu-toggler"
        ? setToogleIcon("menu-toggler toogle")
        : setToogleIcon("menu-toggler")

    }

     return (
        <div className="my-nav">
            <Tilt>
            <div className="logo-contanier">
             <img className="logo" src={logo} alt="brain"></img>
             </div>
           </Tilt>
           
           <ul className={active}
           onClick ={() =>{
               setToogleIcon("menu-toggler")
               setActive("list-style")
           }}>
               <li><NavLink className="nav_link" to="/Login">Sign in </NavLink> </li>
               <li><NavLink className="nav_link" to="/Home">Sign out </NavLink>  </li>
               <li><NavLink  className="nav_link" to="/Docs">Docs </NavLink> </li>
           </ul>

           <div onClick={ToogleContanier} className={toogleIcon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div> 
           </div>
        </div>
    )
}

export default Navigation
