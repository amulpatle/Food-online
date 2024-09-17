import { useEffect,useState} from "react";


const Title = () =>(
    <a href="/">
    <img
    className="logo"
    alt="logo"
    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a9176967613739.5b3f984f5e0e9.jpg"
    />
    </a>
);


const Header = () =>{
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {isLoggedIn ? (
                <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
            ) : (
                <button onClick={()=>setIsLoggedIn(true)}>Login</button>
            )}
        </div>
    )
};

export default Header