import cn from "classnames"
import { PurchaseType } from "../Form"
import { useState, useEffect } from "react"
import { changeState } from "Scripts"
import { resolvePluralForm } from "Scripts"
import "./DeleteModal.css"

type Props = {
    data: PurchaseType[]
    func: (data: PurchaseType[]) => void
    defaultMonth: string
}

const DeleteModal = ({ data, func, defaultMonth }: Props) => {
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

    // для сброса чеков при обновлении страницы
    window.onload = () => {
        undoDeletion()
    }

    useEffect(() => {
        if (filteredDataCount > 0) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [setIsOpen, filteredDataCount])

    const selectAllElement = () => {
        const filterArr = data.filter(
            (elem) =>
                elem.date.replace(/\d/g, "").slice(1, 4) ===
                defaultMonth.toLowerCase().slice(0, 3)
        )
        func(
            filterArr.map((elem) => {
                return { ...elem, isChecked: true }
            })
        )
    }

    return (
        <div
            className={cn({
                "bg-sky-300 flex justify-between items-center py-2 px-2 rounded-md shadow my-5 modal":
                    isOpen,
                hidden: !isOpen
            })}
        >
            <p className="font-semibold modal-text">
                {form === "one"
                    ? `Выбран ${filteredDataCount} элемент`
                    : form === "few"
                    ? `Выбранo ${filteredDataCount} элемента`
                    : `Выбранo ${filteredDataCount} элементов`}
            </p>
            <div className="flex gap-2 modal-button-container">
                <button
                    onClick={() => selectAllElement()}
                    className="deletemodal-button px-3 py-0.5 link modal-button"
                >
                    Выбрать все
                </button>
                <button
                    className="deletemodal-button px-5 py-1 link modal-button"
                    onClick={deleteElement}
                >
                    Удалить
                </button>
                <button
                    className="deletemodal-button px-5 py-1 link modal-button"
                    onClick={undoDeletion}
                >
                    Отмена
                </button>
            </div>
        </div>
    )
}

export default DeleteModal
