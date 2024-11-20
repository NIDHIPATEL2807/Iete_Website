
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { ThemeProvider } from "@/Components/ThemeProvider";
import Footer from "@/Components/Footer";
import { useEffect, useState } from "react";
import LoadingXAnimation from "@/Components/Loading";

const MainLayout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate a loading delay (e.g., fetching data)
      const timer = setTimeout(() => {
        setLoading(false); // Set loading to false after 3 seconds
      }, 3000);
  
      return () => clearTimeout(timer); // Cleanup the timer
    }, []);
    return (
        <>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        
        {loading ? (
            <LoadingXAnimation />
          ) : (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="p-4 flex-grow">
                    <Outlet />
                </main>
                <Footer/>
            </div>
        )}
        </ThemeProvider>
        </>
    );
};

export default MainLayout;
