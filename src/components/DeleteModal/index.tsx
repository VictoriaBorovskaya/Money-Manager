import { PurchaseType } from "../Form"
import { useState, useEffect } from "react"
import { changeState } from "components/Scripts"
import { resolvePluralForm } from "components/Scripts"
import "./DeleteModal.css"

type Props = {
    data: PurchaseType[];
    func: (data: PurchaseType[]) => void,
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

    // const selectAllElement = () => {
    //     func(
    //         data.map((elem) => {
    //             if (elem.date.replace(/\d/g, "").slice(1, 4) ===
    //                 defaultMonth.toLowerCase().slice(0, 3))
    //                 return { ...elem, isChecked: true }
    //             else {
    //                 return { ...elem, isChecked: false }
    //             }
    //         })
    //     )
    // }

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
        <div className={!isOpen ? "hidden" : "bg-sky-300 flex justify-between items-center py-2 px-2 rounded-md shadow my-5 modal"}>
            <p className="font-semibold modal-text">{form === "one" ?
                `Выбран ${filteredDataCount} элемент`
                : form === "few" ? `Выбранo ${filteredDataCount} элемента`
                    : `Выбранo ${filteredDataCount} элементов`}</p>
            <div className="flex gap-2 modal-button-container">
                <button
                    onClick={() => selectAllElement()}
                    className="border-2 border-neutral-800 rounded-md px-3 py-0.5 font-medium hover:bg-neutral-800 hover:text-sky-300 duration-300 link modal-button"
                >
                    Выбрать все
                </button>
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
        </div >
    )
}

export default DeleteModal
