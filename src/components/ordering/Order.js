import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./Order.module.css";
import CartContext from "../../store/CartContext";

const Order = () => {

    const cartCtx = useContext(CartContext);
    cartCtx.clearCart();

    const orderNum = Math.floor(Math.random() * 100000) + 19999;

    return (
        <section className={classes.theOrder}>
            <h1>Thank you for your purchase!</h1>
            <h2>Order number:</h2>
            <h2>1{orderNum}</h2>
            <div className={classes.actions}>     
                <Link to='/'>
                    <button className={classes.button}>Back to store</button>
                </Link>
            </div>
        </section>
    );
};

export default Order;