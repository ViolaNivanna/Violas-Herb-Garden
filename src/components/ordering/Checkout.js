import { useRef, useState } from "react";
import { Route, Link } from "react-router-dom";

import PaymentPage from "../../pages/PaymentPage";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === '';

const Checkout = (props) => {

    const [inputValidity, setInputValidity] = useState({
        name: true,
        country: true,
        street: true,
        city: true,
        state: true,
        zip: true
    });

    const nameInputRef = useRef();
    const countryInputRef = useRef();
    const streetInputRef = useRef();
    const cityInputRef = useRef();
    const stateInputRef = useRef();
    const zipInputRef = useRef();

    const paymentHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredCountry = countryInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredState = stateInputRef.current.value;
        const enteredZip = zipInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredCountryIsValid = !isEmpty(enteredCountry);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredStateIsValid = !isEmpty(enteredState);
        const enteredZipIsValid = !isEmpty(enteredZip);

        setInputValidity({
            name: enteredNameIsValid,
            country: enteredCountryIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            state: enteredStateIsValid,
            zip: enteredZipIsValid
        });

        const formIsValid = 
            enteredNameIsValid &&
            enteredCountryIsValid &&
            enteredStreetIsValid &&
            enteredCityIsValid &&
            enteredStateIsValid &&
            enteredZipIsValid;

        if (!formIsValid) {
            return;
        }
    };

    const nameClasseControl = `${classes.control} ${
        inputValidity.name ? '' : classes.invalid
    }`;
    const countryClasseControl = `${classes.control} ${
        inputValidity.country ? '' : classes.invalid
    }`;
    const streetClasseControl = `${classes.control} ${
        inputValidity.street ? '' : classes.invalid
    }`;
    const cityClasseControl = `${classes.control} ${
        inputValidity.city ? '' : classes.invalid
    }`;
    const stateClasseControl = `${classes.control} ${
        inputValidity.state ? '' : classes.invalid
    }`;
    const zipClasseControl = `${classes.control} ${
        inputValidity.zip ? '' : classes.invalid
    }`;

    return (
        <form className={classes.form} onSubmit={paymentHandler}>
            <p className={classes.adress}>Your Adress</p>
            <div className={nameClasseControl}>
                <label htmlFor='name'>Full name</label>
                <input type='text' id='name' ref={nameInputRef}/>
                {!inputValidity.name && <p>Please enter a valid name</p>}
            </div>

            <div className={countryClasseControl}>
                <label htmlFor='country'>Country</label>
                <input type='text' id='country' ref={countryInputRef}/>
                {!inputValidity.country && <p>Please enter a valid country</p>}
            </div>

            <div className={streetClasseControl}>
                <label htmlFor='street'>Street adress</label>
                <input type='text' id='street' ref={streetInputRef}/>
                {!inputValidity.street && <p>Please enter a valid street adress</p>}
            </div>

            <div className={cityClasseControl}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef}/>
                {!inputValidity.city && <p>Please enter a valid city</p>}
            </div>

            <div className={stateClasseControl}>
                <label htmlFor='state'>State / County</label>
                <input type='text' id='state' ref={stateInputRef}/>
                {!inputValidity.state && <p>Please enter a valid ctate/county</p>}
            </div>

            <div className={zipClasseControl}>
                <label htmlFor='zip'>Zip / Postal code</label>
                <input type='text' id='zip' ref={zipInputRef}/>
                {!inputValidity.zip && <p>Please enter a valid zip/Postal code</p>}
            </div>


            <Route path='/cart/checkout' exact>
                <div className={classes.actions}>
                    <Link to='/cart/checkout/payment'>
                        <button className={classes.button}>Payment</button>
                    </Link>
                </div>
            </Route>
            <Route path='/cart/checkout/payment'>
                <PaymentPage />
            </Route>
        </form>
    );
};

export default Checkout;