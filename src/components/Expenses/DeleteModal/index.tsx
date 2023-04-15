import { PurchaseType } from "../Form"
import { useState, useEffect } from "react"

type Props = {
    purchases: PurchaseType[];
    setPurchases: (purchases: PurchaseType[]) => void,
}

const DeleteModal = ({ purchases, setPurchases }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const filteredPurchaseCount = purchases.filter(
        (purchase: PurchaseType) => purchase.isChecked === true
    ).length

    // для корректного отображения окончаний в зависимости от количества
    function resolvePluralForm(count: number) {
        const lastNumber = count % 10
        const lastNumbers = count % 100

        if (lastNumber === 1 && lastNumbers !== 11) return "one"
        if (lastNumber > 1 && lastNumbers < 5 && (lastNumbers < 10 || lastNumbers > 20)) {
            return "few"
        }
        return "many"
    }

    let form = resolvePluralForm(filteredPurchaseCount)

    // функции удаления, отмены выделения выбранных элементов и закрытия модального окна
    const deletePurchase = () => {
        const filteredArr = purchases.filter(
            (purchase: PurchaseType) => purchase.isChecked === false
        )
        setPurchases(filteredArr)
        setIsOpen(false)
    }

    const undoDeletion = () => {
        setPurchases(
            purchases.map((purchase) => {
                if (purchase.isChecked === true) {
                    return { ...purchase, isChecked: !purchase.isChecked }
                } else {
                    return purchase
                }
            }
            )
        )
        setIsOpen(false)
    }

    window.onload = function () {
        undoDeletion()
    }

    useEffect(() => {
        if (filteredPurchaseCount > 0) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [setIsOpen, filteredPurchaseCount])

    return (
        <div className={!isOpen ? "hidden" : "bg-sky-300 flex justify-between items-center py-2 px-2 rounded-md shadow my-5 modal"}>
            <p className="font-semibold">{form === "one" ? `Выбран ${filteredPurchaseCount} элемент` : form === "few" ? `Выбранo ${filteredPurchaseCount} элемента` : `Выбранo ${filteredPurchaseCount} элементов`}</p>
            <div className="flex gap-2 modal-button-container">
                <button className="border-2 border-neutral-800 rounded-md px-5 py-1 font-medium hover:bg-neutral-800 hover:text-sky-300 duration-300 link modal-button" onClick={deletePurchase}>Удалить</button>
                <button className="border-2 border-neutral-800 rounded-md px-6 py-1 font-medium hover:bg-neutral-800 hover:text-sky-300 duration-300 link modal-button" onClick={undoDeletion}>Отмена</button>
            </div>
        </div>
    )
}

export default DeleteModal
