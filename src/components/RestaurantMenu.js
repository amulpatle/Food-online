import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import useRestauraunt from "../utils/useRestaurant";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restauraunt = useRestauraunt(resId)
    const menu = Object.values(restauraunt.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
    const foodNames = menu.map(item => item.card.info.name);
    
    const handleAddItem = () =>{
        dispatchEvent(addItem("Grapes"));  
    }

    if (!restauraunt) { return <Shimmer /> }

    return (
        <>
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-3xl font-semibold mb-2">{restauraunt.cards[2].card.card.info.name}</h2>
                <h3 className="text-lg text-gray-600 mb-4">{restauraunt.cards[2].card.card.info.city}</h3>
                <img
                    src={IMG_CDN_URL + restauraunt.cards[2].card.card.info.cloudinaryImageId}
                    alt={restauraunt.cards[2].card.card.info.name}
                    className="w-full h-64 object-cover rounded-md mb-6"
                />
            </div>
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
                <button className="text-2xl font-semibold mb-4" onClick={()=>handleAddItem()}>Menu</button>
                <ul className="list-disc pl-5 space-y-2">
                    {foodNames.map((name, index) => (
                        <li key={index} className="text-lg text-gray-800">{name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default RestaurantMenu;
