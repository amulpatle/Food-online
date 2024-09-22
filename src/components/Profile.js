import { useState } from "react"

const Profile = (props) =>{
    const [count,setCount] = useState(0)
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>this is Amul Patle here</h1>
            <h2>name: {props.name}</h2>
            <h2>age: {props.age}</h2>
            <h2>count:{count}</h2>
            <button onClick={()=>{setCount(count+1)}}>click</button>
            <button onClick={()=>{setCount(count-1)}}>Decrease</button>
        </div>
    )
}

export default Profile