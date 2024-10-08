import react, { useState } from "react";
import "./IsOpenComponent.css";

const  IsOpenComponent =() =>{
    const [open, setOpen] = useState(false)

    const makeOpen = () =>{
        setOpen(!open)
    }

    return(
        <div className="IsOpenComponent">

                <button onClick={makeOpen}>open</button>
                <div className={`make-it-open ${open ? "active" : ""} `} >
                   
                   <ul>
                    <li><a href="/">Home</a></li>
                    <li>About</li>
                    <li>Contact</li>
                   </ul>
                </div>
            
        </div>
    )
}

export default IsOpenComponent