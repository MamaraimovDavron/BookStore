import React, { Component } from "react";

class BookAds extends Component{
    render(){
        return(
            <div className="bookAds">
                <div className="left">
                    <h1>New Releases This Week</h1>
                    <p>
                        It's time to update your reading list with 
                        some of the latest and greatest releases in 
                        the literary world. From heart-pumping 
                        thrillers to captivating memoirs, this week's 
                        new releases offer something for everyone
                    </p>
                    <button className="btn btn-success">Subscribe</button>
                </div>
                <div className="right">
                    <div className="box one"><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1661032875i/11127.jpg" alt="" /></div>
                    <div className="box two"><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085.jpg" alt="" /></div>
                    <div className="box three"><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1174210942i/370493.jpg" alt="" /></div>
                </div>
            </div>
        )
    }
}

export default BookAds;