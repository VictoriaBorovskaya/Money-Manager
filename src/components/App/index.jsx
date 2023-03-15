import './App.css';
import Expenses from 'components/Expenses';


function App() {

  return (
    <div className='max-w-2xl m-auto bg-gray-50 min-h-screen shadow-md px-10 py-16 primary-container'>
      <h1 className='text-3xl text-center font-bold pb-10'>Учет расходов</h1>
      <Expenses />
    </div>
  )
}

export default App;
