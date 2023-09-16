import React from 'react'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="home-info">
                    <h2 className="name">Ahmed Hakil</h2>
                    <h4 className="sub-title">Creative Director</h4>
                    <p className="desc">Iam a junior <span>UX Designer</span> and
                        <span>Front-End Developer</span> creating modern and
                        resposive designs to<span> Web</span> and <span>Mobile.</span>
                        Let us work together. Thank you.</p>
                    <button className="home-btn">Let's Begin</button>
                 


                </div>
            </div>
        </div>
    );
}

export default Home;
