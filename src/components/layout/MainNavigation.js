import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from './MainNavigation.module.css';
import CartContext from "../../store/CartContext";

function MainNavigation() {
    const cartCtx = useContext(CartContext);

    const numProducts = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    
    return (
        <header  className={classes.header}>
            <div className={classes.logo}>Viola's Herb Garden</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Products</Link>
                    </li>
                    <li>
                        <Link to='/cart'>
                            <button className={classes.button}>Cart ({numProducts})</button>
                        </Link>
                    </li>
               </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;