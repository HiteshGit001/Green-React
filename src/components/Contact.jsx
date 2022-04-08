import React from "react"
import "./Contact.css"
function Contact(){
    return(
        <dvi>
            <h1 className="cont-h1">Contact</h1>
            <hr className="cont-hr"/>
            <p className="cont-p">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            <dvi className="box-flex">
                <div className="contact-box">
                    <div className="d-flex">
                        <i>@</i>
                        <div className="con-flex">
                            <h1>Location</h1>
                            <p>A108 Adam New York, NY 305055</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <i>$</i>
                        <div className="con-flex">
                            <h1>Email</h1>
                            <p>info@example.com</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <i>#</i>
                        <div className="con-flex">
                            <h1>Call</h1>
                            <p>+5 65484851454854</p>
                        </div>
                    </div>
                </div>
                <div className="message">
                    <form>
                        <div className="mes-fles">
                            <div>
                                <label>Your Name</label><br/>
                                <input className="name" type="text" />
                            </div>
                            <div className="s-email">
                                <label>Your Email</label><br/>
                                <input className="email" type="text" />
                            </div>
                        </div>
                        <div>
                            <label>Subject</label><br/>
                            <input className="subject" type="text" /><br/>
                            <label>Message</label><br/>
                            <textarea rows="10" cols="69"/>
                            <button className="sm-btn">Send Message</button>
                        </div>
                    </form>
                </div>
            </dvi>
            <div className="bottom">
                <h1>Green</h1>
                <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni 
                    eligendi fuga maxime saepe commodi placeat.</p>
                <div className="icons">
                    <h3>@</h3>
                    <h3>#</h3>
                    <h3>$</h3>
                    <h3>*</h3>
                    <h3>@</h3>
                </div>
                <p>© Copyright. All right reserved</p>
                <p>Developed by <span>Hitesh G N</span> and Designed by Bootstrap</p>
            </div>
        </dvi>
    )
}
export default Contact;