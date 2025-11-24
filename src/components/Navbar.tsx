import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Úvod" },
    { to: "/about", label: "O nás" },
    { to: "/setkani", label: "Setkání" },
    { to: "/projekty", label: "Projekty" },
    { to: "/sluzebnosti", label: "Služebnosti" },
    { to: "/kontakt", label: "Kontakt" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">CHO Brno</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                activeClassName="text-primary"
              >
                {item.label}
              </NavLink>
            ))}
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Registrace
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  activeClassName="text-primary"
                >
                  {item.label}
                </NavLink>
              ))}
              <Button size="sm" className="bg-primary hover:bg-primary/90 w-full">
                Registrace
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
