import React from "react";
//import data from "/home/isaac/MoringaSchool/Developement/phase-2/week-1/react-hooks-component-props-mini-project/src/data/blog.js";


function Header(props) {

    return (
        <div className="header">
            <h1>{props.name}</h1>

        </div>
    )
}

export default Header;