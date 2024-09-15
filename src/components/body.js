import {restrauntList} from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";


function filterData(searchText,restaurant){
    const filteredData = restaurant.filter((restaurant) => 
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredData;
}

const Body = ()=>{
    const [restaurants,setRestaurant] = useState(restrauntList)
    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
        getRestaurants();
    },[]);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2523733&lng=77.4973899&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();
        console.log(json);
        // opetional chaining .?
        setRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

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