import { useState, FormEvent, useEffect } from "react"
import { getMonth } from "date-fns"
import { PurchaseType } from "../Form"

type Props = {
    purchases: PurchaseType[];
    setFilteredPurchase: (filteredPurchase: PurchaseType[]) => void;
}

const Months = ({ purchases, setFilteredPurchase }: Props) => {
    const months = [
        "За все время",
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
    ]
    const indexDate = getMonth(new Date()) + 1
    const currentMonth = months[indexDate]
    const [defaultMonth, setDefaultMonth] = useState(months[indexDate])

    const filter = (event: FormEvent) => {
        event.preventDefault()
        if (defaultMonth === "За все время") {
            setFilteredPurchase(purchases)
        } else {
            const filterArr = purchases.filter(
                (purchase) =>
                    purchase.date.replace(/\d/g, "").slice(1, 4) ===
                    defaultMonth.toLowerCase().slice(0, 3)
            )
            setFilteredPurchase(filterArr)
        }
    }

    useEffect(() => {
        setDefaultMonth(currentMonth)
    }, [purchases, currentMonth])

    return (
        <form
            onSubmit={(event) => filter(event)}
            className="pb-3 pt-5 flex flex-col items-end gap-2 text-neutral-800">
            <select
                onChange={(event) => setDefaultMonth(event.target.value)}
                value={defaultMonth}
                name="months"
                className="h-8 w-2/5 text-lg border border-gray-400 shadow rounded-md outline-none px-2 focus:border-sky-400 focus:border-2 select-month">
                {months.map((month) => {
                    return <option key={month}>{month}</option>
                })}
            </select>
            <button type="submit" className="h-9 w-2/5 border-2 border-gray-800 bg-sky-300 rounded-md text-lg font-medium text-neutral-800 hover:bg-gray-100 hover:text-sky-500 hover:border-sky-500 duration-300 select-month">Поиск</button>
        </form>
    )
}

export default Months
