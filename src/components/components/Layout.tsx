import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout: React.FC = ({ children }) => {
    return (
        <div>
<<<<<<< HEAD
            <Navbar />
=======
            {/* <Navbar/> */}
>>>>>>> 62d1e22cdfe22766cd87b214e822c128395092f1
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout