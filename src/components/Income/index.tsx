import { useState, useEffect } from "react"
import Form from "components/Form"
import Months from "components/Months"
import Statistics from "components/Statistics"
import ElementCard from "components/ElementCard"
import DeleteModal from "components/DeleteModal"
import { months } from "Scripts"
import { getMonth } from "date-fns"

const Income = () => {
    let [income, setIncome] = useState(
        localStorage.getItem("income")
            ? JSON.parse(localStorage.getItem("income") || "")
            : []
    )

    const [filteredIncome, setFilteredIncome] = useState(income)
    const options = [
        "Зарплата",
        "Премия",
        "Инвестиции",
        "Переводы",
        "Внесение наличных",
        "Прочее"
    ]

    const indexDate = getMonth(new Date()) + 1
    const currentMonth = months[indexDate]
    const [defaultMonth, setDefaultMonth] = useState(currentMonth)

    useEffect(() => {
        setDefaultMonth(currentMonth)
    }, [income, currentMonth])

    useEffect(() => {
        localStorage.setItem("income", JSON.stringify(income))
    }, [income])

    useEffect(() => {
        setFilteredIncome(income)
    }, [income])

    return (
        <div>
            <h1 className="title">Учет доходов</h1>
            <Form func={setIncome} data={income} options={options} />
            <Statistics
                title="Статистика доходов"
                copyData={filteredIncome}
                options={options}
            />
            <div className="flex flex-col py-10">
                <Months
                    data={income}
                    func={setFilteredIncome}
                    defaultMonth={defaultMonth}
                    setDefaultMonth={setDefaultMonth}
                />
                <DeleteModal
                    data={income}
                    func={setIncome}
                    defaultMonth={defaultMonth}
                />
                {filteredIncome.length === 0 && (
                    <div className="text-center font-semibold text-xl pt-16 pb-4">
                        Нет внесенных доходов
                    </div>
                )}
                {filteredIncome.length > 0 && (
                    <div className="rounded-t-md overflow-hidden">
                        {filteredIncome.map((item: any) => (
                            <ElementCard
                                dataElem={item}
                                key={item.id}
                                data={income}
                                func={setIncome}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Income
