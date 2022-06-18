import React from 'react'
import "./Docs.css"
import {Link} from "react-router-dom"

const NoPage = () => {
    return (
        <div className="docs-contanier">
        <div style ={{marginTop:"-120px"}}className="docs-input-contanier">           
        <h1>404</h1>
        <p >Oops this page does not exist...</p>
        <p>Go back to <span style={{color:"#240b36",textDecoration:"underline",marginLeft:"8px",cursor:"pointer"}}>
        <Link to="/"> Home Page </Link></span>
        </p>
        </div>
        </div>    
            )
}

export default NoPage
