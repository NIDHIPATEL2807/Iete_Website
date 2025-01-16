import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import NotFound from "../Pages/NotFound";
import OurTeam from "../Pages/OurTeam";
import Events from "../Pages/Events";
import MainLayout from "../Layouts/MainLayout";
import EventPage from "../Pages/EventPage";
import BugBusterFive from "../Pages/BugBusterFive";


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/team" element={<OurTeam />} />
                <Route path="/Bug25" element={<BugBusterFive />} />
                <Route path="/events" element={<Events />} >
               

                </Route>
                <Route path="/events/:eventId" element={<EventPage />} />
            </Route>
            {/* fallback route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
