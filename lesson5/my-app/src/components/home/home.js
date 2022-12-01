import React, { useContext, useState } from "react";
import './home.css';
import { AddContext, AddProvider } from "../addContext/addContext";
import Menu from "../menu/menu";
function Home() {
    const add = useContext(AddContext)
    return(
        <AddProvider>
        <div className="homepage">
            <div className="header"></div>
                <div className="balance-box">
                    <div className="total-balance-text">Total balance</div>
                    <div className="total-balance-money">1000000</div>
                <div className="money-box">
               <div className="income-text">income </div>
               <div className="income-moneytext">3000000</div> 
                <div className="exp-text">Expenses</div>
                <div className="exp-moneytext">2000000</div>
                </div>
                </div>
            <div className="transac-his"><p>Transaction history</p>
            <div className={add.money}><AddProvider/></div>
             </div>
           
            
        </div>
        </AddProvider>
    )
}
export default Home;