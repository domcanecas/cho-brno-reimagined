import { Mail, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#3D3330] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <h3 className="font-bold text-2xl mb-4">CHO Brno</h3>
          <p className="text-white/80 mb-6">
            Pro více informací nás neváhejte kontaktovat
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <Mail size={18} className="text-[#E8B4A0]" />
            <a 
              href="mailto:cho-brno@seznam.cz" 
              className="text-white/90 hover:text-[#E8B4A0] transition-colors"
            >
              cho-brno@seznam.cz
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#E8B4A0] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={28} />
            </a>
            <a 
              href="https://www.youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#E8B4A0] transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={28} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-[#2D2522] py-6">
        <div className="container mx-auto px-4 text-center text-sm text-white/60">
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
