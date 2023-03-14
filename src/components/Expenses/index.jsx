import { useState, useEffect } from 'react'; 
import Form from 'components/Expenses/Form';
import Purchase from 'components/Expenses/Purchase';
import Months from 'components/Expenses/Months';
import Statistics from 'components/Expenses/Statistics';

const Expenses = () => {
    let [purchases, setPurchases] = useState(localStorage.getItem('purchases') ? JSON.parse(localStorage.getItem('purchases')) : [])
    const [filteredPurchase, setFilteredPurchase] = useState(purchases)
    const options = ['Еда', 'Здоровье', 'Жилье', 'Транспорт', 'Досуг', 'Прочее']
  
    useEffect(() => {
      localStorage.setItem('purchases', JSON.stringify(purchases))
    }, [purchases])
  
    useEffect(() => {
      setFilteredPurchase(purchases)
    }, [purchases])

    return(
        <div>
            <Form setPurchases={setPurchases} purchases={purchases} options={options}/>
            <Statistics filteredPurchase={filteredPurchase} options={options}/>
            <div className='flex flex-col py-10'>
                <Months purchases={purchases} setFilteredPurchase={setFilteredPurchase}/>
                {filteredPurchase.length === 0 && (<div className='text-center font-semibold text-xl'>Нет внесенных расходов</div>)}
                {filteredPurchase.length > 0 && filteredPurchase.map((purchase) => 
                    <Purchase purchase={purchase} key={purchase.id} purchases={purchases} setPurchases={setPurchases}/>
                )}
            </div>
        </div>
    )
}

export default Expenses