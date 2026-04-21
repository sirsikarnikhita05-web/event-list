import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/",          label: "Home" },
  { to: "/events",    label: "Events" },
  { to: "/speakers",  label: "Speakers" },
  { to: "/organizer/1", label: "Organizer" },
  { to: "/contact",   label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(237,247,246,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:rotate-12 duration-300"
            style={{ backgroundColor: "#A28089" }}
          >
            EF
          </div>
          <span className="font-bold text-lg" style={{ fontFamily: "Playfair Display, serif" }}>
            Event<span style={{ color: "#A28089" }}>Flow</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => {
            const active = location.pathname === l.to || (l.to !== "/" && location.pathname.startsWith(l.to));
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 btn-press
                  ${active ? "text-white" : "text-gray-700 hover:text-gray-900"}`}
                style={active ? { backgroundColor: "#A28089" } : {}}
              >
                {!active && (
                  <span className="absolute inset-0 rounded-full opacity-0 hover:opacity-10 transition-opacity duration-200"
                    style={{ backgroundColor: "#A28089" }} />
                )}
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/events"
            className="px-5 py-2 rounded-full text-sm font-semibold text-white btn-press transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: "#A28089" }}
          >
            Find Events
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 btn-press"
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}
        style={{ backgroundColor: "rgba(237,247,246,0.98)" }}
      >
        <div className="px-4 pb-4 space-y-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-rose-50 transition-colors"
              style={{ color: location.pathname === l.to ? "#A28089" : "#374151" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}