import { Popover } from "@headlessui/react"
import { List } from "phosphor-react"
import { Sidebar } from "./Sidebar"

export function SidebarDrop() {
    return (
        <Popover className="md:invisible">
            <Popover.Panel><Sidebar /></Popover.Panel>
            <Popover.Button className="bg-gray-700 flex items-center px-5 group md:disabled absolute top-3 right-6">
                <p className="text-white p-2 text-lg group-hover:opacity-50 transition-all">Aulas</p>
                <List size={32} className="group-hover:opacity-50 text-blue-500 transition-all" />
            </Popover.Button>
        </Popover>
    )
}