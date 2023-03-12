const Diagram = ({filteredPurchase, options}) => {

    const filterCategories = (option) => {
        const categoryArr = filteredPurchase.filter(purchase => purchase.category === option)
        const categoriesPriceArr =  categoryArr.map((c) => (c.price).split('.'))
        let result = categoriesPriceArr.map(c => (Number((c[0]).match(/\S/g).join(''))))
        return (result.reduce((a, b) => a + b, 0)).toLocaleString('ru-RU') + ".00 ₽"
    }

    const allCategories = () => {
        const allCategoryArr = filteredPurchase.map(p => (p.price).split('.'))
        const AllCategoriesPriceArr = allCategoryArr.map(c => Number((c[0]).match(/\S/g).join('')))
        return AllCategoriesPriceArr.reduce((a, b) => a + b, 0).toLocaleString('ru-RU') + ".00 ₽"
    }

    return(
        <div className="pt-8 flex justify-end">
            <ul>
            {options.map(option => {
                return(
                    <li key={option}>{option} - {filterCategories(option)}</li>
                )
            })}
            <li>Итого - {allCategories()}</li>
            </ul>
        </div>
    )
}

export default Diagram