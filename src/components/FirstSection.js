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
                    <div className="text">User</div>
                    <div className="symbol">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                        <path d="M1 1L6 6L11 1" stroke="#747E9A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstSection;