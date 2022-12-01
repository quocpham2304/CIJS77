import React, { useState } from "react";
import Expanse from "./expanse/expanse";
import Income from "./income/income";
import './tab.css';
import Menu from "../menu/menu";

function Tabs() {


const [isActived,setIsActived] = useState("nutin");
    const handleIn = () => {
    setIsActived("nutin");
   }
   const handleExp = () => {
    setIsActived("nutexp");
   } 
return(
    <div className="homepage">
       
    <div className="header"> <h1> Add Transaction</h1></div>
    <div className='hinhvuong'>
        <div className='hainut'>
            {isActived === "nutexp" ? <Expanse /> : <Income />}
            <button className={isActived ==='nutin'? "lively" : ""} onClick = {handleIn}>income</button>
            <button className={isActived ==='nutexp'? "lively" : ""} onClick = {handleExp} >expanse</button>
             
        </div>
        
    </div>
    </div>
);
}
export default Tabs;
