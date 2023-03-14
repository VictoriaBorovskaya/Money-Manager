import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { format } from "date-fns"
import { ru } from "date-fns/locale"


const Form = ({setPurchases, purchases, options}) => {
    const date = format(new Date(), "dd MMMM yyyy", {locale: ru})

    const [price, setPrice] = useState('')
    const [category, setCategory] = useState(options[0])
    const [comment, setComment] = useState('')
    
    const handleClick = (event) => {
        event.preventDefault()
        const purchase = {
            id: uuidv4(),
            date,
            price: new Intl.NumberFormat('ru-RU').format(price) + '.00 ₽',
            category,
            comment
        }
        addPurchase(purchase)
        setPrice('')
        setCategory(options[0])
        setComment('')
    }

    const addPurchase = (newPurchase) => {
        setPurchases([newPurchase, ...purchases])
    }

    return(
        <form onSubmit={(event) => handleClick(event)} className='flex flex-col gap-5 input-container'>
            <div className='flex gap-5 input-container'>
                <input 
                    onChange={(event) => setPrice(event.target.value)}
                    value={price}
                    name="price"
                    type='number'
                    required
                    className='h-8 w-1/2 border border-gray-300 shadow rounded-md outline-none px-2 focus:border-sky-500 focus:border-2 input' 
                    placeholder='00.00 ₽'>
                </input>
                <select
                    onChange={(event) => setCategory(event.target.value)} 
                    value={category}
                    name="category"
                    className='h-8 text-lg w-1/2 border border-gray-300 shadow rounded-md outline-none px-2 focus:border-sky-500 focus:border-2 input'>
                    {options.map(option => {
                        return (
                        <option key={option}>{option}</option>
                        )
                    })}
                </select>
            </div>
            <textarea 
                onChange={(event) => setComment(event.target.value)}
                value={comment}
                name="comment"
                className='h-12 border border-gray-300 shadow rounded-md outline-none px-2 focus:border-sky-500 focus:border-2' 
                placeholder='Комментарий'>
            </textarea>
            <button 
                type='submit'
                className='h-8 m-auto w-1/2 border-2 border-gray-50 bg-sky-500 rounded-md text-lg font-medium text-gray-50 hover:bg-gray-50 hover:text-sky-500 hover:border-sky-500 duration-300 input'>
                    Добавить
            </button>
          </form>
    )
}

export default Form