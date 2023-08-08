import React,{ Component } from "react";
import { Facebook } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Telegram } from "react-bootstrap-icons";

const currentDate = new Date();


class Footer extends Component{
    render()
    {
        return(
            <div className="footer">
                <p className="time">All rights reserved &copy; {currentDate.getHours() + ":" + currentDate.getMinutes() + " " + currentDate.getDate() + "." + currentDate.getMonth() + "." + currentDate.getFullYear()}</p>
                <div className="icons">
                    <a href="!#"><Facebook /></a>
                    <a href="!#"><Instagram /></a>
                    <a href="!#"><Telegram /></a>
                </div>
            </div>
        )
    }
}

export default Footer;