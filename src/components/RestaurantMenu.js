import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import useRestauraunt from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restauraunt = useRestauraunt(resId);
    const dispatch = useDispatch();

    
    const menu = restauraunt?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards ? 
        Object.values(restauraunt.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards) : [];
    
    const foodNames = menu.map(item => item?.card?.info);

    // Function to handle adding specific item to the cart
    const addFoodItem = (itemName) => {
        dispatch(addItem(itemName));  
    }

    if (!restauraunt) { return <Shimmer /> }

    return (
        <>
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-3xl font-semibold mb-2">{restauraunt?.cards?.[2]?.card?.card?.info?.name}</h2>
                <h3 className="text-lg text-gray-600 mb-4">{restauraunt?.cards?.[2]?.card?.card?.info?.city}</h3>
                <img
                    src={IMG_CDN_URL + restauraunt?.cards?.[2]?.card?.card?.info?.cloudinaryImageId}
                    alt={restauraunt?.cards?.[2]?.card?.card?.info?.name}
                    className="w-full h-64 object-cover rounded-md mb-6"
                />
            </div>
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
                <h2 className="text-2xl font-semibold mb-4">Menu</h2>
                <ul className="list-disc pl-5 space-y-2">
                    {foodNames.map((item, index) => (
                        <li key={index} className="text-lg text-gray-800 flex justify-between items-center">
                            {item?.name}
                            <button 
                                className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                onClick={() => addFoodItem(item?.name)}
                            >
                                Add
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default RestaurantMenu;
