import "./Footer.css"

const Footer = () => {
    return (
        <footer className="bg-sky-300 static max-w-2xl m-auto py-2 shadow-md h-44 flex flex-col justify-center px-10">
            <p className="footer-link hover:underline">Пользовательское соглашение</p>
            <p className="footer-link hover:underline">Политика конфиденциальности</p>
            <p className="footer-link hover:underline">Вопросы, ошибки, предложения</p>
            <p className="font-semibold w-full text-neutral-800 text-end footer-logo">© Тяжеловато.ру, 2023—2023</p>
        </footer>
    )
}

export default Footer