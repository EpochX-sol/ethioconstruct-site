
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2 bg-white/90 backdrop-blur-lg shadow-sm'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-navy-800">
            EthioConstruct
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="btn btn-primary btn-sm ml-4"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-navy-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col p-10 h-full">
          <div className="flex justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-navy-800"
              aria-label="Close Menu"
            >
              <X />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-medium ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-navy-800 hover:text-primary'
                } transition-colors`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="btn btn-primary mt-4"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
