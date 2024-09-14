import {restrauntList} from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";


function filterData(searchText,restaurant){
    const filteredData = restaurant.filter((restaurant) => 
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredData;
}

const Body = ()=>{
    const [restaurants,setRestaurant] = useState(restrauntList)
    const [searchText,setSearchText] = useState("");
    return (
        <>
        <div className="search-container">
            <input 
            type="text" 
            className="search-input" placeholder="Search" 
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value)
            }}/>
            <button 
            className="search-btn"
            onClick={()=>{
                const data = filterData(searchText,restaurants);
                setRestaurant(data);
            }}
            >
            Search
            </button>
        </div>
        <div className="restaurant-list">
            
            {restaurants.map((restaurant)=>{
                return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />;
            })}

        </div>
        </>
    )
}

export default Body