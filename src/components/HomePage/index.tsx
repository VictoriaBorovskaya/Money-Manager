import cn from "classnames"
import HomeStatistic from "components/HomeStatistic"
import { getAmount } from "Scripts"
import { PurchaseType } from "components/Form"
import { useState, FormEvent } from "react"
import "./HomePage.css"

const HomePage = () => {
    const image = require(".//transfer-money.png")
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isActive, setIsActive] = useState<boolean>(false)

    let copyIncome: PurchaseType[] = localStorage.getItem("income")
        ? JSON.parse(localStorage.getItem("income") || "")
        : []

    let copyPurchases: PurchaseType[] = localStorage.getItem("purchases")
        ? JSON.parse(localStorage.getItem("purchases") || "")
        : []

    const [budget, setBudget] = useState<string>(
        localStorage.getItem("budget")
            ? JSON.parse(localStorage.getItem("budget") || "00.00 ₽")
            : "00.00 ₽"
    )

    const budgetValue =
        new Intl.NumberFormat("ru-RU").format(Math.abs(Math.round(+budget))) +
        ".00 ₽"

    const handleClick = (event: FormEvent) => {
        event.preventDefault()
        localStorage.setItem("budget", JSON.stringify(budget))
        setIsActive(false)
    }

    const openInput = () => {
        setIsOpen(false)
        setIsActive(true)
    }

    const openInfo = () => {
        setIsActive(false)
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
            setBudget(
                // @ts-ignore
                Number(
                    // @ts-ignore
                    getAmount(copyIncome).split(".")[0].match(/\S/g).join("")
                )
            )
            localStorage.setItem("budget", JSON.stringify(budget))
        }
    }

    return (
        <div>
            <div className="title">Главная страница</div>
            <div className="grid grid-cols-3 justify-items-center items-center gap-4 text-center statistic-info py-5">
                <p className="text-lg">
                    Всего поступлений в текущем месяце -{" "}
                    <span className="font-medium">{getAmount(copyIncome)}</span>
                </p>
                <img src={image} alt="" className="w-16 h-16 home-icon" />
                <p className="text-lg">
                    Всего списаний в текущем месяцe -{" "}
                    <span className="font-medium">
                        {getAmount(copyPurchases)}
                    </span>
                </p>
            </div>
            <div className="flex flex-col py-12">
                <div className="flex justify-between items-center gap-3 budget-container">
                    <p className="text-lg font-medium">
                        Хотите установить бюджет на текущий месяц?
                    </p>
                    <div className="flex gap-5 button-container">
                        <button
                            onClick={openInput}
                            className="home-page-button h-9"
                        >
                            Да
                        </button>
                        <button
                            onClick={openInfo}
                            className="home-page-button h-9"
                        >
                            Нет
                        </button>
                    </div>
                </div>
                <div
                    className={cn("budget-container", {
                        hidden: !isOpen,
                        "flex justify-center items-center pt-8": isOpen
                    })}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                    </svg>
                    <p>Бюджет будет установлен исходя из Ваших доходов</p>
                </div>
                <form
                    onSubmit={(event) => handleClick(event)}
                    className={cn("input-container", {
                        hidden: !isActive,
                        "pt-8 flex items-center justify-between gap-6": isActive
                    })}
                >
                    <input
                        onChange={(event) => setBudget(event.target.value)}
                        value={budget}
                        name="budget"
                        pattern="^[ 0-9]+$"
                        type="number"
                        placeholder={getAmount(copyIncome)}
                        className="w-1/2 input border border-gray-400 shadow rounded-md outline-none px-2 h-8 focus:border-sky-400 focus:border-2"
                    ></input>
                    <button
                        type="submit"
                        className="w-1/2 h-8 home-page-button"
                        id="input-button"
                    >
                        Сохранить
                    </button>
                </form>
            </div>
            <div className="h-96 my-5">
                <HomeStatistic
                    budget={budget}
                    copyIncome={copyIncome}
                    copyPurchases={copyPurchases}
                    budgetValue={budgetValue}
                />
            </div>
        </div>
    )
}

export default HomePage
