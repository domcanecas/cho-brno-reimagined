import { Mail, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">CHO Brno</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Oblastní setkání charismatické obnovy v Brně - prostor pro společenství, 
              sdílení a vzájemné obohacení mezi křesťany.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Rychlé odkazy</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  O nás
                </a>
              </li>
              <li>
                <a href="/setkani" className="text-muted-foreground hover:text-primary transition-colors">
                  Aktuální setkání
                </a>
              </li>
              <li>
                <a href="/projekty" className="text-muted-foreground hover:text-primary transition-colors">
                  Projekty
                </a>
              </li>
              <li>
                <a href="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a href="mailto:cho-brno@seznam.cz" className="hover:text-primary transition-colors">
                  cho-brno@seznam.cz
                </a>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <a 
                  href="https://www.facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CHO Brno. Všechna práva vyhrazena.</p>
          <p className="mt-2">
            Součást{" "}
            <a 
              href="https://www.cho.cz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
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
