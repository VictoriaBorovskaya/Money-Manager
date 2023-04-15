import "./App.css"
import Expenses from "components/Expenses"
import Header from "components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "components/Footer"

function App() {
    return (
        <BrowserRouter>

            <Header />
            <div className="max-w-2xl m-auto bg-gray-100 min-h-screen shadow-md p-10 primary-container">
                <Routes>
                    <Route path="/" element={<div>Главная страница</div>}></Route>
                    <Route path="/income" element={<div>Учет доходов</div>}></Route>
                    <Route path="/expenses" element={<Expenses />}></Route>
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default App
