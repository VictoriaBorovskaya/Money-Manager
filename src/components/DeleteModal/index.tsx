import { PurchaseType } from "../Form"
import { useState, useEffect } from "react"
import { changeState } from "components/Scripts"
import { resolvePluralForm } from "components/Scripts"
import "./DeleteModal.css"

type Props = {
    data: PurchaseType[];
    func: (data: PurchaseType[]) => void,
}

const DeleteModal = ({ data, func }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const filteredDataCount = data.filter(
        (elem: PurchaseType) => elem.isChecked === true
    ).length

    let form = resolvePluralForm(filteredDataCount)

    const deleteElement = () => {
        const filteredArr = data.filter(
            (elem: PurchaseType) => elem.isChecked === false
        )
        func(filteredArr)
        setIsOpen(false)
    }

    const undoDeletion = () => {
        changeState(func, data)
        setIsOpen(false)
    }

    window.onload = function () {
        undoDeletion()
    }

    useEffect(() => {
        if (filteredDataCount > 0) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [setIsOpen, filteredDataCount])

    return (
        <div className={!isOpen ? "hidden" : "bg-sky-300 flex justify-between items-center py-2 px-2 rounded-md shadow my-5 modal"}>
            <p className="font-semibold">{form === "one" ?
                `Выбран ${filteredDataCount} элемент`
                : form === "few" ? `Выбранo ${filteredDataCount} элемента`
                    : `Выбранo ${filteredDataCount} элементов`}</p>
            <div className="flex gap-2 modal-button-container">
                <button
                    className="border-2 border-neutral-800 rounded-md px-5 py-1 font-medium hover:bg-neutral-800 hover:text-sky-300 duration-300 link modal-button"
                    onClick={deleteElement}>
                    Удалить
                </button>
                <button
                    className="border-2 border-neutral-800 rounded-md px-5 py-1 font-medium hover:bg-neutral-800 hover:text-sky-300 duration-300 link modal-button"
                    onClick={undoDeletion}>
                    Отмена
                </button>
            </div>
        </div>
    )
}

export default DeleteModal
