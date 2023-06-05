import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer
} from "recharts"
import { PurchaseType } from "components/Form"
import { getAmount } from "Scripts"

type Props = {
    copyPurchases: PurchaseType[]
    copyIncome: PurchaseType[]
    budget: string
    budgetValue: string
}

const HomeStatistic = ({
    copyPurchases,
    copyIncome,
    budget,
    budgetValue
}: Props) => {
    let budgetValueArr =
        budget.length > 0
            ? budgetValue.split(".")
            : getAmount(copyIncome).split(".")
    let profitArr = getAmount(copyIncome).split(".")
    let expensesArr = getAmount(copyPurchases).split(".")
    // @ts-ignore
    let profit = Number(profitArr[0].match(/\S/g).join(""))
    // @ts-ignore
    let expenses = Number(expensesArr[0].match(/\S/g).join(""))
    let budgetInput =
        budget.length > 0
            ? // @ts-ignore
              Number(budgetValueArr[0].match(/\S/g).join(""))
            : // @ts-ignore
              Number(getAmount(copyIncome).split(".")[0].match(/\S/g).join(""))
    let balance = budget.length > 0 ? budgetInput - expenses : profit - expenses

    const data = [
        {
            name: "Бюджет",
            Сумма: budgetInput
        },
        {
            name: "Доходы",
            Сумма: profit
        },
        {
            name: "Расходы",
            Сумма: expenses
        },
        {
            name: "Остаток",
            Сумма: balance
        }
    ]

    return (
        <div className="h-full overglow-x-scroll">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    stackOffset="sign"
                    margin={{
                        top: 5,
                        right: 10,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="Сумма" fill="#7dd3fc" stackId="stack" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default HomeStatistic
