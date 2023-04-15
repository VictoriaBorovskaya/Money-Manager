import { useState, useEffect } from "react"
import Form from "components/Expenses/Form"
import Purchase from "components/Expenses/Purchase"
import Months from "components/Expenses/Months"
import Statistics from "components/Expenses/Statistics"
import DeleteModal from "./DeleteModal"

const Expenses = () => {
    let [purchases, setPurchases] = useState(
        localStorage.getItem("purchases")
            ? JSON.parse(localStorage.getItem("purchases") || "")
            : []
    )

    const [filteredPurchase, setFilteredPurchase] = useState(purchases)
    const options = ["Еда", "Здоровье", "Жилье", "Транспорт", "Досуг", "Прочее"]
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        localStorage.setItem("purchases", JSON.stringify(purchases))
    }, [purchases])

    useEffect(() => {
        setFilteredPurchase(purchases)
    }, [purchases])

    return (
        <div>
            <h1 className="text-center font-bold text-2xl text-gray-800 pb-10 min-h-full">Учет расходов</h1>
            <Form
                setPurchases={setPurchases}
                purchases={purchases}
                options={options}
            />
            <Statistics
                filteredPurchase={filteredPurchase}
                options={options}
                setIsOpen={setIsOpen}
            />
            <div className="flex flex-col py-10">
                <Months
                    purchases={purchases}
                    setFilteredPurchase={setFilteredPurchase}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
                <DeleteModal purchases={purchases} setPurchases={setPurchases} />
                {filteredPurchase.length === 0 && (
                    <div className="text-center font-semibold text-xl pt-16 pb-4">
                        Нет внесенных расходов
                    </div>
                )}
                {filteredPurchase.length > 0 &&
                    filteredPurchase.map((purchase: any) => (
                        <Purchase
                            purchase={purchase}
                            key={purchase.id}
                            purchases={purchases}
                            setPurchases={setPurchases}
                            setIsOpen={setIsOpen}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Expenses
