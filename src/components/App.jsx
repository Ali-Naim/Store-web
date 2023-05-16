import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import boots from "../boots";

function createCard(boot){
    return (<Card 
    key = {boot.id}
    name = {boot.name}
    src = {boot.src}
    describe = {boot.describe}
    price = {boot.price} 
    />
    );
}

function App(){
return <div>
        <Header />
        {boots.map(createCard)}
        <Footer />
    </div>
}

export default App;