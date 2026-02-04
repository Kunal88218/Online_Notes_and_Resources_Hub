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
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md shadow-soft animate-slideInDown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Title */}
            <Link
              to="/"
              className="flex items-center gap-3 flex-shrink-0 group"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-accent-blue to-blue-600 group-hover:shadow-lg group-hover:shadow-accent-blue/40 transition-all duration-300">
                <span className="text-white font-bold text-lg">📚</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900 hidden xs:inline bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
                Online Notes Hub
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-700 hover:text-accent-blue transition-colors duration-200 text-sm font-medium relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-green group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex items-center gap-2 bg-gray-50 hover:bg-gray-100 rounded-xl px-4 py-2.5 transition-all duration-200 border border-gray-200 focus-within:border-accent-blue focus-within:shadow-soft">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search notes..."
                className="bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400 w-32 font-medium"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 active:scale-95"
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
            <nav className="md:hidden pb-4 border-t border-gray-100 animate-fadeInUp">
              <div className="flex flex-col gap-2 py-3">
                {/* Mobile Search */}
                <div className="px-2 py-2">
                  <div className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 rounded-xl px-4 py-3 transition-all duration-200 border border-gray-200 focus-within:border-accent-blue">
                    <Search size={16} className="text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search notes..."
                      className="bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400 flex-1 font-medium"
                    />
                  </div>
                </div>

                {/* Mobile Nav Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 text-gray-700 hover:bg-gradient-to-r hover:from-accent-blue/10 hover:to-accent-green/10 hover:text-accent-blue rounded-lg transition-all duration-200 font-medium"
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
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gradient-to-r from-gray-50 to-gray-100 mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row justify-between items-start sm:items-center">
            <p className="text-gray-600 text-xs sm:text-sm font-medium">
              &copy; 2024 Online Notes & Resources Hub. All rights reserved.
            </p>
            <div className="flex flex-col xs:flex-row gap-4 xs:gap-8">
              <a
                href="#"
                className="text-gray-600 hover:text-accent-blue text-xs sm:text-sm font-medium transition-all duration-200 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-blue group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-accent-blue text-xs sm:text-sm font-medium transition-all duration-200 relative group"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-blue group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
