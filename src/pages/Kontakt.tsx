import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, ExternalLink, Heart, CreditCard } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Kontakt
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Rádi vám odpovíme na vaše dotazy a pomůžeme s čímkoli potřebujete
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Contact Card */}
            <Card className="border-2 mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Kontaktní informace</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <a 
                      href="mailto:cho-brno@seznam.cz"
                      className="text-primary hover:underline text-lg"
                    >
                      cho-brno@seznam.cz
                    </a>
                    <p className="text-muted-foreground mt-2">
                      Pište nám s dotazy ohledně setkání, registrace nebo čehokoli dalšího
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Organization Info */}
            <div className="bg-muted/30 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Pořadatel
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Akci pořádá <strong className="text-foreground">Katolická charismatická obnova</strong>
              </p>
              <a 
                href="https://www.cho.cz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                Navštívit www.cho.cz
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Technical Support */}
            <div className="bg-muted/30 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Technické zajištění
              </h2>
              <p className="text-lg text-muted-foreground">
                Technické zajištění akce ve spolupráci s{" "}
                <strong className="text-foreground">Live 4G, z.s.</strong>
              </p>
            </div>

            {/* Financial Support */}
            <div className="border-2 border-primary/20 rounded-2xl p-8 md:p-12 bg-primary/5">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    Jak nás můžete podpořit
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Pokud nás chcete podpořit, budeme moc rádi za váš finanční dar
                  </p>
                </div>
              </div>

              <Card className="border-2 bg-background">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-6 h-6 text-primary" />
                    <CardTitle>Bankovní spojení</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-muted-foreground">Číslo účtu:</span>
                      <span className="font-mono font-semibold text-lg">2701934227/2010</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Variabilní symbol:</span>
                      <span className="font-mono font-semibold text-lg">2202</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-6">
                    <strong>Poznámka:</strong> Konferenční poplatek pro účastníky je popsán 
                    v registračním formuláři. Tento účet je pro dobrovolné dary nad rámec 
                    účastnického poplatku.
                  </p>
                </CardContent>
              </Card>

              <div className="mt-6 p-4 bg-background/50 rounded-lg">
                <p className="text-muted-foreground leading-relaxed">
                  Děkujeme za vaši štědrost! Vaše dary nám pomáhají pokrývat náklady na pronájem 
                  prostorů, technické zajištění, program pro děti a další organizační záležitosti. 
                  Díky vám můžeme pořádat kvalitní setkání pro celou brněnskou diecézi.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Máte další dotazy?
              </h2>
              <p className="text-muted-foreground mb-6">
                Neváhejte nás kontaktovat, rádi vám pomůžeme
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Mail className="mr-2" size={20} />
                Napsat email
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakt;
