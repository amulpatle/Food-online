import { useState,useEffect } from "react"
import { FATCH_MENU_URL } from "../constants";

const useRestauraunt = (resId) =>{
    const [restauraunt,setRestauraunt] = useState(null)

  // async function getRestaurant to fetch Swiggy API data
  useEffect(()=>{
        getRestaurauntInfo();
    },[]);

    async function getRestaurauntInfo() {
        
        const data = await fetch(
            FATCH_MENU_URL+resId
        )
        const json = await data.json();
        
        
        setRestauraunt(json.data)
        
    }
    return restauraunt

}

export default useRestauraunt