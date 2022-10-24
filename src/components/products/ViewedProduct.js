/*
Det som var feil (grunnen til at man ikke kunne legge i cart) var at ViewdProduct
mottok ferdig fixed pris fra ProductDetail. 
Altså ikke vanlig pris som den skulle sende videre til ProductForm
ProductForm mottok derfor en fixed $ pris
*/

import { useContext } from "react";
import { Link } from "react-router-dom";

import ProductForm from "./ProductForm";
import classes from "./ViewedProduct.module.css";
import CartContext from "../../store/CartContext";

const ViewedProduct = (props) => {

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

    return(
        <section className={classes.details}>
            <h1>{props.name}</h1>
            <div className={classes['product-image']}>
                <img src={props.herbImg} alt='A beautiful, healthy herb'/>
            </div>
            <div className={classes.addForm}>
                <p className={classes.price}>
                    <p>{prPrice}</p>
                    <p className={classes.per}> per 25g </p>
                </p>
                <ProductForm onAddToCart={addToCart}/>
            </div>
            <figure>
                <p>
                    <p className={classes.name}>{props.name}</p>
                    {props.info}
                    <p className={classes.precautions}>Precautions:</p>
                    {props.precautions}
                    <p>
                        <a href="https://hellopoetry.com/christian-l-bixler/">Christian Bixler</a>
                    </p>
                </p>
            </figure> 
        </section>
    );
};

export default ViewedProduct;