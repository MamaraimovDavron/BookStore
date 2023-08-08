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

                <div className="topSellerBox">
                    <TopSellerProps 
                            imgUrl="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661032875i/11127.jpg" 
                            name="Narnia"
                            author="C.S.Lewis, Pauline Baynes"
                            newPrice={27.89}
                            oldPrice={30.99}
                        />
                        <TopSellerProps 
                            imgUrl="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg" 
                            name="The Fault in Our Stars"
                            author="John Green"
                            newPrice={17.89}
                            oldPrice={20.99}
                        />

                    <TopSellerProps 
                            imgUrl="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1650033115i/22628.jpg" 
                            name="The Perks of Being a Wallflower"
                            author="Stephen Chbosky"
                            newPrice={17.89}
                            oldPrice={20.14}
                        />
                </div>
                

                <h1>Recommended Books</h1>
                <div className="topSellerBox">
                    <TopSellerProps 
                            imgUrl="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661032875i/11127.jpg" 
                            name="Narnia"
                            author="C.S.Lewis, Pauline Baynes"
                            newPrice={27.89}
                            oldPrice={30.99}
                        />
                        <TopSellerProps 
                            imgUrl="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg" 
                            name="The Fault in Our Stars"
                            author="John Green"
                            newPrice={17.89}
                            oldPrice={20.99}
                        />

                    <TopSellerProps 
                            imgUrl="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1409595968i/929.jpg" 
                            name="Memoirs of a Geisha"
                            author="Arthur Golden"
                            newPrice={22.39}
                            oldPrice={25.09}
                        />
                </div>
            </div>
        )
    }
}

export default TopSeller;