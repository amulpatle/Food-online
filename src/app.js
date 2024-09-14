import React from "react";
import ReactDom from "react-dom/client"
// import Header from "./components/Header"
import Header from "./components/Header";
import Body from "./components/body";

import Footer from "./components/footer";
import { IMG_CDN_URL } from "./constants";
 
// composing component

const AppLayout = () =>{
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);