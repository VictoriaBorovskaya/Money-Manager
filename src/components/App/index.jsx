import { useState } from 'react'; 
import './App.css';
import Form from 'components/Form';
import Purchase from 'components/Purchase';



function App() {
  let [purchases, setPurchases] = useState(localStorage.getItem('purchase') ? JSON.parse(localStorage.getItem('purchase')) : [])

  const saveToLocalStorage = (newPurchase) => {
    setPurchases(newPurchase)
    localStorage.setItem('purchase', JSON.stringify(newPurchase))
  }

  const addPurchase = (newPurchase) => {
    const purchaseJson = localStorage.getItem('purchase')
    JSON.parse(purchaseJson)
    saveToLocalStorage([...purchases, newPurchase])
  }

  return (
   <div>
      <div className='max-w-2xl m-auto bg-gray-50 min-h-screen shadow-md px-10'>
          <h1 className='text-3xl text-center font-bold pt-16 pb-10'>Учет расходов</h1>
          <Form addPurchase={addPurchase} purchases={purchases}/>
          <div className='flex flex-col pt-24'>
            {purchases.length > 0 && purchases.map((purchase) => 
              <Purchase purchases={purchases} purchase={purchase} key={purchase.id} />
            )}
          </div>
      </div>
   </div>
  )
}

export default App;
