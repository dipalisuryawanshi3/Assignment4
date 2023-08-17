import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;
const Checkout = (props) => {
  const [formInputsValidity,setFormInputsValidity] = useState({
    name:true,
    street:true,
    postal:true,
    city:true
  });
  const nameUserRef = useRef();
  const streetUserRef = useRef();
  const postalUserRef = useRef();
  const cityUserRef = useRef();
  
  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameUserRef.current.value;
    const enteredStreet = streetUserRef.current.value;
    const enteredPostal = postalUserRef.current.value;
    const enteredCity = cityUserRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = isFiveChars(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
        name:enteredNameIsValid,
        street:enteredStreetIsValid,
        postal:enteredPostalIsValid,
        city:enteredCityIsValid
    })
    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid;
  
    if(!formIsValid)
    {
        //submit
    }
    else{

    }
};

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameUserRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetUserRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalUserRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityUserRef}/>
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;