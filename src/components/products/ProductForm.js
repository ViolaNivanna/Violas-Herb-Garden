import { useRef, useState } from "react";

import AddButton from "../elements/AddButton";
import Input from "../elements/Input";
import classes from "./ProductForm.module.css";

const ProductForm = (props) => {

    const amountInputRef = useRef();

    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 ||
            enteredAmount < 1 ||
            enteredAmount > 10
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
                label='Amount' 
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '10',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <AddButton/>
            {!amountIsValid && <p>Pleas enter a valid amount (1-10)</p>}
        </form>
    );
};

export default ProductForm;