import { useState, useEffect } from "react"
import Form from "components/Form"
import ElementCard from "components/ElementCard"
import Months from "components/Months"
import Statistics from "components/Statistics"
import DeleteModal from "../DeleteModal"

const Expenses = () => {
    let [purchases, setPurchases] = useState(
        localStorage.getItem("purchases")
            ? JSON.parse(localStorage.getItem("purchases") || "")
            : []
    )

    const [filteredPurchase, setFilteredPurchase] = useState(purchases)
    const options = ["Еда", "Здоровье", "Жилье", "Транспорт", "Досуг", "Прочее"]

    useEffect(() => {
        localStorage.setItem("purchases", JSON.stringify(purchases))
    }, [purchases])

    useEffect(() => {
        setFilteredPurchase(purchases)
    }, [purchases])

    return (
        <div>
            <h1 className="title">Учет расходов</h1>
            <Form
                func={setPurchases}
                data={purchases}
                options={options}
            />
            <Statistics
                title="Статистика расходов"
                copyData={filteredPurchase}
                options={options}
            />
            <div className="flex flex-col py-10">
                <Months
                    data={purchases}
                    func={setFilteredPurchase}
                />
                <DeleteModal data={purchases} func={setPurchases} />
                {filteredPurchase.length === 0 && (
                    <div className="text-center font-semibold text-xl pt-16 pb-4">
                        Нет внесенных расходов
                    </div>
                )}
                {filteredPurchase.length > 0 &&
                    filteredPurchase.map((purchase: any) => (
                        <ElementCard
                            dataElem={purchase}
                            key={purchase.id}
                            data={purchases}
                            func={setPurchases}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Expenses
