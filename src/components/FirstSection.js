import React from "react"
import "../components/css/firstSection.css"

const FirstSection = ()=>{
    return(
        <div className="fContent">
            <div className="appName">
                <div className="appNametop">User Analytics</div>
                <div className="appNamebottom">Lorem ipsum dolor sit consectetur</div>
            </div>
            <div className="extraSpace"></div>
            <div className="userDropdown">
                <div className="userDropdownContent">
                    <div className="Text">User</div>
                    <div className="symbol"></div>
                </div>
            </div>
        </div>
    )
}

export default FirstSection;