import DeleteModal from "components/Expenses/DeleteModal"
import { useState } from "react"

const Purchase = ({purchases, purchase, setPurchases}) => {

    const [isOpen, setIsOpen] = useState(false)

    const deletePurchase = (id) => {
        const filteredPurchase = purchases.filter(purchase => purchase.id !== id)
        setPurchases(filteredPurchase)
    }

    return(
        <div className='flex items-center py-3 border-b-2 border-b-gray-300'>
            <div className='flex justify-between items-center w-full pr-5'>
                <div className='flex flex-col w-full'>
                    <p className="w-max bg-sky-200 px-2 rounded-full text-xs text-sky-700">{purchase.date}</p>
                    <p className="py-1 pl-1">{purchase.category}</p>
                    <p className="text-sm pl-1 pr-2 text-gray-600">{purchase.comment}</p>
                </div>
                <p className="w-1/3 text-end purchase-price">{purchase.price}</p>
            </div>
            <div className="relative">
            <DeleteModal deletePurchase={deletePurchase} isOpen={isOpen} setIsOpen={setIsOpen} purchase={purchase}/>
            <button onClick={() => setIsOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-7 h-7 text-pink-400 hover:scale-110">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            </div>
            <div className={ isOpen ? "fixed top-0 right-0 left-0 bottom-0 bg-gray-600 opacity-30 z-20" : "hidden"}></div>
        </div>
    )
}

export default Purchase