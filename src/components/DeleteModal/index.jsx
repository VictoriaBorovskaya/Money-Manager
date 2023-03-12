const DeleteModal = ({isOpen, setIsOpen, deletePurchase, purchase}) => {

    return(
        <div className={isOpen ? "z-30 px-5 py-2 shadow-md rounded-md absolute -right-5 w-60 modal bg-white animation" : "hidden"}>
            <p className="text-center pb-2 text-sky-700 font-medium">Вы действительно хотите удалить данную покупку?</p>
            <div className="flex justify-between pb-2">
                <button onClick={() => deletePurchase(purchase.id)} className="bg-sky-100 border-gray-500 px-6 py-0.5 rounded-md shadow text-sky-700 font-medium hover:bg-sky-700 hover:text-white hover:duration-300">Да</button>
                <button onClick={() => setIsOpen(false)} className="bg-sky-100 border-gray-500 px-5 py-0.5 rounded-md shadow text-sky-700 font-medium hover:bg-sky-700 hover:text-white hover:duration-300">Нет</button>
            </div>
        </div>
    )
}

export default DeleteModal
