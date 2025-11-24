import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Target, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import worshipImage from "@/assets/worship-space.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                O CHO Brno
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Jsme společenství křesťanů z Brna a okolí, kteří touží růst ve víře 
                a sdílet zkušenost s Duchem Svatým
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Kdo jsme
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Oblastní setkání Charismatické obnovy Brno (CHO Brno) je místem setkávání 
                    křesťanů z různých společenství, komunit a farností brněnské diecéze.
                  </p>
                  <p>
                    Naším cílem je vytvářet prostor pro společnou modlitbu, sdílení, učení 
                    a vzájemnou podporu. Věříme v sílu Ducha Svatého, který nás obnovuje, 
                    posiluje a vede k hlubšímu vztahu s Bohem.
                  </p>
                  <p>
                    Pravidelná oblastní setkání poskytují příležitost k duchovnímu růstu, 
                    získávání nových podnětů a vytváření přátelství s lidmi, kteří sdílejí 
                    podobnou touhu po hlubší víře.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium">
                  <img 
                    src={worshipImage} 
                    alt="Prostředí pro bohoslužby" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                Naše hodnoty
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Heart,
                    title: "Láska",
                    description: "Vzájemná láska a péče o sebe navzájem tvoří základ našeho společenství",
                  },
                  {
                    icon: Users,
                    title: "Jednota",
                    description: "Propojujeme křesťany napříč různými společenstvími a farnostmi",
                  },
                  {
                    icon: Sparkles,
                    title: "Duch Svatý",
                    description: "Otevíráme se vedení a darům Ducha Svatého v našich životech",
                  },
                  {
                    icon: Target,
                    title: "Růst",
                    description: "Podporujeme osobní i komunitní duchovní růst všech účastníků",
                  },
                ].map((value, index) => (
                  <Card key={index} className="border-2 text-center">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* What is CHO */}
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                Co je Charismatická obnova?
              </h2>
              <div className="max-w-3xl mx-auto space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Charismatická obnova je hnutí v Katolické církvi, které klade důraz na osobní 
                  vztah s Ježíšem Kristem a zkušenost s Duchem Svatým. Vznikla v 60. letech 
                  20. století a rychle se rozšířila po celém světě.
                </p>
                <p>
                  Charakteristickým znakem charismatické obnovy je živá, spontánní modlitba, 
                  zpěv chval, důraz na dary Ducha Svatého (charismatické dary) a touha 
                  evangelizovat a sdílet víru s ostatními.
                </p>
                <p>
                  V České republice působí Charismatická obnova již několik desetiletí a spojuje 
                  tisíce věřících v různých společenstvích po celé zemi. CHO Brno je součástí 
                  této širší rodiny.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Chcete se dozvědět více?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Rádi vám odpovíme na vaše otázky nebo vás pozveme na naše setkání
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Kontaktujte nás
                </Button>
                <Button size="lg" variant="outline" className="border-2">
                  Nadcházející setkání
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
