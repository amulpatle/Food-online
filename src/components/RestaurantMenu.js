import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import useRestauraunt from "../utils/useRestaurant";

const RestaurantMenu = ()=>{
    const { resId } = useParams();
    const restauraunt = useRestauraunt(resId)


    if (!restauraunt){return <Shimmer/>}
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2>{restauraunt.cards[2].card.card.info.name}</h2>
            <h2>{restauraunt.cards[2].card.card.info.city}</h2>
            <img src= {IMG_CDN_URL + restauraunt.cards[2].card.card.info.cloudinaryImageId}/> 
            {console.log(Object.values(restauraunt.cards[4].groupedCard.cardGroupMap.REGULAR))} 
            
        </div>

    )
};

export default RestaurantMenu



