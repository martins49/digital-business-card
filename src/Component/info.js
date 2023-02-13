import React from "react"
import myPicture from "../images/marto_1.png"
import email_Logo from "../images/5 email.jpg"
import likedin_Logo from "../images/3 likedin.jpg"

const Info = () => {
    return (
        <div className="info">
            <img src={myPicture} width="180px" height="180px" alt="" />
            <h1 className="myName">Marto Busayo</h1>
            <p> Web Developer</p>
            <button className="email-btn"> <img src={email_Logo} width="20px" className=" " alt="" />    <a href="https://myaccount.google.com/" target="_blank" rel="noreferrer">Email</a> </button>
            <button className="Likedin-btn">
                <img src={likedin_Logo} width="14px" className="infolikedin " alt="" />       <a href="https://www.linkedin.com/in/akingboye-martins-a4b0a8252/" target="_blank" rel="noreferrer"> Likedin</a> </button>
        </div>
    )
}

export default Info