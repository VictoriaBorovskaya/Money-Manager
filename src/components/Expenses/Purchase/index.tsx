import { PurchaseType } from "../Form"

type Props = {
    purchases: PurchaseType[],
    purchase: PurchaseType,
    setPurchases: (purchases: PurchaseType[]) => void,
    setIsOpen: (isOpen: boolean) => void
}

const Purchase = ({ purchases, purchase, setPurchases, setIsOpen }: Props) => {

    const handleChange = (id: string) => {
        setPurchases(
            purchases.map((purchase) => {
                if (purchase.id === id) {
                    return { ...purchase, isChecked: !purchase.isChecked }
                }
                return purchase
            })
        )
    }

    return (
        <div>
            <div
                className={purchase.isChecked === false ? "flex items-center py-3 border-b-2 border-b-gray-600 px-2" : "flex items-center py-3 border-b-2 border-b-gray-600 px-2 bg-gray-200"}
                onClick={(e) => e.target && setIsOpen(false)}
            >
                <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col w-full text-neutral-800">
                        <p className="w-max bg-sky-200 px-2 rounded-full text-xs">
                            {purchase.date}
                        </p>
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2 cursor-pointer" checked={purchase.isChecked} onChange={() => handleChange(purchase.id)}></input>
                            <p className="py-1 pl-1">{purchase.category}</p>
                        </div>
                        <p className="text-sm pl-1 pr-2 text-gray-600">
                            {purchase.comment}
                        </p>
                    </div>
                    <p className="w-1/3 text-end purchase-price">
                        {purchase.price}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Purchase
