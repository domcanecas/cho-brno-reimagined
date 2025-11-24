import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Clock, Users, Baby, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import unityImage from "@/assets/unity-hands.jpg";

const Setkani = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
                Aktuální setkání
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Oblastní setkání CHO
              </h1>
              <p className="text-2xl font-semibold text-primary mb-4">
                22. února 2025
              </p>
              <p className="text-xl text-muted-foreground">
                Téma: „Služebnosti a pomazání ke službě"
              </p>
            </div>
          </div>
        </section>

        {/* Bible Verse */}
        <section className="py-12 bg-primary/5 border-y border-primary/20">
          <div className="container mx-auto px-4">
            <blockquote className="max-w-3xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-foreground italic mb-4">
                "Duch Hospodinův jest nade mnou; proto mne pomazal, 
                abych přinesl chudým radostnou zvěst."
              </p>
              <cite className="text-lg text-primary font-semibold">
                Lukáš 4,18
              </cite>
            </blockquote>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Informace o setkání
                </h2>
                
                <div className="space-y-6">
                  <Card className="border-2">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>Datum</CardTitle>
                        <p className="text-muted-foreground mt-1">22. února 2025</p>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="border-2">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>Čas</CardTitle>
                        <p className="text-muted-foreground mt-1">9:30 – 18:00</p>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card className="border-2">
                    <CardHeader className="flex flex-row items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>Místo konání</CardTitle>
                        <p className="text-muted-foreground mt-2 leading-relaxed">
                          Církevní střední zdravotnická škola<br />
                          Grohova 112/16<br />
                          602 00 Brno-Veveří
                        </p>
                        <p className="text-sm text-muted-foreground mt-3">
                          <strong>Parkování:</strong> O víkendech ZDARMA celý den v okolí
                        </p>
                      </div>
                    </CardHeader>
                  </Card>
                </div>

                <Button size="lg" className="w-full mt-8 bg-primary hover:bg-primary/90">
                  Registrovat se na setkání
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-medium sticky top-24">
                  <img 
                    src={unityImage} 
                    alt="Ruce spojené v modlitbě" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Program */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Program
              </h2>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {[
                      { time: "9:30", title: "Modlitba chval", description: "Společenství Nárožní" },
                      { time: "10:30", title: "Služebnosti - Katecheze a svědectví", description: "Společenství Brno Worship" },
                      { time: "12:00", title: "Mše svatá", description: "" },
                      { time: "13:30", title: "Oběd a přestávka", description: "" },
                      { time: "14:30", title: "Skupinky - Modlitba a sdílení", description: "" },
                      { time: "16:00", title: "Úvod k modlitbě za pomazání", description: "Zástupci komunity Emmanuel" },
                      { time: "17:00", title: "Přímluvná modlitba", description: "" },
                      { time: "18:00", title: "Zakončení", description: "" },
                    ].map((item, index) => (
                      <div key={index} className="flex gap-6 pb-6 border-b border-border last:border-0 last:pb-0">
                        <div className="text-primary font-bold text-lg min-w-[80px]">
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground text-lg mb-1">
                            {item.title}
                          </h3>
                          {item.description && (
                            <p className="text-muted-foreground">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Special Programs */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Baby className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Program pro děti</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Nabízíme kvalitní program pro děti od 4 let, vedený zkušeným konferenčním týmem. 
                    Děti budou mít vlastní prostor s aktivitami, příběhy a zábavou, zatímco rodiče 
                    se mohou plně zapojit do programu.
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    <strong>Registrace dětí</strong> je nutná předem přes registrační formulář.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20 bg-secondary/5">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Skupinky pro mládež</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Pro mladé účastníky připravujeme speciální skupinky zaměřené na témata 
                    blízká jejich věku. Prostor pro sdílení, modlitbu a nové přátelství 
                    s vrstevníky.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Practical Info */}
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Je dobré vědět
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>
                    Pokud si s sebou vezmete <strong>vlastní hrneček na kávu nebo čaj</strong>, 
                    bude to víc ekologické (nutné to ale není, na místě budou i kelímky)
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>
                    <strong>Registrace je otevřená do 14. 2. 2025</strong> - přihlaste se včas, 
                    ať máme přehled o počtu účastníků
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>
                    Setkání je otevřené pro všechny křesťany z brněnské diecéze - ať už jste 
                    součástí společenství, nebo přicházíte jako jednotlivci
                  </span>
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Přidejte se k nám
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Budeme rádi, když se stanete součástí tohoto setkání. 
                Registrace zabere jen chvilku.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Registrovat se
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                V případě dotazů nás kontaktujte na{" "}
                <a href="mailto:cho-brno@seznam.cz" className="text-primary hover:underline">
                  cho-brno@seznam.cz
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Setkani;
