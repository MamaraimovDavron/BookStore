import React, { Component } from "react";
import BookAds from "./components/BookAds";
import Header from "./components/Header";
import TopSeller from "./components/TopSeller";

class App extends Component {
    render(){
        return(
            <div className="container">
                <Header />
                <BookAds />
                <TopSeller />
            </div>
        )
    }
}

export default App;