import React from "react"
import "../components/css/secondSection.css"

const SecondSection = ()=>{

    const webVisits = () =>{
        return(
            fetch('https://api.countapi.xyz/update/value/?amount=1')
            .then((res)=>res.json())
        )
    }
    
    return(
        <div className="sContent">

            <div className="sContent_left">

                <div className="sContent_left_visits">
                    <div className="sContent_left_data">
                        <div className="sContent_left_data_1">
                            <div className="sContent_left_data_1_square"></div>
                        </div>

                        <div className="sContent_left_data_2">
                            <div className="sContent_left_data_2_content">
                                <div className="sContent_left_data_2_content1">Total Visits</div>
                                <div className="sContent_left_data_2_content2">{webVisits}</div>
                            </div>
                        </div>

                        <div className="sContent_left_data_3"></div>
                    </div>
                </div>

                <div className="sContent_left_subs">
                    <div className="sContent_left_data">
                        <div className="sContent_left_data_1">
                            <div className="sContent_left_data_1_square"></div>
                        </div>

                        <div className="sContent_left_data_2"></div>

                        <div className="sContent_left_data_3"></div>
                    </div>
                </div>

                <div className="sContent_left_acUsers">
                    <div className="sContent_left_data">
                        <div className="sContent_left_data_1">
                            <div className="sContent_left_data_1_square"></div>
                        </div>

                        <div className="sContent_left_data_2"></div>

                        <div className="sContent_left_data_3"></div>
                    </div>
                </div>

                <div className="sContent_left_clicks">
                    <div className="sContent_left_data">
                        <div className="sContent_left_data_1">
                            <div className="sContent_left_data_1_square"></div>
                        </div>

                        <div className="sContent_left_data_2"></div>

                        <div className="sContent_left_data_3"></div>
                    </div>
                </div>

            </div>

            <div className="sContent_right"></div>
        </div>
    )
}

export default SecondSection;