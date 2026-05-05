import { useEffect, useRef, useState } from "react";
import { Headphones, Heart, Sparkles, Shield, Clock, Check, ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CHECKOUT_URL = "#checkout";

const CTA = ({ className = "", label = "QUERO OUVIR A FREQUÊNCIA" }: { className?: string; label?: string }) => (
  <a href={CHECKOUT_URL} className={className}>
    <Button
      size="lg"
      className="bg-gradient-cta text-accent-foreground shadow-cta hover:opacity-95 hover:scale-[1.02] transition-all rounded-full px-8 py-6 text-base font-semibold tracking-wide animate-pulse-soft"
    >
      <Headphones className="mr-2 h-5 w-5" />
      {label}
    </Button>
  </a>
);

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

const useScrollProgress = () => {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setP(Math.min(1, Math.max(0, scrolled)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
};

const Index = () => {
  useReveal();
  const progress = useScrollProgress();
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Scroll progress */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-cta z-50 transition-[width] duration-150"
        style={{ width: `${progress * 100}%` }}
      />

      {/* HERO */}
      <section ref={heroRef} className="bg-gradient-hero pt-16 pb-24 md:pt-24 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-8 animate-fade-up">
            <Sparkles className="h-3.5 w-3.5" />
            Áudios guiados de 5 minutos
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-balance text-primary animate-fade-up" style={{ animationDelay: "0.1s" }}>
            5 minutos por dia para você se reencontrar depois do que doeu.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance animate-fade-up" style={{ animationDelay: "0.2s" }}>
            A NeuroLove é uma série de áudios guiados criados para acolher o luto de um relacionamento,
            acalmar a ansiedade da espera e te devolver a clareza para tomar decisões a partir de você — não da saudade.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <CTA />
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <Shield className="h-3.5 w-3.5" /> Acesso imediato · Garantia de 30 dias
            </p>
          </div>
        </div>
      </section>

      {/* INTRO EMOCIONAL */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-2xl mx-auto reveal">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
            Você já tentou de tudo. Contato zero, conselhos de amigas, livros de autoajuda,
            ebooks cheios de teoria — e mesmo assim, na hora em que a casa fica em silêncio,
            o pensamento volta para a mesma pessoa.
          </p>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/90">
            Eu entendo, porque também passei por isso. E descobri uma coisa simples:
            o que precisa mudar primeiro não é ele, é o ruído dentro de você. Enquanto a sua mente está em colapso,
            nenhuma estratégia funciona — nem para reconquistar, nem para seguir em frente.
          </p>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/90">
            A NeuroLove não promete controlar ninguém. Ela te devolve algo muito mais valioso:
            <span className="font-semibold text-primary"> a sua própria presença</span>. E é a partir daí que
            tudo o que vem depois — voltar, seguir, escolher — passa a fazer sentido de verdade.
          </p>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="py-20 md:py-28 px-6 bg-secondary">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-5xl font-semibold text-primary text-balance">
            Se o seu relacionamento está por um fio — ou ele já se afastou — você não está sozinha.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            Você se pergunta por que parece que está sempre dando mais. Por que dorme mal. Por que checa o celular antes de qualquer coisa.
            Por que parece que perdeu o eixo. Não é fraqueza. É um sistema nervoso esgotado pedindo cuidado.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-12 text-left">
            {[
              "Pensamento que não desliga sobre a pessoa",
              "Ansiedade no peito antes de dormir",
              "Sensação de ter perdido a si mesma",
            ].map((t) => (
              <div key={t} className="bg-card p-6 rounded-2xl shadow-soft">
                <Heart className="h-5 w-5 text-accent mb-3" />
                <p className="text-sm text-foreground/80">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto reveal">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold text-center mb-4">O método</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-primary text-center text-balance">
            Áudios guiados que trabalham com você, no tempo do seu sistema nervoso.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-foreground/85">
            Cada áudio da NeuroLove combina respiração guiada, frequências sonoras suaves e narrativa de
            acolhimento, em sessões de 5 minutos pensadas para caber no seu dia mesmo nos momentos mais difíceis.
            Você ouve ao acordar e antes de dormir — e em poucos dias começa a perceber a diferença na forma como
            você reage ao silêncio, às memórias e à saudade.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            Não é mágica, não é manipulação, não é controle sobre ninguém. É um treino curto, diário e gentil
            para você voltar a habitar a sua vida com clareza — e, a partir daí, decidir o que faz sentido.
          </p>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 md:py-28 px-6 bg-gradient-warm">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-primary text-center text-balance reveal">
            O que muda dentro de você nas primeiras semanas
          </h2>
          <div className="grid md:grid-cols-2 gap-5 mt-14">
            {[
              { t: "Sono mais profundo", d: "Dormir sem o loop mental que rouba suas noites." },
              { t: "Menos reatividade", d: "Mais espaço entre o que sente e como você responde." },
              { t: "Autoestima reconstruída", d: "Voltar a se reconhecer como protagonista da própria história." },
              { t: "Clareza para decidir", d: "Distinguir o que é saudade do que é, de fato, amor." },
              { t: "Energia de volta", d: "Acordar sem o peso emocional dominando o dia." },
              { t: "Presença real", d: "Estar em quem você é antes de pensar em estar com alguém." },
            ].map((b) => (
              <div key={b.t} className="reveal bg-card p-7 rounded-2xl shadow-soft flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-cta flex items-center justify-center">
                  <Check className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-lg">{b.t}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{b.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14 reveal">
            <CTA />
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-primary text-center text-balance reveal">
            Veja como é simples
          </h2>
          <p className="text-center text-muted-foreground mt-4 reveal">Apenas 5 minutos por dia.</p>

          <div className="mt-16 space-y-8">
            {[
              {
                n: "01",
                t: "Coloque os fones",
                d: "Após receber a NeuroLove, separe seus fones e escolha dois momentos do seu dia: ao acordar e antes de dormir.",
              },
              {
                n: "02",
                t: "Ouça por 5 minutos",
                d: "Cada sessão é curta de propósito. Você não precisa de força de vontade — só presença pelo tempo de uma música.",
              },
              {
                n: "03",
                t: "Sinta a diferença em poucos dias",
                d: "Você vai notar primeiro em você: sono melhor, mente mais quieta, decisões mais claras. O que vem depois é consequência.",
              },
            ].map((s, i) => (
              <div key={s.n} className="reveal flex gap-6 md:gap-10 items-start" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="font-serif text-5xl md:text-7xl font-semibold text-accent/30 leading-none shrink-0" style={{ fontFamily: "Fraunces, serif" }}>
                  {s.n}
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary">{s.t}</h3>
                  <p className="mt-2 text-foreground/80 leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-20 md:py-28 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-4 reveal">Histórias reais</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-primary text-center text-balance reveal">
            Mais do que palavras — o que mulheres relatam depois de algumas semanas
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              {
                q: "Voltei a dormir a noite inteira na primeira semana. Foi isso que me devolveu energia para tomar as decisões que eu precisava tomar.",
                n: "Camila, 32",
              },
              {
                q: "Não esperava chorar logo no segundo áudio. Era um peso que eu carregava há meses sem perceber. Hoje me sinto mais leve.",
                n: "Renata, 28",
              },
                            {
                q: "O que mudou não foi ele, fui eu. E quando eu mudei, tudo no meu redor começou a mudar junto. É de dentro para fora mesmo.",
                n: "Larissa, 39",
              },
            ].map((d) => (
              <div key={d.n} className="reveal bg-card p-7 rounded-2xl shadow-soft">
                <div className="flex gap-0.5 text-accent mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-foreground/85 leading-relaxed text-[15px]">"{d.q}"</p>
                <p className="mt-5 text-sm font-semibold text-primary">— {d.n}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-10 reveal">
            Depoimentos individuais. Resultados variam de pessoa para pessoa e dependem da prática consistente.
          </p>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="py-20 md:py-28 px-6 bg-gradient-warm">
        <div className="max-w-2xl mx-auto reveal">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold">
              <Clock className="h-3.5 w-3.5" />
              Oferta válida por tempo limitado
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Promoção válida até terça-feira, 5 de maio de 2026</p>
          </div>

          <div className="bg-card rounded-3xl shadow-soft overflow-hidden border border-border">
            <div className="bg-primary text-primary-foreground p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold">NeuroLove — Coleção Completa</h3>
              <p className="text-primary-foreground/70 mt-2 text-sm">Acesso imediato após o pagamento</p>
            </div>

            <div className="p-8 md:p-10">
              <ul className="space-y-3 mb-8">
                {[
                  "Áudio guia: âncora emocional para os primeiros dias difíceis",
                  "Áudio guia: acolhimento do luto amoroso",
                  "Áudio guia: reconstrução da autoestima",
                  "Áudio guia: clareza para decidir com calma",
                  "Áudio guia: silêncio mental para dormir",
                  "Áudio guia: reencontro consigo mesma",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-foreground/85 text-[15px]">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border pt-8 text-center">
                <p className="text-sm text-muted-foreground">por apenas</p>
                <p className="text-5xl md:text-6xl font-semibold text-primary mt-2" style={{ fontFamily: "Fraunces, serif" }}>
                  R$ 57,00
                </p>
                <p className="text-muted-foreground mt-2">ou 12x de R$ 5,89</p>

                <div className="mt-8">
                  <CTA className="inline-block" />
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-3.5 w-3.5" />
                  Acesso imediato após o pagamento
                </div>
              </div>
            </div>
          </div>

          {/* Garantia */}
          <div className="mt-10 bg-card border border-border rounded-2xl p-8 flex gap-5 items-start reveal">
            <div className="h-14 w-14 shrink-0 rounded-full bg-accent/10 flex items-center justify-center">
              <Shield className="h-7 w-7 text-accent" />
            </div>
            <div>
              <h4 className="font-semibold text-primary text-lg">30 dias de garantia incondicional</h4>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                Experimente por 30 dias. Se em qualquer momento você sentir que a NeuroLove não é para você,
                basta enviar um e-mail e devolvemos 100% do valor — sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-2xl mx-auto reveal">
          <h2 className="text-3xl md:text-5xl font-semibold text-primary text-center text-balance">
            Dúvidas frequentes
          </h2>

          <Accordion type="single" collapsible className="mt-12">
            {[
              {
                q: "Como vou acessar o produto?",
                a: "Logo após a confirmação do pagamento, você recebe por e-mail o acesso à plataforma onde os áudios ficam disponíveis para ouvir online ou baixar.",
              },
              {
                q: "É realmente seguro?",
                a: "Sim. O pagamento é processado por uma plataforma certificada com criptografia, e seus dados nunca são compartilhados.",
              },
              {
                q: "Quanto tempo eu tenho de garantia?",
                a: "Você tem 30 dias de garantia incondicional. Se não fizer sentido para você, devolvemos integralmente.",
              },
              {
                q: "Preciso pagar algum valor mensal?",
                a: "Não. O pagamento é único. Você acessa a coleção completa sem mensalidades.",
              },
              {
                q: "A NeuroLove substitui terapia?",
                a: "Não. A NeuroLove é uma ferramenta de bem-estar emocional e não substitui acompanhamento psicológico ou médico. Se você está em sofrimento intenso, recomendamos buscar um profissional.",
              },
            ].map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="text-left text-base md:text-lg font-medium text-primary hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/75 text-[15px] leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-32 px-6 bg-primary text-primary-foreground text-center">
        <div className="max-w-2xl mx-auto reveal">
          <h2 className="text-3xl md:text-5xl font-semibold text-balance">
            5 minutos por dia. A primeira pessoa a voltar é você.
          </h2>
          <p className="mt-6 text-primary-foreground/75 text-lg">
            Comece hoje. Em uma semana você vai olhar para trás e perceber o quanto já mudou.
          </p>
          <div className="mt-10">
            <CTA />
          </div>
          <p className="mt-6 text-xs text-primary-foreground/60">
            Acesso imediato · Garantia de 30 dias · Pagamento único
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 text-center text-xs text-muted-foreground border-t border-border">
        NeuroLove 2025 © | Todos os direitos reservados
        <p className="mt-2 max-w-xl mx-auto">
          Este produto é uma ferramenta de bem-estar emocional e não substitui acompanhamento psicológico ou médico.
        </p>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-background/95 backdrop-blur border-t border-border">
        <CTA className="block w-full [&>button]:w-full" />
      </div>
      <div className="md:hidden h-24" aria-hidden />
    </main>
  );
};

export default Index;
