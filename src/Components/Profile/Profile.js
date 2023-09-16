import React from 'react'
import "./Profile.css"
function Profile() {
    return (
        <div className="profile" >
            <div className="container">
                <div className="handler">
                    <h2><span> My </span>Profile</h2>
                    <ul className="info">
                        <li >
                            <span>  Name </span>
                            Ahmed Hikal
                        </li>
                        <li >
                            <span>  Birthday </span>
                            1/1/2002
                        </li>
                        <li >
                            <span>   Address </span>
                            Shibin AlQanatier
                        </li>
                        <li >
                            <span>    Phone </span>
                            +2 01016451026
                        </li>
                        <li >
                            <span>Email </span>
                            ahmedhikal2002@gmail.com
                        </li>
                        <li>
                            <span>     Website </span>
                            <a href="https://www.google.com/" className="website">www.google.com</a>
                        </li>
                    </ul>

                </div>
                <div className="skills">
                    <h2>Some <span className="some">Skills</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </p>
 
                    <div className="skills-desc">
                            <div className="skill-desc">
                            Html
                            <span className="right">100%</span>
                                

                        </div>
                        <hr className="frist" />
                        <div className="skill-desc">
                            Css
                            <span className="right">90%</span>
                            

                        </div>
                        <hr className="second" />
                        <div className="skill-desc">
                            Bootstarp
                            <span className="right">80%</span>
                            

                        </div>
                        <hr className="thrid" />
                    </div>


                </div>
            </div>
            

            
        </div>
    );
}

export default Profile;
