import React from "react";

function Card(props){
    return(
        <div className="rectangle">
            <div className="img">
                <img className="boot" src={props.src} alt="boot" />
            </div>
            <div className="description">
                <strong><h1>{props.name}</h1></strong>
                <br />
                <br />
                <p>{props.describe}</p>
            </div>
            <div className="price">
                <h2>{props.price}</h2>
            </div>
            <div>
                <input className="buy" type="button" value={"Buy Now"} />
            </div>
        </div>
    );
}

export default Card;
