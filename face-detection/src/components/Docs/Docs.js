import React from 'react'
import Navigation from '../navigation/Navigation'
import "./Docs.css"
const Docs = () => {
    return (
        <div>
            <Navigation/>
            <div className="docs-contanier">
                <div className="docs-input-contanier">
            <h1>Getting Started</h1>
            <h4>This page is an overview on how to use the face detect App</h4>
            <ul>
                <li>Go to the sign in page,you have to be signed in before you can use the App.</li>
                <li>Takes you to the home page after login</li>
                <li>on the home page,input an image url <span style = {{textDecoration:"underline",color:"#240b36",cursor:"pointer"}}>Click me</span> for more information </li>
                <li>Click on detect</li>
                <li>Wait for some seconds and the app detects the face</li>
            </ul>
            <p style={{marginTop:"20px"}}>Note: base 64 image urls are not supported</p>
            </div>
            </div>
        </div>
    )
}

export default Docs
