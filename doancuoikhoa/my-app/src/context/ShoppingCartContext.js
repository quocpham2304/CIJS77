import {createContext, useContext} from "react";

const useShoppingCart = createContext({});

const ShoppingCartContext = ({children}) => {
    
    return(
        <div>
            <useShoppingCart.Provider>
                {children}
            </useShoppingCart.Provider>
        </div>
    )
}

export default ShoppingCartContext;

