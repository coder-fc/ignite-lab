import { List } from "phosphor-react";
import Logo from "./Logo";
import { Sidebar } from "./Sidebar";

export function Header(){
    const pageWidth = window.innerWidth

    return(
        <header className="flex justify-between border-b border-gray-600">
            <div className="w-full py-5 flex px-5 bg-gray-700 md:justify-center">
                <Logo />
            </div>  
            <button 
            type="button"
            className="bg-gray-700 flex items-center px-5 group md:disabled"
            >
            <p className="text-white p-2 text-lg group-hover:opacity-50 transition-all">Aulas</p>
            <List size={32} className="group-hover:opacity-50 text-blue-500 transition-all" />
            </button>"
        </header>
    )
}