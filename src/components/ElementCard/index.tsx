import cn from "classnames"
import { PurchaseType } from "../Form"
import "./ElementCard.css"

type Props = {
    data: PurchaseType[]
    dataElem: PurchaseType
    func: (data: PurchaseType[]) => void
}

const ElementCard = ({ data, dataElem, func }: Props) => {
    const handleChange = (id: string) => {
        func(
            data.map((elem) => {
                if (elem.id === id) {
                    return { ...elem, isChecked: !elem.isChecked }
                }
                return elem
            })
        )
    }

    return (
        <div>
            <div
                className={cn("card", {
                    "bg-gray-200": dataElem.isChecked === true,
                    "bg-transparent": dataElem.isChecked === false
                })}
            >
                <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col w-full text-neutral-800">
                        <p className="w-max bg-sky-200 px-2 rounded-full text-xs">
                            {dataElem.date}
                        </p>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2 cursor-pointer"
                                checked={dataElem.isChecked}
                                onChange={() => handleChange(dataElem.id)}
                            ></input>
                            <p className="py-1 pl-1">{dataElem.category}</p>
                        </div>
                        <p className="text-sm pl-1 pr-2 text-gray-600">
                            {dataElem.comment}
                        </p>
                    </div>
                    <p className="w-1/3 text-end purchase-price">
                        {dataElem.price}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ElementCard
