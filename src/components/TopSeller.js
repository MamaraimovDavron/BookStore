import React, { Component } from 'react';
import TopSellerProps from './TopSellerProps';

class TopSeller extends Component{
    render(){
        return(
            <div className='topSeller'>
                <h1>Top Sellers</h1>
                <select>
                    <option value="">Choose a genre</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Romance">Romance</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Horror">Horror</option>
                </select>

            
                <TopSellerProps 
                        imgUrl="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661032875i/11127.jpg" 
                        name="Narnia"
                        author="C.S.Lewis, Pauline Baynes"
                        newPrice={27.89}
                        oldPrice={30.99}
                    />

<TopSellerProps 
                        imgUrl="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661032875i/11127.jpg" 
                        name="Narnia"
                        author="C.S.Lewis, Pauline Baynes"
                        newPrice={27.89}
                        oldPrice={30.99}
                    />
            
                
            </div>
        )
    }
}

export default TopSeller;