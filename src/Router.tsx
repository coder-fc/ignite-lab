import { Route, Routes } from "react-router-dom";
import { Events } from "./pages/Events";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>}/>
            <Route path="/event" element={<Events />} />
            <Route path="/event/lesson/:slug" element={<Events />} />
        </Routes>
    );
}