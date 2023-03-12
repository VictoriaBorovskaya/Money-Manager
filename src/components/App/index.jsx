import { useState, useEffect } from 'react'; 
import './App.css';
import Form from 'components/Form';
import Purchase from 'components/Purchase';
import Months from 'components/Months';
import Diagram from 'components/Diagram';

function App() {
  let [purchases, setPurchases] = useState(localStorage.getItem('purchases') ? JSON.parse(localStorage.getItem('purchases')) : [])
  const [filteredPurchase, setFilteredPurchase] = useState(purchases)
  const options = ['Еда', 'Здоровье', 'Одежда', 'Oбразование', 'Жилье', 'Путешествия', 'Развлечения', 'Транспорт', 'Прочее']

  useEffect(() => {
    localStorage.setItem('purchases', JSON.stringify(purchases))
  }, [purchases])

  useEffect(() => {
    setFilteredPurchase(purchases)
  }, [purchases])

  return (
    <div className='max-w-2xl m-auto bg-gray-50 min-h-screen shadow-md px-10 py-16'>
      <h1 className='text-3xl text-center font-bold pb-10'>Учет расходов</h1>
      <Form setPurchases={setPurchases} purchases={purchases} options={options}/>
      <Diagram filteredPurchase={filteredPurchase} options={options}/>
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

export default App;
