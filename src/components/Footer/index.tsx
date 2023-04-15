const Footer = () => {
    return (
        <footer className="bg-sky-300 static max-w-2xl m-auto py-2 shadow-md h-44 flex flex-col justify-center px-10 footer">
            <p className="font-medium text-neutral-800 hover:underline cursor-pointer">Пользовательское соглашение</p>
            <p className="font-medium text-neutral-800 hover:underline cursor-pointer">Политика конфиденциальности</p>
            <p className="font-medium text-neutral-800 hover:underline cursor-pointer">Вопросы, ошибки, предложения</p>
            <p className="font-semibold w-full text-neutral-800 text-end footer-link">© Тяжеловато.ру, 2023—2023</p>
        </footer>
    )
}

export default Footer