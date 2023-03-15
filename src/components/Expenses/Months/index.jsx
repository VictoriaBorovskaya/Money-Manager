import { useState } from "react"
import { getMonth } from 'date-fns'

const Months = ({purchases, setFilteredPurchase, isOpen, setIsOpen}) => {
    const months = ['За все время', "Январь", 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    const indexDate = getMonth(new Date()) + 1
    const [defaultMonth, setDefaultMonth] = useState(months[indexDate])
    
    const openMenu = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    const filter = (months, index) => {
        if(months[index] === 'За все время') {
            setFilteredPurchase(purchases)
            setDefaultMonth(months[index])
            setIsOpen(false)
        } else {
            const filterArr = purchases.filter(purchase => (purchase.date).replace(/\d/g, "").slice(1, 4) === months[index].toLowerCase().slice(0, 3))
            setFilteredPurchase(filterArr)
            setDefaultMonth(months[index])
            setIsOpen(false)
        }
    }

    return(
        <div className='pb-3 pt-5 flex justify-end relative'>
            <div className={isOpen ? "flex flex-col w-1/3 px-2 py-1 border rounded-t-md border-gray-300 border-b-white bg-white select-month" : "bg-white border border-gray-300 rounded-md shadow flex flex-col w-1/3 px-2 py-1 select-month"}>
                <div className="flex justify-between">
                    <input value={defaultMonth} disabled className="w-2/3 bg-white"/>
                    <button onClick={openMenu} id="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={isOpen ? "w-6 h-6 rotate-180 duration-500" : "w-6 h-6 rotate-0 duration-500"}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={isOpen ? "z-20 absolute top-6 right-0 bg-white w-1/3 border-x border-b border-gray-300 rounded-b-md px-2 animation select-month" : "hidden"}>
                <ul>
                    {months.map((month, index) => {
                        return(
                            <li key={month} className="hover:font-medium">
                                <div className="flex justify-between text-start">
                                    <input id={months[index]} name="month" type="radio" value={months[index]} onChange={() => filter(months, index)}/>
                                    <label htmlFor={months[index]} className="hover:font-medium">{months[index]}</label>
                                </div>
                            </li> 
                        )
                    })}
                </ul>
            </div> 
        </div>
    )
}

export default Months