import { render } from "@testing-library/react"
import React from "react"
import background from "./picture/saturn.png"


const Background = () => {

    var style = {
        margin: "0",
        padding: "0",
        backgroundImage: `url($(background))`,
        backgroundSize: "cover",
        backgroundPosition: "center -80px",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black"
    }



    return (
        <div style={style}></div>
    )
    
}

export default Background;



