import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EventListings from "./pages/EventListings";
import EventDetail from "./pages/EventDetail";
import Speakers from "./pages/Speakers";
import TicketSelection from "./pages/TicketSelection";
import OrganizerProfile from "./pages/OrganizerProfile";
import Contact from "./pages/Contact";
import "./index.css";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#EDF7F6" }}>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventListings />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/tickets/:id" element={<TicketSelection />} />
            <Route path="/organizer/:id" element={<OrganizerProfile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}