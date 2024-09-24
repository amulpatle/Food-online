import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Title = () => (
    <a href="/">
        <img
            className="h-16 w-auto"
            alt="logo"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a9176967613739.5b3f984f5e0e9.jpg"
        />
    </a>
);

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector(store =>store.cart.items)

    return (
        <div className="flex items-center justify-between p-5 shadow-md bg-white">
            <Title />
            <div className="flex space-x-4 items-center">
                <ul className="flex space-x-6">
                    <li className="text-gray-700">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li>
                        <Link to="/" className="hover:text-blue-500 text-gray-700">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-blue-500 text-gray-700">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-blue-500 text-gray-700">Contact</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="hover:text-blue-500 text-gray-700">Cart- {cartItems.length} items</Link>
                    </li>
                </ul>
                {isLoggedIn ? (
                    <button
                        onClick={() => setIsLoggedIn(false)}
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                        Logout
                    </button>
                ) : (
                    <button
                        onClick={() => setIsLoggedIn(true)}
                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                        Login
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;
