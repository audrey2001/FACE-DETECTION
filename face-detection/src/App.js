import React,{useState} from 'react'
import Home from "./components/Home/Home"
import Register from "./components/Authentication/Register"
import Login from "./components/Authentication/Login"
import Docs from "./components/Docs/Docs"
import NoPage from "./components/Docs/NoPage"
import {Routes,Route} from "react-router-dom"

const App = () => {

    const [user,setUser] = useState({
        // here i am setting an object state user that has different properties
          id:"",
          entries:0,
          name:"",
          email:"",
          joined:""
        
      })
      
      const loadUser = (datas) =>{
        console.log("data",datas)
       setUser({
        //  the spread operator and user keeps a copy of what the initial state look like.
         ...user,
         id: datas.id,
         name:datas.name,
         email:datas.email,
         joined:datas.joined,
         entries:datas.entries
         })
        
       }


    return (
        <div>
            <Routes>
                {/* this makes it the index element */}
                <Route index element ={<Login/>}/>
                {/* this makes it the index element */}
                <Route path ="Home"  element ={<Home user ={user} />}/>
                <Route exact path="Register" element ={<Register loadUser={loadUser}/>}/>
                <Route exact path ="Login"  element ={<Login loadUser={loadUser}/>}/>
                <Route exact path ="Docs" element ={<Docs/>}/>
                <Route path ="*" element ={<NoPage/>}/>
            </Routes>
        </div>
    )
}

export default App
