import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Heart, MessageCircle, GraduationCap, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sluzebnosti = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Test pěti služebností
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Objevte své duchovní obdarování a zaměření ke službě v církvi
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 md:p-12 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                Proč test služebností?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Bůh chce, abychom v církvi sloužili dle svého obdarování – pokud děláme něco 
                  jiného, zbytečně nás to vysiluje. Dary ke službě nám dává, abychom budovali 
                  společenství.
                </p>
                <p>
                  Test pěti služebností vám pomůže rozpoznat, jakým způsobem vás Bůh obdaroval 
                  a kam směřuje vaše přirozené zaměření ke službě v církvi.
                </p>
              </div>
            </div>

            {/* Five Ministries */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                Pět služebností
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Users,
                    title: "Apoštol",
                    description: "Zakládá nová společenství, šíří církev do nových míst, má vizi pro růst",
                    color: "primary",
                  },
                  {
                    icon: MessageCircle,
                    title: "Prorok",
                    description: "Přináší slovo od Boha, povzbuzuje, varuje, vidí duchovní realitu",
                    color: "secondary",
                  },
                  {
                    icon: Heart,
                    title: "Evangelista",
                    description: "Sdílí evangelium, vede lidi k víře, má vášeň pro ztracené",
                    color: "accent",
                  },
                  {
                    icon: Users,
                    title: "Pastýř",
                    description: "Pečuje o lidi, utěšuje, provází, chrání společenství",
                    color: "primary",
                  },
                  {
                    icon: GraduationCap,
                    title: "Učitel",
                    description: "Vysvětluje Boží slovo, vyučuje víru, objasňuje pravdu",
                    color: "secondary",
                  },
                ].map((ministry, index) => (
                  <Card key={index} className="border-2 hover:shadow-medium transition-all">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg bg-${ministry.color}/10 flex items-center justify-center mb-4`}>
                        <ministry.icon className={`w-6 h-6 text-${ministry.color}`} />
                      </div>
                      <CardTitle className="text-xl">{ministry.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {ministry.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Jak test funguje?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Otázky</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Test obsahuje sérii otázek, které zjišťují vaše přirozené sklony, 
                      preference a způsoby, jakými reagujete v různých situacích sloužení
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Vyhodnocení</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Na základě vašich odpovědí test vyhodnotí, které služebnosti se u vás 
                      projevují nejsilněji
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Využití</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Výsledky vám pomohou lépe rozumět tomu, jak vás Bůh obdaroval a kde 
                      můžete nejefektivněji sloužit v církvi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Test Options */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8">
                Vyzkoušejte test
              </h2>

              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl">Test v češtině (PDF)</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Stáhněte si test jako PDF dokument v českém jazyce
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <BookOpen className="mr-2" size={20} />
                    Stáhnout test (PDF)
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <ExternalLink className="w-6 h-6 text-secondary" />
                    <CardTitle className="text-2xl">Online test v angličtině</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Alternativní možnost – online test na webu fivefoldministry.com
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full border-2"
                    asChild
                  >
                    <a 
                      href="https://fivefoldministry.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2" size={20} />
                      Přejít na fivefoldministry.com
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Video */}
            <div className="mt-16 bg-muted/30 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Video: 5 služebností
              </h2>
              <div className="aspect-video rounded-xl overflow-hidden shadow-medium">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/s7WrdBkHolo" 
                  title="5 služebností: Ktorú máš ty?" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Video od Brno Worship
              </p>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Máte otázky k testu?
              </h2>
              <p className="text-muted-foreground mb-6">
                Rádi vám pomůžeme s interpretací výsledků nebo zodpovíme vaše dotazy
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

export default Sluzebnosti;
