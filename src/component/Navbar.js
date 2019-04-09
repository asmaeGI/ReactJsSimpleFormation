import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navbar(){
    return (
        <div>
        <Router>
           <div>
            <ul>

                <li >
                <Link to="/">home</Link>
                </li>
                <li>
                <Link to="/about">About Us</Link>
                </li>
                <li>
                <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
         
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route  path="/contact/:id" component={ContactId}/>
            </div>
        </Router>
        </div>
        
    )
}
function Home(){
    return (
        <h1>this is home</h1>
    )
}

let About=()=>(<h1>this is about</h1>)

function Contact(){
    return (
        <div>
        <h1>this is contact</h1>
        </div>
    )
}
function ContactId({match}){
    let id= match.params.id;
     return (
         <div>
         <h1>this is contact Id:{id} </h1>
         </div>
     )
 }
export default Navbar;