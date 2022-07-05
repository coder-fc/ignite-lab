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
        </header>
    )
}