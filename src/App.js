import React, { Component } from "react";
import BookAds from "./components/BookAds";
import Header from "./components/Header";

class App extends Component {
    render(){
        return(
            <div className="container">
                <Header />
                <BookAds />
            </div>
        )
    }
}

export default App;