import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import NotFound from "../Pages/NotFound";
import OurTeam from "../Pages/OurTeam";
import Events from "../Pages/Events";
import MainLayout from "../Layouts/MainLayout";


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/team" element={<OurTeam />} />
                <Route path="/events" element={<Events />} >
                </Route>
            </Route>
            {/* fallback route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
