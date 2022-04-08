import React from "react"
import "./About.css"

function About(){
    let data = [{no:"01",h2:"Lorem Impsu",p:"Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat"},
                {no:"02",h2:"Repellat Nihil", p:"Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest"},
                {no:"03",h2:"Ad ad Velit qui", p:"Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis"},
                {no:"04",h2:"Repellendus Molestiae",p:"Inventore quo sint a sint rerum. Distinctio blanditiis deserunt quod soluta quod nam mider lando casa"},
                {no:"05",h2:"Sapiente Magnam",p:"Vitae dolorem in deleniti ipsum omnis tempore voluptatem. Qui possimus est repellendus est"},
                {no:"06",h2:"Racilis Impedit",p:"Quis eum numquam veniam ea voluptatibus voluptas. Excepturi aut nostrum repudiandae voluptatibus corporis sequi"}]
    let img = [{img:"https://bootstrapmade.com/demo/templates/Green/assets/img/clients/client-7.png"},
    {img:"https://bootstrapmade.com/demo/templates/Green/assets/img/clients/client-1.png"},
    {img:"https://bootstrapmade.com/demo/templates/Green/assets/img/clients/client-8.png"},
    {img:"https://bootstrapmade.com/demo/templates/Green/assets/img/clients/client-3.png"},
    {img:"https://bootstrapmade.com/demo/templates/Green/assets/img/clients/client-2.png"},
    {img:"https://bootstrapmade.com/demo/templates/Green/assets/img/clients/client-5.png"}]
    return(
        <div className="about-us">
           <h1 className="a-h1">About Us</h1>
           <hr className="a-hr"/>
           <p className="a-p">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
           <div className="section-about">
                <div className="as">
                    <h1 className="as-h1">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div className="se-img">
                    <img src="https://bootstrapmade.com/demo/templates/Green/assets/img/about.jpg" alt=""/>
                </div>
           </div>
           <div className="a-flex">
               {data.map((ele,id)=>{
                   return(
                   <div key={id} className="a-div">
                       <h2 className="ae-h2">{ele.no}</h2>
                       <h2 className="size">{ele.h2}</h2>
                       <p className="ae-p">{ele.p}</p>
                   </div>)
               })}
           </div>
           <div className="our-service">
               <h1 className="o-h1">Our Clients</h1>
               <hr className="o-hr"/>
               <p className="o-p">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
               <div className="o-flex">
                   {img.map((ele,id)=>{
                       return(<img className="of-img" key={id} src={ele.img}/>)
                   })}
               </div>
           </div>
        </div>
    )
}
export default About;