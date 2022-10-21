import { useContext } from "react";
import { Link } from "react-router-dom";

import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/CartContext";

const Cart = () => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemAdd = (item) => {
        cartCtx.addItem({...item, amount: 1});
    };
    const cartItemRemove = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItems = hasItems && <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
            <CartItem 
                key={item.id} 
                name={item.name} 
                amount={item.amount} 
                price={item.price}
                onAdd={cartItemAdd.bind(null, item)}
                onRemove={cartItemRemove.bind(null, item.id)}
            />
        ))}
    </ul>;

    return (
        <div>
            {cartItems}
            <div className={classes.totalForm}>
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={classes.actions}>
                    {hasItems && 
                        <Link to='/cart/checkout'>
                            <button className={classes.button}>Checkout</button>
                        </Link>}
                </div>
            </div>
        </div>
    );
};

export default Cart;