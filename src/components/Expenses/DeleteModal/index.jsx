const DeleteModal = ({isOpen, setIsOpen, deletePurchase, purchase}) => {

    return(
        <div className={isOpen ? "z-30 w-fit px-5 py-2 shadow-md rounded-md absolute -right-5 modal bg-gray-50 animation" : "hidden"}>
            <p className="text-center text-lg pb-3 text-gray-700 font-medium leading-6">Вы действительно хотите удалить данную покупку?</p>
            <div className="flex justify-between pb-3 gap-3">
                <button onClick={() => setIsOpen(false)} className="w-1/2 bg-green-300 border-2 border-green-300 px-5 py-1 rounded-md shadow text-gray-50 font-medium hover:bg-gray-50 hover:text-gray-700 hover:duration-500">Отменить</button>
                <button onClick={() => deletePurchase(purchase.id)} className="w-1/2 bg-rose-300 border-2 border-rose-300 px-6 py-0.5 rounded-md shadow text-gray-50 font-medium hover:bg-gray-50 hover:text-gray-700 hover:duration-500">Удалить</button>
            </div>
        </div>
    )
}

export default DeleteModal
