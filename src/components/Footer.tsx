
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-muted py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Jaggu Developer<br />Portfolio</h3>
            <div className="h-1 w-6 bg-portfolio-accent mb-2"></div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-portfolio-accent transition-colors">
                EMAIL: jagappamerigi@gmail.com
              </li>
              <li className="hover:text-portfolio-accent transition-colors">
                Phone: 7619293345
              </li>
              <li className="hover:text-portfolio-accent transition-colors">
                Address: Vijayanagar, Bangalore<br />560040
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-300 hover:text-portfolio-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-portfolio-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-portfolio-accent transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-portfolio-accent transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-3 mb-4">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full border border-portfolio-accent text-portfolio-accent flex items-center justify-center hover:bg-portfolio-dark transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full border border-portfolio-accent text-portfolio-accent flex items-center justify-center hover:bg-portfolio-dark transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="https://www.instagram.com/jaggu_s_m07?igsh=a2UyZXB0ejR3eWpx" 
                className="w-8 h-8 rounded-full border border-portfolio-accent text-portfolio-accent flex items-center justify-center hover:bg-portfolio-dark transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="https://www.linkedin.com/in/jagappa-m" 
                className="w-8 h-8 rounded-full border border-portfolio-accent text-portfolio-accent flex items-center justify-center hover:bg-portfolio-dark transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
            {/* <div className="text-lg">(❤️ ω ❤️)</div> */}
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-400 pt-4 border-t border-gray-800">
          Copyright ©{currentYear} Portfolio. All rights reserved🍁
        </div>
      </div>
    </footer>
  );
};

export default Footer;
