import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Heart, Users, BookOpen, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-community.jpg";
import unityImage from "@/assets/unity-hands.jpg";
import worshipImage from "@/assets/worship-space.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Společenství, které
                <span className="block text-primary">spojuje a posiluje</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                CHO Brno vytváří prostor pro setkávání křesťanů, kteří touží růst ve své víře, 
                sdílet zkušenosti s Duchem Svatým a budovat společenství založené na vzájemné 
                lásce a podpoře.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-soft">
                  Přihlásit se na setkání
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-2">
                  Zjistit více
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium">
                <img 
                  src={heroImage} 
                  alt="Společenství CHO Brno při bohoslužbě" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-24 bg-muted/30">
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

      {/* Upcoming Event */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-warm rounded-3xl p-8 md:p-12 text-white shadow-medium">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-4">
                  Aktuální setkání
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Oblastní setkání CHO
                </h2>
                <p className="text-xl mb-2">22. února 2025</p>
                <p className="text-lg mb-6 text-white/90">
                  Téma: „Služebnosti a pomazání ke službě"
                </p>
                <p className="text-white/90 mb-8 leading-relaxed">
                  "Duch Hospodinův jest nade mnou; proto mne pomazal, abych přinesl chudým radostnou zvěst." 
                  <span className="block mt-2 font-medium">Lukáš 4,18</span>
                </p>
                <div className="space-y-3 mb-8">
                  <p className="flex items-start gap-2">
                    <span className="font-semibold min-w-[120px]">Místo:</span>
                    <span>Církevní střední zdravotnická škola, Grohova 112/16, Brno</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="font-semibold min-w-[120px]">Čas:</span>
                    <span>9:30 – 18:00</span>
                  </p>
                </div>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Registrovat se
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={unityImage} 
                    alt="Ruce spojené v modlitbě" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium">
                <img 
                  src={worshipImage} 
                  alt="Prostředí pro bohoslužby" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Co je Charismatická obnova?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Oblastní setkání charismatické obnovy je setkání křesťanů, kteří mají zkušenost 
                  s Duchem svatým a v této zkušenosti touží růst a sdílet ji s ostatními lidmi.
                </p>
                <p>
                  Vytváříme prostor pro to, aby se různá společenství, komunity a jednotlivci mohli 
                  jednou za čas setkat, sdílet, podpořit a načerpat novou sílu.
                </p>
                <p>
                  Vzniká tak úžasné zázemí vzájemného obohacení a inspirace, které pak můžeme 
                  přenášet do míst, kde sami sloužíme, do našich farností a společenství.
                </p>
              </div>
              <Button size="lg" variant="outline" className="mt-8 border-2">
                Více o nás
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center border-2 border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Připojte se k nám
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ať už jste součástí společenství nebo hledáte místo pro duchovní růst, 
              jste u nás vítáni. Těšíme se na setkání s vámi!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Kontaktujte nás
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Zjistit více o službách
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
