import React from "react"
import "./Green.css"


function Green(){
    let section=[{i:"@",h2:"Lorem Ipsum",p:`Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident`},
    {i:"#",h2:"Dolor Sitema",p:`Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata`},
    {i:"#",h2:"Sed ut perspiciatis",p:`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur trade stravi`}]
    return(
        <div>
            <div className="home-box">
                <h1 className="h-h1">Lorem Ipsum Dolor</h1>
                <p className="h-p">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <button className="h-btn">Read More</button>
            </div>
            <div className="h-setion">
                {section.map((ele,id)=>{
                    return(
                        <div key={id}>
                            <i>{ele.i}</i>
                            <h2>{ele.h2}</h2>
                            <p>{ele.p}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        )
}
export default Green