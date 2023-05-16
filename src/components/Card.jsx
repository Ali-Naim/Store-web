import React, {useState} from "react";
import Note from "./Note";

function Card(props){

    const [isClicked, setClicked] = useState(false);

    function click(){
        setClicked(true);
    } 
    function noClick(){
        setClicked(false);
    }

    return(
        <div className="rectangle">
            <div className="img">
                <img className="boot" src={props.src} alt="boot" />
            </div>
            <div className="description">
                <strong><h1>{props.name}</h1></strong>
                <br />
                
                <p>{props.describe}</p>
            </div>
            <div className="price">
                <h2>{props.price}</h2>
            </div>
            <div>
                <input className="buy" 
                type="button" 
                onMouseOver={click}
                onMouseOut={noClick}
                style={{backgroundColor: isClicked ? "#212A3E" : null}}
                value={"Buy Now"} 
                />
            </div>
        </div>
    );
}

export default Card;
