import { FormEvent } from "react"
import { PurchaseType } from "../Form"
import "./Months.css"
import { months } from "Scripts"

type Props = {
    data: PurchaseType[]
    func: (data: PurchaseType[]) => void
    defaultMonth: string
    setDefaultMonth: (defaultMonth: string) => void
}

const Months = ({ data, func, defaultMonth, setDefaultMonth }: Props) => {
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

    return (
        <form
            onSubmit={(event) => filter(event)}
            className="pb-3 pt-5 flex flex-col items-end gap-2 text-neutral-800"
        >
            <select
                onChange={(event) => setDefaultMonth(event.target.value)}
                value={defaultMonth}
                name="months"
                className="months-select focus:border-sky-400 focus:border-2 select-month"
            >
                {months.map((month) => {
                    return <option key={month}>{month}</option>
                })}
            </select>
            <button type="submit" className="months-button select-month">
                Поиск
            </button>
        </form>
    )
}

export default Months
