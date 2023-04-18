import { useState, FormEvent, useEffect } from "react"
import { getMonth } from "date-fns"
import { PurchaseType } from "../Form"
import "./Months.css"
import { months } from "components/Scripts"

type Props = {
    data: PurchaseType[];
    func: (data: PurchaseType[]) => void;
}

const Months = ({ data, func }: Props) => {
    const indexDate = getMonth(new Date()) + 1
    const currentMonth = months[indexDate]
    const [defaultMonth, setDefaultMonth] = useState(months[indexDate])

    const filter = (event: FormEvent) => {
        event.preventDefault()
        if (defaultMonth === "За все время") {
            func(data)
        } else {
            const filterArr = data.filter(
                (elem) =>
                    elem.date.replace(/\d/g, "").slice(1, 4) ===
                    defaultMonth.toLowerCase().slice(0, 3)
            )
            func(filterArr)
        }
    }

    useEffect(() => {
        setDefaultMonth(currentMonth)
    }, [data, currentMonth])

    return (
        <form
            onSubmit={(event) => filter(event)}
            className="pb-3 pt-5 flex flex-col items-end gap-2 text-neutral-800">
            <select
                onChange={(event) => setDefaultMonth(event.target.value)}
                value={defaultMonth}
                name="months"
                className="months-select focus:border-sky-400 focus:border-2 select-month">
                {months.map((month) => {
                    return <option key={month}>{month}</option>
                })}
            </select>
            <button
                type="submit"
                className="months-button hover:bg-gray-100 hover:text-sky-500 hover:border-sky-500 select-month">
                Поиск
            </button>
        </form>
    )
}

export default Months
