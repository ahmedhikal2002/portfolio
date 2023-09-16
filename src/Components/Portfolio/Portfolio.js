import React from 'react'
import "./Portfolio.css"
import img1 from "./Portfolio/portfolio-img1.jpg";
import img2 from "./Portfolio/portfolio-img2.jpg";
import img3 from "./Portfolio/portfolio-img3.jpg";
import img4 from "./Portfolio/portfolio-img4.jpg";
import img5 from "./Portfolio/portfolio-img5.jpg";
import img6 from "./Portfolio/portfolio-img6.jpg";
import img7 from "./Portfolio/portfolio-img7.jpg";
import img8 from "./Portfolio/portfolio-img8.jpg";
function Portfolio() {
    return (
        <div className="  Portfolio" >
            <h2> <span>My </span>   Portfolio</h2>
            <ul className="items">
                <li className="item active">All</li>
                <li className="item">HTML</li>
                <li className="item">Photoshop</li>
                <li className="item"> Wordpress </li>
                <li className="item">Mobile</li>
        
                 
            </ul>

            <div className="box">
                <div>
                    <img src={img1} alt="img" />
                    <span>
                        <p className="layout">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</p>
                    </span>
                </div>
                <div>
                    <img src={img2} alt="img" />
                    <span>
                        <p className="layout">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</p>
                    </span>
                </div>
                <div>
                    <img src={img3} alt="img" />
                    <span>
                        <p className="layout">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</p>
                    </span>
                </div>
                <div>
                    <img src={img4} alt="img" />
                    <span>
                        <p className="layout">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</p>
                    </span>
                </div>
                <div>
                    <img src={img5} alt="img" />
                    <span>
                        <p className="layout">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</p>
                    </span>
                </div>
                <div>
                    <img src={img6} alt="img" />
                    <span>
                        <p className="layout">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</p>
                    </span>
                </div>
                <div>
                    <img src={img7} alt="img" />
                    <span>
                        <p className="layout">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</p>
                    </span>
                </div>
                <div>
                    <img src={img8} alt="img" />
                    <span>
                        <p className="layout">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</p>
                    </span>
                </div>







            </div>













        </div>
    );
}

export default Portfolio;
