
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { ThemeProvider } from "@/Components/ThemeProvider";

const MainLayout = () => {
    return (
        
        // <div>
        //     <Navbar />
        //     <main className="p-4">
        //         <Outlet />
        //     </main>
        // </div>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div>
                <Navbar />
                <main className="p-4">
                    <Outlet />
                </main>
            </div>
        </ThemeProvider>
    );
};

export default MainLayout;
