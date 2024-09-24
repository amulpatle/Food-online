// import {restrauntList} from "../constants";
// import RestaurantCard from "./RestaurantCard";
// import { useState,useEffect } from "react";
// import Shimmer from "./Shimmer";


// function filterData(searchText,restaurant){
//     const filteredData = restaurant.filter((restaurant) => 
//         restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
//     );
//     return filteredData;
// }

// const Body = ()=>{
//     const [allRestaurants,setAllRestaurants] = useState([]);
//     const [filteredRestaurants ,setFilteredRestaurants] = useState([]);
//     const [searchText,setSearchText] = useState("");

//     useEffect(()=>{
//         getRestaurants();
//     },[]);

//     async function getRestaurants() {
//         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2523733&lng=77.4973899&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

//         const json = await data.json();
//         console.log(json);
//         // opetional chaining .?setAllRestaurants
//         setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
//         setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
//     }

//     return (allRestaurants.length === 0) ? (<Shimmer/>) : (
//         <>
//         <div className="search-container">
//             <input 
//             type="text" 
//             className="search-input" placeholder="Search" 
//             value={searchText}
//             onChange={(e)=>{
//                 setSearchText(e.target.value)
//             }}/>
//             <button 
//             className="search-btn"
//             onClick={()=>{
//                 const data = filterData(searchText,allRestaurants);
//                 setFilteredRestaurants(data);
//             }}
//             >
//             Search
//             </button>
//         </div>
//         <div className="restaurant-list">
            
//             {filteredRestaurants.map((restaurant)=>{
//                 return (<RestaurantCard {...restaurant.info} key={restaurant.info.id} />
//                 );
//             })}

//         </div>
//         </>
//     );
// };

// export default Body



import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"; /* This is named export */
import Shimmer from "./Shimmer"; /* This is default export */
// import { FOODFIRE_API_URL } from "../../../public/Common/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

// Filter the restaurant data according to the input type
function filterData(searchText, restaurants) {
  const resFilterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return resFilterData;
}

// Body Component for body section: It contains all restaurant cards
const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants, and filteredRestaurants
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // use useEffect for one-time call getRestaurants using empty dependency array
  useEffect(() => {
    getRestaurants();
  }, []);

  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    // handle the error using try...catch
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2523733&lng=77.4973899&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
      function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which returns Swiggy Restaurant data
      const resData = checkJsonData(json);

      // update the state variables with Swiggy API data
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <h1 className="text-center mt-16 text-2xl text-red-500">
        Offline, Please check your internet connection!
      </h1>
    );
  }

  // if allRestaurants is empty don't render restaurant cards
  if (!allRestaurants) return null;

  return (
    <>
      <div className="flex justify-center my-6">
        <input
          type="text"
          className="border border-gray-400 rounded-md p-2 w-1/3"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we type in input box
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="p-2 mx-2 bg-purple-900 text-white rounded-md hover:bg-purple-700"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && (
        <div className="text-center text-red-500 text-lg mb-4">
          {errorMessage}
        </div>
      )}
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.info.id */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard {...restaurant?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
