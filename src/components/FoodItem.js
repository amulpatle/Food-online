import { IMG_CDN_URL } from "../constants";
import { useState } from "react";

import { IMG_CDN_URL } from "../constants";


const FoodItem = ({ imageId, name, price, description }) => {
    return (
        <div className="flex flex-col max-w-sm p-4 m-4 shadow-lg bg-pink-50 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <img
                className="w-full h-40 object-cover rounded-t-lg"
                src={IMG_CDN_URL + imageId}
                alt={name}
            />
            <div className="flex flex-col justify-between p-4">
                <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
                <h4 className="text-gray-600 mt-2">Rupees {price / 100}</h4>
                <p className="text-gray-500 mt-3 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default FoodItem;
