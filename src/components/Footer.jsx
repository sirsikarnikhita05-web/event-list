import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-rose-100" style={{ backgroundColor: "#A28089" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-sm font-bold" style={{ color: "#A28089" }}>EF</div>
              <span className="font-bold text-xl text-white" style={{ fontFamily: "Playfair Display, serif" }}>EventFlow</span>
            </div>
            <p className="text-rose-100 text-sm leading-relaxed max-w-xs">
              Discover, book, and experience the best events around you. Built for curious souls who live to attend.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm tracking-wider uppercase">Explore</h4>
            <ul className="space-y-2 text-rose-100 text-sm">
              {[["Events", "/events"], ["Speakers", "/speakers"], ["Organizers", "/organizer/1"]].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white transition-colors duration-200">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm tracking-wider uppercase">Company</h4>
            <ul className="space-y-2 text-rose-100 text-sm">
              {[["Contact", "/contact"], ["Submit Event", "/contact"], ["Sponsor", "/contact"]].map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="hover:text-white transition-colors duration-200">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-rose-400 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-rose-200 text-xs">© 2025 EventFlow. All rights reserved.</p>
          <div className="flex gap-4 text-rose-200 text-xs">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}