import React from 'react'
import "./SocialMedia.css"
function SocialMedia() {
    return (
        <div className="social-media">
            <div className="social facebook">
                <i className=" my-icon  fa-brands fa-facebook-f"></i>
                <span> Follow Me on</span>
                <span className="normal">Social Facebook</span>

            </div>

            <div className=" social twitter">
                <i className="my-icon fa-brands fa-twitter"></i>
                <span> Tweet Me on</span>
                <span className="normal">Social Twitter</span>

            </div>
            <div className="social pin">
                <i className=" my-icon fa-brands fa-pinterest-p"></i>
                <span> Pin Me on</span>
                <span className="normal">Social Pinterest</span>

            </div>


        </div>
    );
}

export default SocialMedia;
