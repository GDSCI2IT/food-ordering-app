import { useRef, useState } from "react";
import Input from "../../Ui/Input";
import classes from "./MealItemForm.module.css"


const MealItemForm = () => {
    const [amountIsValid , setAmountIsValid] = useState(true);
    const amountInputRef =  useRef();
    const submitHandler = (event)=>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false);
            return;
        }
    }

    return (
        <form onSubmit={submitHandler} className={classes.form} >
            <Input
                ref={amountInputRef}
                label='Quantity'
                input={{
                    id : "amount",
                    type : "nummber",
                    min : "1",
                    step : '1',
                    defaultValue : "1"
                }}
            />
            <button>Add</button>
            {!amountIsValid && <p>please enter a valid amount</p>}
        </form>
    );
}

export default MealItemForm;