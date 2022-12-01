import React, { useState } from "react";
import Home from "../home/home";
import Static from "../statics/stactics";

function Menu() {

    const [isActived,setIsActived] = useState("nuthome");
        const handleHome = () => {
        setIsActived("nuthome");
       }
       const handleStatics = () => {
        setIsActived("nutsta");
       } 
    return(
        <div className="homepage1">
    
                <div className='nutmenu'>
                {isActived === "nuthome" ? <Home /> : <Static />}
                <button className={isActived ==='nuthome'? "lively" : ""} onClick = {handleHome}>Home</button>
                <button className={isActived ==='nutsta'? "lively" : ""} onClick = {handleStatics} >stactics</button>
                </div>
                </div> 
    
    );
    }
    export default Menu;