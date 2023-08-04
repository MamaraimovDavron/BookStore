import React, {Component} from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { MenuUp } from 'react-bootstrap-icons';
import { Search } from 'react-bootstrap-icons';
import { Person } from 'react-bootstrap-icons';
import { Heart } from 'react-bootstrap-icons';
import { Cart } from 'react-bootstrap-icons';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <nav>
                    <div className="left-box">
                        <a href="#!"><MenuUp className="menu-icon"/></a>
                        <div className="input-box">
                            <Search className="search"/>
                            <input type="text" placeholder="What are you looking for ?"/>
                        </div>
                    </div>
                    <div className="right-box">
                        <a href="#!" className="person-icon"><Person /></a>
                        <a href="#!" className="heart-icon"><Heart /></a>
                        <a href="#!" className="basket"><Cart className="cart"/> <h4>Basket</h4></a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;