import React from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Services.css"


class Services extends React.Component{
    render(){
        let item =[{i:"!"},{i:"@"},{i:"#"},{i:"$"},{i:"%"},{i:"^"}]
        return(
            <div className="service">
                <h1 className="s-h1">SERVICES</h1>
                <hr className="s-hr"/>
                <p className="s-p">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                <div className="s-flex">
                {/* <FontAwesomeIcon icon="fa-solid fa-laptop" /> */}
                {item.map((ele, id)=>{
                    return(<div className="s-box" key={id}>
                        <i className='s-i' className={"s-"+id}>{ele.i}</i>
                        <h1>Lorem Ipsum</h1>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                    </div>)
                })}
                </div>
                <div className="ss-flex">
                    <div>
                    <h1 className="ss-h1">Call To Action</h1>
                    <p className="ss-p">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="btn">
                        <button className="ss-btn">Call To Action</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Services;