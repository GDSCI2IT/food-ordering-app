import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderButton from "./HeaderButton";

const Header = (props) => {

    
    return ( 
        <Fragment>
            <header className={classes.header}>
                <h1>YO YO Meals</h1>
                <HeaderButton showCart={props.showCart} />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt='table full of food' />
            </div>
        </Fragment>
     );
}
 
export default Header;