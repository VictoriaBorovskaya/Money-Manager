const Purchase = ({purchases, purchase}) => {

    return(
        <div className='flex py-3 border-b-2 border-b-gray-300'>
            <div className='flex justify-between items-center w-full pr-10'>
                <div className='flex flex-col w-full'>
                    <p className="w-max bg-sky-200 px-2 rounded-full text-xs text-sky-700">{purchase.date}</p>
                    <p className="py-1 pl-1">{purchase.category}</p>
                    <p className="text-sm w-max max-w-3/5 pl-1 text-gray-600">{purchase.comment}</p>
                  </div>
                  <p className="w-1/3 text-end">{purchase.price}</p>
                </div>
            <button onClick={() => console.log(purchase.id)} className='rotate-90 text-2xl font-extrabold text-gray-500'>...</button>
        </div>
    )



}

export default Purchase