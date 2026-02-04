import { Link } from "react-router-dom";
import { Search } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Title */}
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-blue">
                <span className="text-white font-bold text-lg">📚</span>
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:inline">
                Online Notes Hub
              </span>
            </Link>

            {/* Navigation Links */}
            <nav className="flex items-center gap-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-accent-blue transition-colors text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/subjects"
                className="text-gray-700 hover:text-accent-blue transition-colors text-sm font-medium"
              >
                Subjects
              </Link>
              <Link
                to="/resources"
                className="text-gray-700 hover:text-accent-blue transition-colors text-sm font-medium"
              >
                Resources
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-accent-blue transition-colors text-sm font-medium"
              >
                About
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
              <Search size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search notes..."
                className="bg-transparent text-sm outline-none text-gray-700 placeholder-gray-500 w-32"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; 2024 Online Notes & Resources Hub. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-600 hover:text-accent-blue text-sm transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-accent-blue text-sm transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
