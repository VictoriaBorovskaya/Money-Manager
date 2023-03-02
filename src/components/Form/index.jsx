import { useState } from "react"

const Form = ({addPurchase, purchases}) => {
    const options = ['Еда', 'Здоровье', 'Одежда', 'Жилье', 'Образование', 'Путешествия', 'Развлечения', 'Транспорт', 'Прочее']
    const date = new Date().toLocaleString('ru', {day: 'numeric', month: 'long', year: 'numeric'}).slice(0, -3)

    const [price, setPrice] = useState('')
    const [category, setCategory] = useState(options[0])
    const [comment, setComment] = useState('')

    const handleClick = (event) => {
        event.preventDefault()
        let maxId = purchases.reduce((max, purchase) => purchase.id > max ? purchase.id : max, 0) 
        let purchaseId = maxId + 1
        const purchase = {
            id: purchaseId,
            date,
            price: (+price).toFixed(2).toLocaleString('ru-RU') + ' ₽',
            category,
            comment
        }
        console.log(purchase)
        addPurchase(purchase)
        setPrice('')
        setCategory(options[0])
        setComment('')
    }

    return(
        <form onSubmit={(event) => handleClick(event)} className='flex flex-col gap-5'>
            <div className='flex gap-5'>
                <input 
                    onChange={(event) => setPrice(event.target.value)}
                    value={price}
                    name="price"
                    type='number'
                    required
                    className='h-8 w-1/2 border border-gray-300 shadow rounded-md outline-none px-2 focus:border-sky-500 focus:border-2' 
                    placeholder='00.00₽'>
                </input>
                <select
                    onChange={(event) => setCategory(event.target.value)} 
                    value={category}
                    name="category"
                    className='h-8 text-lg w-1/2 border border-gray-300 shadow rounded-md outline-none px-2 focus:border-sky-500 focus:border-2'>
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
                className='h-8 m-auto w-1/2 border border-gray-300 bg-sky-500 rounded-md shadow text-lg font-medium text-gray-50'>
                    Добавить
            </button>
          </form>
    )
}

export default Form