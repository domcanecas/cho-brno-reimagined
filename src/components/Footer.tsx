import { Mail, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F5E6E0] text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <h3 className="font-bold text-2xl mb-4 text-[#5C4A42]">CHO Brno</h3>
          <p className="text-muted-foreground mb-6">
            Pro více informací nás neváhejte kontaktovat
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <Mail size={18} className="text-primary" />
            <a 
              href="mailto:cho-brno@seznam.cz" 
              className="text-foreground hover:text-primary transition-colors"
            >
              cho-brno@seznam.cz
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#5C4A42] hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={28} />
            </a>
            <a 
              href="https://www.youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#5C4A42] hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={28} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-[#E8DDD8] py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 CHO Brno. Všechna práva vyhrazena.</p>
          <p className="mt-2">
            Součást{" "}
            <a 
              href="https://www.cho.cz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#E8B4A0] hover:underline"
            >
              Katolické charismatické obnovy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
