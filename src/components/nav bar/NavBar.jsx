import { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import MenuLinks from "./MenuLinks";

import '../../styles/NavBar.css'

export function NavBar({

}) {
    const [itemsInCart,setItemsInCart] = useState([{id:'item 1', item: 'handbag'},{id:'item 2', item: 'umbrella'}]);

    function handleAddToCart(item) {
        setItemsInCart([
        ...itemsInCart,
        item
        ])
    };

    return (
        <div className="navBar">
            <MenuLinks />
            <ShoppingCart itemsInCart={itemsInCart}/>
        </div>
    )
}
export default NavBar;