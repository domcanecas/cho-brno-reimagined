import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Heart, Users, MapPin, Clock, FileText, Image, Flame, Handshake, Car, Coffee, Church, Mail, Music, BookOpen, MessageSquare, Sparkles, FileImage } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import letakImage from "@/assets/cho-letak.jpg";
import qrKodImage from "@/assets/qr-kod.png";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero - Oblastní setkání */}
      <section id="setkani" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-[#C87D5C] via-[#E8B4A0] to-[#D4A088]">
        {/* Background text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="text-[8rem] md:text-[16rem] lg:text-[20rem] font-bold text-white/10 whitespace-nowrap select-none tracking-wider">
            NESTYĎ SE
          </span>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in text-white">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-4">
                Pozvání
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Oblastní setkání CHO
              </h1>
              <p className="text-3xl md:text-5xl font-bold mb-8">
                28. 2. 2026
              </p>

              <div className="space-y-4 mb-8 text-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Místo konání:</p>
                    <p>Blansko Katolický dům</p>
                    <p>Komenského 15, 678 01 Blansko</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Čas:</p>
                    <p>9:30 – 18:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <button 
                      onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
                      className="font-semibold hover:underline cursor-pointer"
                    >
                      Program →
                    </button>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-white text-[#C87D5C] hover:bg-white/90 shadow-lg text-lg px-8 py-6"
                onClick={() => window.open('https://forms.gle/KsXj9CqJrp5KUgdX8', '_blank')}
              >
                Registrovat se nyní
              </Button>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={letakImage} 
                  alt="Leták oblastního setkání CHO - Nestyď se" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citát */}
      <section className="py-12 md:py-16 bg-[#5C4A42] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl leading-relaxed italic">
              <p className="mb-4">Milovaný...</p>
              <p className="mb-4">rozněcuj oheň Božího daru ... ducha síly, lásky a rozvahy.</p>
              <p className="mb-6">Nestyď se vydávat svědectví o našem Pánu.</p>
              <cite className="text-lg not-italic text-white/80 font-medium">2 Tim 1,6-8</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Program */}
      <section id="program" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Program
            </h2>
            <div className="space-y-0">
              {[
                { icon: Music, text: "Modlitba chval" },
                { icon: BookOpen, text: "Katecheze na 2 Tim 1,6-8" },
                { icon: Church, text: "Mše svatá" },
                { icon: Coffee, text: "Oběd" },
                { icon: MessageSquare, text: "Info okénko" },
                { icon: Handshake, text: "Praktický blok: Jak vydat svědectví" },
                { icon: Sparkles, text: "Modlitba \"Rozněcuj oheň božího daru\"" },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-4 py-4 ${index !== 6 ? 'border-b border-border' : ''}`}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-lg font-medium text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Mapa */}
            <div className="rounded-2xl overflow-hidden shadow-medium h-[350px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.8!2d16.6444!3d49.3628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712f3e8b8b8b8b8%3A0x8b8b8b8b8b8b8b8!2sKomenského%2015%2C%20678%2001%20Blansko!5e0!3m2!1scs!2scz!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa místa konání"
              />
            </div>

            {/* Praktické informace */}
            <div className="bg-white rounded-2xl shadow-medium p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Praktické informace</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Car className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Parkování</h4>
                    <p className="text-muted-foreground">Parkování možné v okolí Katolického domu, který se zároveň nachází 3min od vlakové zastávky.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Coffee className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Občerstvení</h4>
                    <p className="text-muted-foreground">Během dne bude zajištěno občerstvení a možnost objednání oběda.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Program pro děti</h4>
                    <p className="text-muted-foreground">Zajištěn dětský program po dobu oblastního setkání, nutné děti předem registrovat.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Church className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Mše svatá</h4>
                    <p className="text-muted-foreground">Během setkání budeme slavit společnou mši svatou.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co spolu prožíváme */}
      <section id="nabizime" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Co spolu prožíváme
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vytváříme prostor pro růst v milosti křtu v Duchu svatém
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Flame,
                title: "Zkušenost s Duchem svatým",
                description: "Žijeme Boží milostí - nezaslouženým darem pro člověka v osobě Ducha svatého.",
              },
              {
                icon: Handshake,
                title: "Společenství a spolupráce",
                description: "Propojujeme společenství, komunity a jednotlivce z brněnské diecéze. Jsme jedno v Kristu.",
              },
              {
                icon: Calendar,
                title: "Oblastní setkání",
                description: "Pravidelná setkání s katechezí, workshopy, sdílením a modlitbou pro růst v pomazání.",
              },
              {
                icon: Heart,
                title: "Vztahy a přijetí",
                description: "To je mé přikázání, abyste se milovali navzájem, jako jsem já miloval vás. Jan 15.12",
              },
            ].map((item, index) => (
              <Card 
                key={index} 
                className="border-2 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Co je oblastní setkání */}
      <section id="o-nas" className="py-16 md:py-24 bg-[#F5E6E0]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Co je oblastní setkání
            </h2>
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p className="font-semibold">
                Oblastní setkání charismatické obnovy je setkání křesťanů, kteří mají (nebo chtějí mít) zkušenost 
                s Duchem svatým a v této zkušenosti touží růst a sdílet ji s ostatními.
              </p>
              <p>
                Oblastní setkání (nebo zkráceně oblastka) vytváří prostor pro to, aby se různá společenství, 
                komunity a jednotlivci mohli jednou za čas setkat, sdílet, podpořit a načerpat.
              </p>
              <p className="font-semibold">
                Vzniká tak úžasné zázemí vzájemného obohacení a inspirace, které pak můžeme přenášet 
                do míst, kde sami sloužíme, do našich farností a do našich společenství.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section id="video" className="py-16 md:py-24 bg-[#E8DDD8]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Poznejte CHO blíže
              </h2>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-medium">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/g386ROk-WPE"
                title="Video o CHO"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Materiály */}
      <section id="materialy" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Propagační materiály
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stáhněte si materiály k akci a pomozte nám s propagací oblastního setkání
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://drive.google.com/file/d/13BN8bMNmZS8d50doNyPgbiAla4hcLrm8/view?usp=sharing', '_blank')}
              >
                <FileImage className="mr-2" size={20} />
                Plakát
              </Button>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://drive.google.com/file/d/1u76vmYfGxquC53AyHy6A_GaZyqC0Ji2L/view?usp=sharing', '_blank')}
              >
                <FaInstagram className="mr-2" size={20} />
                Instagram
              </Button>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://drive.google.com/file/d/11Tk0F6LKjblnP1Vin6cE4Ef385VYhBlw/view?usp=sharing', '_blank')}
              >
                <FaFacebook className="mr-2" size={20} />
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt a podpora */}
      <section id="kontakt" className="py-16 md:py-24 bg-[#F0EBE8]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Kontakt */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Kontakt
              </h2>
              <div className="mb-6">
                <p className="font-semibold text-foreground mb-1">Organizace</p>
                <p className="text-foreground">Oblastní tým Charis</p>
                <p className="text-muted-foreground mt-2">Kontaktovat nás můžete emailem na adrese:</p>
                <a 
                  href="mailto:cho-brno@seznam.cz" 
                  className="text-primary hover:underline font-medium"
                >
                  cho-brno@seznam.cz
                </a>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Pořadatel</p>
                <a 
                  href="https://cho.cz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Charismatická obnova, z.s. (cho.cz)
                </a>
              </div>
            </div>

            {/* Podpora */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Podpořte nás
              </h2>
              <div className="bg-white rounded-xl p-6 space-y-4 shadow-sm">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Číslo účtu:</p>
                  <p className="text-2xl font-bold text-foreground">2701934227/2010</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Variabilní symbol:</p>
                  <p className="text-xl font-semibold text-foreground">2802</p>
                </div>
                <div className="pt-4 flex justify-center">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <img 
                      src={qrKodImage} 
                      alt="QR kód pro platbu" 
                      className="w-56 h-56"
                    />
                    <p className="text-center text-sm text-muted-foreground mt-3">QR Platba</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
