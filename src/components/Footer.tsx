
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">EthioConstruct</h3>
            <p className="text-navy-100 text-sm max-w-xs">
              Building the future of Ethiopia with integrity, innovation, and excellence in construction.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-navy-100 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-navy-100 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-navy-100 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-navy-100 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-navy-100 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-navy-100 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-navy-100 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className="text-navy-100 hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-navy-100 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/services" 
                  className="text-navy-100 hover:text-white transition-colors"
                >
                  Residential Construction
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-navy-100 hover:text-white transition-colors"
                >
                  Commercial Construction
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-navy-100 hover:text-white transition-colors"
                >
                  Road Construction
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-navy-100 hover:text-white transition-colors"
                >
                  Renovation & Remodeling
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-navy-100 hover:text-white transition-colors"
                >
                  Architectural Planning
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-secondary shrink-0" />
                <span className="text-navy-100">123 Bole Road, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-secondary shrink-0" />
                <a 
                  href="tel:+251912345678" 
                  className="text-navy-100 hover:text-white transition-colors"
                >
                  +251 91 234 5678
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-secondary shrink-0" />
                <a 
                  href="mailto:info@ethioconstruct.com" 
                  className="text-navy-100 hover:text-white transition-colors"
                >
                  info@ethioconstruct.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-navy-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-navy-100 text-sm">
              © {currentYear} EthioConstruct. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-navy-100 text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-navy-100 text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
