import { Route, Routes } from "react-router-dom";
import { Events } from "./pages/Events";
import { Subscribe } from "./pages/Subscribe";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Subscribe/>}/>
            <Route path="/event" element={<Events />} />
            <Route path="/event/lesson/:slug" element={<Events />} />
        </Routes>
    );
}