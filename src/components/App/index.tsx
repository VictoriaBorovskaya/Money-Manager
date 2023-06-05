import "./App.css"
import Expenses from "components/Expenses"
import Header from "components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "components/Footer"
import Income from "components/Income"
import HomePage from "components/HomePage"
import ErrorPage from "components/ErrorPage"

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="max-w-2xl m-auto bg-gray-100 min-h-screen shadow-md p-10 primary-container">
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/income" element={<Income />}></Route>
                    <Route path="/expenses" element={<Expenses />}></Route>
                    <Route path="*" element={<ErrorPage />}></Route>
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default App
