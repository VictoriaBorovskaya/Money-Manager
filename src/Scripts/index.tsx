import { PurchaseType } from "components/Form"

// для переключения между состояниями isChecked (DeleteModal)
export const changeState = (
    func: (array: PurchaseType[]) => void,
    array: PurchaseType[]
) => {
    func(
        array.map((purchase: PurchaseType) => {
            if (purchase.isChecked === true) {
                return { ...purchase, isChecked: !purchase.isChecked }
            } else {
                return purchase
            }
        })
    )
}

// для корректного отображения окончаний в зависимости от количества
export function resolvePluralForm(count: number) {
    const lastNumber = count % 10
    const lastNumbers = count % 100

    if (lastNumber === 1 && lastNumbers !== 11) return "one"
    if (
        lastNumber > 1 &&
        lastNumbers < 5 &&
        (lastNumbers < 10 || lastNumbers > 20)
    ) {
        return "few"
    }
    return "many"
}

// месяца для фильтрации
export const months = [
    "За все время",
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
]

// цвета для статистики
export const COLORS = [
    "#7dd3fc",
    "#fed7aa",
    "#86efac",
    "#d1d5db",
    "#c4b5fd",
    "#fef08a",
    "#f9a8d4"
]
export const colorsForClassName = [
    "bg-sky-300",
    "bg-orange-200",
    "bg-green-300",
    "bg-gray-300",
    "bg-violet-300",
    "bg-yellow-200",
    "bg-pink-300"
]

// функция для вычиления итоговой суммы доходов/расходов(Statistic/HomePage)
export const getAmount = (data: PurchaseType[]) => {
    const allCategoryArr = data.map((elem: PurchaseType) =>
        elem.price.split(".")
    )
    const AllCategoriesPriceArr = allCategoryArr.map((elem) =>
        // @ts-ignore
        Number(elem[0].match(/\S/g).join(""))
    )
    return (
        AllCategoriesPriceArr.reduce(
            (a: number, b: number) => a + b,
            0
        ).toLocaleString("ru-RU") + ".00 ₽"
    )
}
