
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="font-bold text-2xl mb-4">
              Rahul Ramaraju<span className="text-highlight">.</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Front-End Developer & UI/UX Designer based in Dallas, TX. Currently pursuing a Master's in Information Technology and Management at UT Dallas.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>rahulramaraju1999@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Dallas, Texas, 75240</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (214) 892-4416</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-white/10 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Raghu Rama Rahul Ramaraju. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-highlight transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/rahulramaraju/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-highlight transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
