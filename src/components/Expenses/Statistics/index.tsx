import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { PurchaseType } from "../Form"

type Props = {
    filteredPurchase: PurchaseType[],
    options: string[],
    setIsOpen: (isOpen: boolean) => void
}

type renderCustomizedLabelType = {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
}

const Statistics = ({ filteredPurchase, options, setIsOpen }: Props) => {

    const filterCategories = (i: number) => {
        const categoryArr = filteredPurchase.filter(
            (purchase: PurchaseType) => purchase.category === options[i]
        )

        const categoriesPriceArr = categoryArr.map((c) => c.price.split("."))
        let result = categoriesPriceArr.map((c) =>
            // @ts-ignore
            Number(c[0].match(/\S/g).join(""))
        )
        return result.reduce((a, b) => a + b, 0)
    }

    const allCategories = () => {
        const allCategoryArr = filteredPurchase.map((p) => p.price.split("."))
        const AllCategoriesPriceArr = allCategoryArr.map((c) =>
            // @ts-ignore
            Number(c[0].match(/\S/g).join(""))
        )
        return (
            AllCategoriesPriceArr.reduce((a, b) => a + b, 0).toLocaleString(
                "ru-RU"
            ) + ".00 ₽"
        )
    }

    const data = [
        { name: options[0], value: filterCategories(0) },
        { name: options[1], value: filterCategories(1) },
        { name: options[2], value: filterCategories(2) },
        { name: options[3], value: filterCategories(3) },
        { name: options[4], value: filterCategories(4) },
        { name: options[5], value: filterCategories(5) },
        { name: options[6], value: filterCategories(6) }
    ]

    const COLORS = [
        "#7dd3fc",
        "#fed7aa",
        "#86efac",
        "#d1d5db",
        "#c4b5fd",
        "#fef08a",
        "#f9a8d4"
    ]
    const colorsForClassName = [
        "bg-sky-300",
        "bg-orange-200",
        "bg-green-300",
        "bg-gray-300",
        "bg-violet-300",
        "bg-yellow-200",
        "bg-pink-300"
    ]

    const RADIAN = Math.PI / 180
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index
    }: renderCustomizedLabelType) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5
        const x = cx + radius * Math.cos(-midAngle * RADIAN)
        const y = cy + radius * Math.sin(-midAngle * RADIAN)

        return (
            <text
                x={x}
                y={y}
                fill="gray"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
                className="opacity-0"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        )
    }

    return (
        <div className="pt-10" onClick={(e) => e.target && setIsOpen(false)}>
            <p className="text-center font-semibold text-2xl text-gray-800">
                Статистика расходов
            </p>
            <div className="flex justify-between items-center statistic">
                <div className="diagram">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={100}
                                fill="#262626"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="pt-8 flex flex-col">
                    <ul className="flex flex-col gap-3 statistic-list pb-2">
                        {options.map((option, index) => {
                            return (
                                <li
                                    className={
                                        colorsForClassName[index] +
                                        " rounded-md px-5 py-0.5 font-medium border border-gray-800"
                                    }
                                    key={option}
                                >
                                    {option} - {" "}
                                    {filterCategories(index).toLocaleString(
                                        "ru-RU"
                                    )}
                                    .00 ₽
                                </li>
                            )
                        })}
                    </ul>
                    <p className="font-medium text-center text-lg">
                        Итого - {allCategories()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Statistics
