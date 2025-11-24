import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Heart, Users, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projekty = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Naše projekty
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Podílíme se na projektech, které spojují křesťany a šíří evangelium v České republice
              </p>
            </div>
          </div>
        </section>

        {/* Main Project - Věří celé Česko */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-warm rounded-3xl p-8 md:p-12 text-white shadow-medium mb-16">
              <div className="max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Věří celé Česko
                </h2>
                <p className="text-xl mb-8 text-white/90 leading-relaxed">
                  Unikátní ekumenický projekt připravený k státnímu svátku Cyrila a Metoděje v roce 2025
                </p>
                <div className="space-y-4 text-lg text-white/95 leading-relaxed">
                  <p>
                    Naší touhou je propojit křesťany napříč celou Českou republikou a společně 
                    představit jedinečné poselství věrozvěstů Cyrila a Metoděje u příležitosti 
                    státního svátku v roce 2025.
                  </p>
                  <p>
                    Tento ekumenický projekt usiluje o propojení křesťanských církví v naší zemi, 
                    aby společně přiblížily význam těchto dvou velkých osobností, jejichž vliv na 
                    naši kulturu, vzdělanost a především víru zůstává stále velmi aktuální.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Goals */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                Cíle projektu
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Heart,
                    title: "Přinést evangelium",
                    description: "Přinést lidem v Česku radostnou zvěst evangelia",
                  },
                  {
                    icon: Users,
                    title: "Posílit jednotu",
                    description: "Posílit jednotu a spolupráci křesťanských církví a křesťanů v České republice",
                  },
                  {
                    icon: Sparkles,
                    title: "Obnovit oslavy",
                    description: "Obnovit obsah a smysl oslav státního svátku Cyrila a Metoděje s důrazem na svědectví života a víry obou věrozvěstů",
                  },
                ].map((goal, index) => (
                  <Card key={index} className="border-2 text-center">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <goal.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{goal.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {goal.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Why Important */}
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Proč je projekt důležitý?
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Historický význam
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ukázat podstatu duchovního dědictví mise Cyrila a Metoděje pro naši společnost
                  </p>
                </div>

                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Evangelizační a ekumenický rozměr
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Jako křesťané máme společně odpovědnost přinést lidem evangelium
                  </p>
                </div>

                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Posílení identity a hodnot
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Projekt přispívá k posílení národní a kulturní identity. Posiluje křesťanské hodnoty, 
                    které pramení z učení Ježíše Krista
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="border-2 border-primary/20 rounded-2xl p-8 md:p-12 bg-primary/5 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Připojte se k projektu
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Chceme, aby i vy nalezli způsob, jak se k tomuto společnému projektu dle svých 
                možností připojit a posílit tím jednotu i společné poslání křesťanů v naší zemi.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Kontaktujte nás
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projekty;
