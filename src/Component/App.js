import React from "react"
import Info from "./info"
import About from "./about"
import Interest from "./interests"
import Footer from "./footer"

const App = () => {

    return (
        <div className="app-wrapper">
            <div className="app-container">
                <Info />
                <About />
                <Interest />
                <Footer />
            </div>


        </div>
    )
}

export default App