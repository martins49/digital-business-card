import React from "react"
import instagram_Logo from "../images/1insta.jpg"
import twitter_Logo from "../images/2 twitter.jpg"
import likedin_Logo from "../images/3 likedin.jpg"
import facebook_Logo from "../images/4 Facebook.jpg"

const Footer = () => {
    return (
        <div className="myfooter">
            <img src={twitter_Logo} width="30px" className="twitter_Logo" alt="" />
            <img src={facebook_Logo} width="30px" className="facebook_Logo" alt="" />
            <img src={instagram_Logo} width="30px" className="instagram_Logo" alt="" />
            <img src={likedin_Logo} width="30px" className="likedin_Logo " alt="" />

        </div>
    )
}
export default Footer