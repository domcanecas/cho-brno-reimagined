import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Heart, Users, BookOpen, MapPin, Clock, Download, DollarSign } from "lucide-react";
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
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in text-white">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-4">
                Pozvání
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                28. 2. 2026
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 italic" style={{ fontFamily: 'cursive' }}>
                Nestyď se
              </h2>
              <p className="text-2xl font-semibold mb-8">
                OBLASTNÍ SETKÁNÍ CHO
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
                    <p className="font-semibold">Program:</p>
                    <p>Bude upřesněný</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-white text-[#C87D5C] hover:bg-white/90 shadow-lg text-lg px-8 py-6"
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

      {/* Mapa */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-medium h-[400px]">
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
        </div>
      </section>

      {/* Co nabízíme */}
      <section id="nabizime" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Co nabízíme
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vytváříme prostor pro duchovní růst a vzájemnou podporu
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Calendar,
                title: "Pravidelná setkání",
                description: "Oblastní setkání několikrát ročně s modlitbou, katechezí a sdílením",
              },
              {
                icon: Users,
                title: "Komunita",
                description: "Propojujeme společenství a jednotlivce z celé brněnské diecéze",
              },
              {
                icon: BookOpen,
                title: "Učení",
                description: "Katecheze, workshopy a přímluvná modlitba pro růst ve víře",
              },
              {
                icon: Heart,
                title: "Program pro děti",
                description: "Kvalitní péče o děti během setkání od zkušeného týmu",
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

      {/* O nás */}
      <section id="o-nas" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Oblastní setkání charismatické obnovy je setkání křesťanů, kteří mají určitou zkušenost 
                s Duchem svatým a v této zkušenosti touží růst a sdílet ji s ostatními lidmi.
              </p>
              <p>
                Oblastní setkání (nebo zkráceně oblastka) vytváří prostor pro to, aby se různá společenství, 
                komunity a jednotlivci mohli jednou za čas setkat, sdílet, podpořit a načerpat.
              </p>
              <p>
                Vzniká tak úžasné zázemí vzájemného obohacení a inspirace, které pak můžeme přenášet 
                do míst, kde sami sloužíme, do našich farností a do našich společenství.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section id="video" className="py-16 md:py-24 bg-background">
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
                src="https://www.youtube.com/embed/FVBzYUgP9uM"
                title="Video o CHO"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Materiály */}
      <section id="materialy" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Download className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Propagační materiály
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stáhněte si materiály k akci a pomozte nám s propagací oblastního setkání
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.open('https://drive.google.com', '_blank')}
            >
              <Download className="mr-2" size={20} />
              Otevřít disk s materiály
            </Button>
          </div>
        </div>
      </section>

      {/* Kontakt a podpora */}
      <section id="kontakt" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Kontakt */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Kontakt
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">CHO Brno</h3>
                  <p className="text-muted-foreground">
                    Pro více informací nás neváhejte kontaktovat
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">
                    Email: info@cho-brno.cz
                  </p>
                  <p className="text-muted-foreground">
                    Web: www.cho-brno.eu
                  </p>
                </div>
              </div>
            </div>

            {/* Podpora */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  Podpořte nás
                </h2>
              </div>
              <div className="bg-muted/50 rounded-xl p-6 space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Číslo účtu:</p>
                  <p className="text-2xl font-bold text-foreground">2701934227/2010</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Variabilní symbol:</p>
                  <p className="text-xl font-semibold text-foreground">2202</p>
                </div>
                <div className="pt-4 flex justify-center">
                  <div className="bg-white p-4 rounded-lg">
                    <img 
                      src={qrKodImage} 
                      alt="QR kód pro platbu" 
                      className="w-40 h-40"
                    />
                    <p className="text-center text-sm text-muted-foreground mt-2">QR Platba</p>
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
