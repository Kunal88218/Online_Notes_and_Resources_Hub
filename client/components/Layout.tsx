import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/subjects", label: "Subjects" },
    { to: "/resources", label: "Resources" },
    { to: "/about", label: "About" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Title */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-blue">
                <span className="text-white font-bold text-lg">📚</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900 hidden xs:inline">
                Online Notes Hub
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-700 hover:text-accent-blue transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
              <Search size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search notes..."
                className="bg-transparent text-sm outline-none text-gray-700 placeholder-gray-500 w-32"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-gray-200">
              <div className="flex flex-col gap-2 py-2">
                {/* Mobile Search */}
                <div className="px-2 py-2">
                  <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                    <Search size={16} className="text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search notes..."
                      className="bg-transparent text-sm outline-none text-gray-700 placeholder-gray-500 flex-1"
                    />
                  </div>
                </div>

                {/* Mobile Nav Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-start sm:items-center">
            <p className="text-gray-600 text-xs sm:text-sm">
              &copy; 2024 Online Notes & Resources Hub. All rights reserved.
            </p>
            <div className="flex flex-col xs:flex-row gap-4 xs:gap-6">
              <a
                href="#"
                className="text-gray-600 hover:text-accent-blue text-xs sm:text-sm transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-accent-blue text-xs sm:text-sm transition-colors"
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
