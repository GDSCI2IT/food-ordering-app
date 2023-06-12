import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    return (
        <li>
            <div>
                <h3>{props.meal.name}</h3>
                <div className={classes.description}>{props.meal.description}</div>
                <div className={classes.price}>{props.meal.price}</div>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    );
}

export default MealItem;