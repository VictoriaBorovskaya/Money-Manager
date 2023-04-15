import { Link } from "react-router-dom"

const Header = () => {
    const logo = require('.//IconLogo.png')

    return (
        <header className="bg-sky-300 static max-w-2xl m-auto py-2 shadow-md">
            <div className="flex items-center justify-between px-3">
                <div className="flex items-center relative">
                    <img src={logo} alt="logo" className="h-16 w-16 ml-1" />
                    <p className="text-sky-300 text-3xl font-bold absolute left-5 top-4 pl-0.5">Тя</p>
                    <p className="text-3xl text-center font-bold text-neutral-800 absolute bottom-3 left-16 pt-0.5">
                        желовато
                    </p>
                </div>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-neutral-800 mr-1 mt-2 cursor-pointer">
                        <path fillRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className="flex items-center justify-center gap-10 pt-5 pb-2 link-container">
                <Link to='/' className="border-2 border-neutral-800 rounded-md px-6 py-0.5 text-lg font-bold hover:bg-neutral-800 hover:text-sky-300 duration-300 link">Главная</Link>
                <Link to="/income" className="border-2 border-neutral-800 rounded-md px-6 py-0.5 text-lg font-bold hover:bg-neutral-800 hover:text-sky-300 duration-300 link">Доходы</Link>
                <Link to="/expenses" className="border-2 border-neutral-800 rounded-md px-6 py-0.5 text-lg font-bold hover:bg-neutral-800 hover:text-sky-300 duration-300 link">Расходы</Link>
            </div>
        </header>
    )
}

export default Header