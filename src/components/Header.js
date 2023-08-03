import React, {Component} from "react";

class Header extends Component{
    render(){
        return(
            <div className="header">
                <nav>
                    <div className="left-box">
                        <a href="#!">icon</a>
                        <div className="input-box">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="right-box">
                        <a href="#!">P</a>
                        <a href="#!">H</a>
                        <a href="#!">
                            <i></i>
                            
                        </a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;