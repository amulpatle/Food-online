import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items); 
    
    return (
        <div>
            <h1>Cart - Items: {cartItems.length}</h1>
            {cartItems.map((item)=>(
                <FoodItem key={item.id} {...item}/>
            ))}
        </div>
    );
}

export default Cart;
