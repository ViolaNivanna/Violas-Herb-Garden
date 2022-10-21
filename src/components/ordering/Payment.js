import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === '';

const Payment = (props) => {
    
    const [inputValidity, setInputValidity] = useState({
        cardNr: true,
        cardName: true,
        exDate: true,
        securityCode: true,
    });

    const cardNrInputRef = useRef();
    const cardNameInputRef = useRef();
    const exDateInputRef = useRef();
    const securityCodeInputRef = useRef();

    const paymentHandler = (event) => {
        event.preventDefault();

        const enteredcardNr = cardNrInputRef.current.value;
        const enteredcardName = cardNameInputRef.current.value;
        const enteredexDate = exDateInputRef.current.value;
        const enteredsecurityCode = securityCodeInputRef.current.value;

        const enteredcardNrIsValid = !isEmpty(enteredcardNr);
        const enteredcardNameIsValid = !isEmpty(enteredcardName);
        const enteredexDateIsValid = !isEmpty(enteredexDate);
        const enteredsecurityCodeIsValid = !isEmpty(enteredsecurityCode);
        
        setInputValidity({
            cardNr: enteredcardNrIsValid,
            cardName: enteredcardNameIsValid,
            exDate: enteredexDateIsValid,
            securityCode: enteredsecurityCodeIsValid,
        });

        const formIsValid = 
            enteredcardNrIsValid &&
            enteredcardNameIsValid &&
            enteredexDateIsValid &&
            enteredsecurityCodeIsValid;

        if (!formIsValid) {
            return;
        }
    };

    const cardNrClasseControl = `${classes.control} ${
        inputValidity.cardNr ? '' : classes.invalid
    }`;
    const cardNameClasseControl = `${classes.control} ${
        inputValidity.cardName ? '' : classes.invalid
    }`;
    const exDateClasseControl = `${classes.control} ${
        inputValidity.exDate ? '' : classes.invalid
    }`;
    const securityCodeClasseControl = `${classes.control} ${
        inputValidity.securityCode ? '' : classes.invalid
    }`;

    return (
        <form onSubmit={paymentHandler}>
            <p className={classes.pay}>Credit or debit card</p>
            <div className={cardNrClasseControl}>
                <label htmlFor='cardNr'>Card number</label>
                <input type='text' id='cardNr' ref={cardNrInputRef}/>
                {!inputValidity.cardNr && <p>Please enter a valid card number</p>}
            </div>

            <div className={cardNameClasseControl}>
                <label htmlFor='cardName'>Name on card</label>
                <input type='text' id='cardName' ref={cardNameInputRef}/>
                {!inputValidity.cardName && <p>Please enter a valid name</p>}
            </div>

            <div className={exDateClasseControl}>
                <label htmlFor='exDate'>Expiration date (MM/YY)</label>
                <input type='text' id='exDate' ref={exDateInputRef}/>
                {!inputValidity.exDate && <p>Please enter a valid expiration date</p>}
            </div>

            <div className={securityCodeClasseControl}>
                <label htmlFor='securityCode'>Security Code (CVV/CVC)</label>
                <input type='text' id='securityCode' ref={securityCodeInputRef}/>
                {!inputValidity.securityCode && <p>Please enter a valid security code</p>}
            </div>

            <div className={classes.actions}>
                <Link to='/order'>
                    <button className={classes.button}>Order</button>
                </Link>        
            </div>
        </form>
    );

};

export default Payment;