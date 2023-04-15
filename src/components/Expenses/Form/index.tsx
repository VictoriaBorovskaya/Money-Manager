import { useState, FormEvent } from "react"
import { format } from "date-fns"
import { ru } from "date-fns/locale"
import { v4 as uuidv4 } from 'uuid';


export type PurchaseType = {
    id: string;
    date: string;
    price: string;
    category: string;
    comment: string;
    isChecked: boolean;
}

type Props = {
    setPurchases: (purchases: PurchaseType[]) => void,
    purchases: PurchaseType[],
    options: string[]
}

const Form = ({ setPurchases, purchases, options }: Props) => {
    const date = format(new Date(), "dd MMMM yyyy", { locale: ru })

    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("Еда")
    const [comment, setComment] = useState("")

    const handleClick = (event: FormEvent) => {
        event.preventDefault()
        const purchase = {
            id: uuidv4(),
            date,
            price:
                new Intl.NumberFormat("ru-RU")
                    .format(Math.abs(Math.round(+price))) + ".00 ₽",
            category,
            comment,
            isChecked: false
        }
        addPurchase(purchase)
        setPrice("")
        setCategory(options[0])
        setComment("")

    }

    const addPurchase = (newPurchase: PurchaseType) => {
        setPurchases([newPurchase, ...purchases])
    }

    return (
        <form
            onSubmit={(event) => handleClick(event)}
            className="flex flex-col gap-5 input-container"
        >
            <div className="flex gap-5 input-container">
                <input
                    onChange={(event) => setPrice(event.target.value)}
                    value={price}
                    name="price"
                    pattern="^[ 0-9]+$"
                    type="number"
                    required
                    className="h-8 w-1/2 border border-gray-400 shadow rounded-md outline-none px-2 focus:border-sky-400 focus:border-2 input"
                    placeholder="00.00 ₽"
                ></input>
                <select
                    onChange={(event) => setCategory(event.target.value)}
                    value={category}
                    name="category"
                    className="h-8 w-1/2 text-lg border border-gray-400 shadow rounded-md outline-none px-2 focus:border-sky-400 focus:border-2 input"
                >
                    {options.map((option) => {
                        return <option key={option}>{option}</option>
                    })}
                </select>
            </div>
            <textarea
                onChange={(event) => setComment(event.target.value)}
                value={comment}
                name="comment"
                className="h-12 border border-gray-400 shadow rounded-md outline-none px-2 focus:border-sky-400 focus:border-2"
                placeholder="Комментарий"
            ></textarea>
            <button
                type="submit"
                className="h-9 m-auto w-1/2 border-2 border-gray-800 bg-sky-300 rounded-md text-lg font-medium text-neutral-800 hover:bg-gray-100 hover:text-sky-500 hover:border-sky-500 duration-300 input"
            >
                Добавить
            </button>
        </form>
    )
}

export default Form
