import React from "react";
import "../components/css/main.css"
import FirstSection from "../components/FirstSection"
import SecondSection from "../components/SecondSection"
import ThirdSection from "../components/ThirdSection"

const Main = ()=>{
    return(
        <div className="content">

            <div className="firstSection"><FirstSection/></div>
            <div className="secondSection"><SecondSection/></div>
            <div className="thirdSection"><ThirdSection/></div>

        </div>

       
    );
}

export default Main;