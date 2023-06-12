import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './HeaderButton.module.css';

const HeaderButton = (props) => {

    const cartCtx = useContext(CartContext);
    const itemsNum = cartCtx.items.length;
    
    return (
    <button onClick={props.showCart} className={classes.button}>
        
        Your Cart
        <span className={classes.badge} >{itemsNum}</span>
    </button>);
}

export default HeaderButton;