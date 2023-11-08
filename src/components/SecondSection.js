import React from "react"
import "../components/css/secondSection.css"

const FirstSection = ()=>{
    return(
        <div className="sContent">

            <div className="sContent_left">
                <div className="sContent_left_visits"></div>
                <div className="sContent_left_subs"></div>
                <div className="sContent_left_acUsers"></div>
                <div className="sContent_left_clicks"></div>
            </div>

            <div className="sContent_right"></div>
        </div>
    )
}

export default FirstSection;