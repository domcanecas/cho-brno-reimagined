const Footer = () => {
  return (
    <footer className="bg-[#E8DDD8] py-6">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>© 2025 CHO Brno. Všechna práva vyhrazena.</p>
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
    </footer>
  );
};

export default Footer;
