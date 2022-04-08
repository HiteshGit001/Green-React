import React from "react"
import "./Portfolio.css"

class Portfolio extends React.Component{
    render(){
        let data1= [{img:"https://bootstrapmade.com/demo/templates/Green/assets/img/portfolio/portfolio-1.jpg"},
        {img:"https://bootstrapmade.com/demo/templates/Green/assets/img/portfolio/portfolio-6.jpg"}]

        let data2=[{img:"https://bootstrapmade.com/demo/templates/Green/assets/img/portfolio/portfolio-2.jpg"},
        {img:"https://bootstrapmade.com/demo/templates/Green/assets/img/portfolio/portfolio-5.jpg"},
        {img:"https://bootstrapmade.com/demo/templates/Green/assets/img/portfolio/portfolio-9.jpg"}]

        let data3=[{img:"https://bootstrapmade.com/demo/templates/Green/assets/img/portfolio/portfolio-3.jpg"},
        {img:"https://bootstrapmade.com/demo/templates/Green/assets/img/portfolio/portfolio-4.jpg"},
        {img:"https://bootstrapmade.com/demo/templates/Green/assets/img/portfolio/portfolio-7.jpg"},
        {img:"https://bootstrapmade.com/demo/templates/Green/assets/img/portfolio/portfolio-3.jpg"}]

        let imgdata=[{img:"https://bootstrapmade.com/demo/templates/Green/assets/img/team/team-1.jpg",sname:"Walter White",job:"Chief Executive Officer",p:"Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut"},
        {img:"https://bootstrapmade.com/demo/templates/Green/assets/img/team/team-2.jpg",sname:"Sarah Jhison",job:"Prodect manager",p:"Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut"},
        {img:"https://bootstrapmade.com/demo/templates/Green/assets/img/team/team-3.jpg",sname:"William Anderson",job:"CTO",p:"Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut"}]
        return(
            <div>
                <h1 className="port-des">Portfolio</h1>
                <hr className="p-hr"/>
                <p className="p-p">Magnam dolores commodi suscipit. Necessitatibus eius 
                consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam 
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat 
                sit in iste officiis commodi quidem hic quas.</p>
                <div className="p-nav">
                    <a href="">ALL</a>
                    <a href="">APP</a>
                    <a href="">CARD</a>
                    <a href="">WEB</a>
                </div>
                <div className="box">
                    <div className="portfolio">
                    <div className="">
                        {data1.map((ele,id)=>{
                            return(
                                <div key={id} className="p-img1">
                                    <img src={ele.img} alt=""/>
                                    <div className="p-hover1">
                                            <h1>App</h1><p>App1</p> <span>+</span> 
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="">
                        {data2.map((ele,id)=>{
                            return(
                                
                                    <div key={id} className="p-img2">
                                            <img className={"pf-"+id}  src={ele.img} alt=""/>
                                        <div className="p-hover2">
                                            <h1>App</h1><p>App1</p> <span>+</span> 
                                    </div>
                                </div>
                                
                            )
                        })}
                    </div>
                    <div>
                        {data3.map((ele,id)=>{
                            return(
                                <div key={id} className="p-img3" >
                                    <img className={"p-"+id} src={ele.img} alt=""/>
                                    <div className="p-hover3">
                                            <h1>App</h1><p>App1</p> <span>+</span> 
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    </div>
                </div>
                <div className="team">
                        <h1 className="team-h1">TEAM</h1>
                        <hr className="team-hr"/>
                        <p className="team-p">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                             in iste officiis commodi quidem hic quas.</p>
                        <div className="team-flex">
                            {imgdata.map((ele)=>{
                                return(
                                    <div className="team-box">
                                        <img src={ele.img} alt=""/>
                                        <h1>{ele.sname}</h1>
                                        <h2>{ele.job}</h2>
                                        <p>{ele.p}</p>
                                    </div>
                                )
                            })}
                        </div>
                </div>
            </div>
        )
    }
}
export default Portfolio;