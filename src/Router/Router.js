import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../src/pages/HomePage";
import CartPage from "../components/CartPage"
import Header from "../ShareModule/Header"
import Footer from "../ShareModule/Footer";



const Rout = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}


export default Rout;