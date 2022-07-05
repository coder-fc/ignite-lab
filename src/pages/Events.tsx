import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { SidebarDrop } from "../components/SidebarDrop";
import { Video } from "../components/Video";

export function Events() {
    const { slug } = useParams<{ slug: string }>(
        
    )

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <SidebarDrop />
            <main className="flex flex-1">
                { slug 
                    ? <Video lessonSlug={slug} /> 
                    : <div className="flex-1" /> 
                }
            </main>

        </div>
    )
}