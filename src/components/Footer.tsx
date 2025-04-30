
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="font-bold text-2xl mb-4">
              Portfolio<span className="text-highlight">.</span>
            </h3>
            <p className="text-gray-400 mb-4">
              A showcase of my work and skills as a frontend developer and UI/UX designer.
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
              <li>contact@johndoe.com</li>
              <li>San Francisco, CA</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-white/10 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} John Doe. All rights reserved.
          </p>
          <div className="flex gap-4">
            {['github', 'linkedin', 'twitter', 'instagram'].map((social, idx) => (
              <a 
                key={idx}
                href="#" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-highlight transition-colors"
              >
                <span className="sr-only">{social}</span>
                <div className="w-4 h-4"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
