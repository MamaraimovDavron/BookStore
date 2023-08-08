import React,{ Component } from "react";
import { Cart } from 'react-bootstrap-icons';


class TopSellerProps extends Component{
    render(){
        const { imgUrl, name, author, newPrice, oldPrice} = this.props;
        return(
            <div>
                <div className="book-box">
                        <div className="left">
                            <img src={imgUrl} alt="" />
                        </div>
                        <div className="right">
                            <h2 className='name'>{name}</h2>
                            <p className='author'>{author}</p>
                            <span className='prices'>
                                <p className='newPrice'>${newPrice}</p>
                                <p className='oldPrice'><strike>${oldPrice}</strike></p>
                            </span>
                            <button className='btnCart'>
                                <Cart className='cart'/>
                                Add to Basket
                            </button>
                        </div>
                </div>
            </div>
        )
    }
}

export default TopSellerProps;