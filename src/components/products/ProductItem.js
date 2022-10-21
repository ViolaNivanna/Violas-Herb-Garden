import { Link } from "react-router-dom";
import { useContext } from "react";

import ProductForm from "./ProductForm";
import classes from "./ProductItem.module.css";
import CartContext from "../../store/CartContext";

const ProductItem = (props) => {
    
    const prPrice = `$${props.price.toFixed(2)}`;

    const cartCtx = useContext(CartContext);

    const addToCart = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
    };

    return (
        <li className={classes.item}>
            <figure>
                <Link to={`/products/${props.id}`} >
                    <p className={classes.productBtn}>{props.name}</p>
                </Link>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>{prPrice}</p>
            </figure>
            <ProductForm onAddToCart={addToCart}/>
        </li>
    );
};

export default ProductItem;