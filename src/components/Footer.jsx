import React from "react";



function footer(){
    const date = new Date();
    return <footer><p>@Copy Right {date.getFullYear()} </p></footer>
}
export default footer;