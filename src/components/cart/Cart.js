import Modal from '../Ui/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {

    let cartItems = [{ id: "1", name: "sushi", price: "14", amount: 2 }].map(
        item => (
            <li key={item.id} >{item.name}</li>
        )
    )

    return (
        <Modal showCart={props.showCart} >
            <ul className={classes["cart-items"]} >
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$15</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.showCart} className={classes['button--alt']} >Cancel</button>
                <button className={classes.button} >Order</button>
            </div>
        </Modal>
    );
}

export default Cart;