import { useEffect, useRef, useState } from "react";
import { Headphones, Heart, Sparkles, Shield, Clock, Check, ChevronDown, Star, X, Mail, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CTA = ({ className = "", label = "QUERO OUVIR A FREQUÊNCIA", href = "#oferta" }: { className?: string; label?: string; href?: string }) => (
  <a href={href} className={className}>
    <Button
      size="lg"
      className="bg-gradient-cta text-accent-foreground shadow-cta hover:opacity-95 hover:scale-[1.02] transition-all rounded-full px-8 py-6 text-base font-semibold tracking-wide animate-pulse-soft"
    >
      <Headphones className="mr-2 h-5 w-5" />
      {label}
    </Button>
  </a>
);

const useReveal = (dependency?: any) => {
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
  }, [dependency]);
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
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  useReveal(isVideoEnded);
  const progress = useScrollProgress();
  const heroRef = useRef<HTMLDivElement>(null);

  const [maxTime, setMaxTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const currentTime = video.currentTime;

    // Desbloqueia a página automaticamente após 2 minutos (120s) ou no final do vídeo
    if (currentTime >= 120 || (video.duration && currentTime >= video.duration - 0.5)) {
      setIsVideoEnded(true);
    }
    
    // Evita avançar o vídeo: se tentar pular mais de 1 segundo além do máximo assistido, volta pro máximo
    if (!isVideoEnded) {
      if (currentTime > maxTime + 1) {
        video.currentTime = maxTime;
      } else {
        setMaxTime(Math.max(maxTime, currentTime));
      }
    }
  };

  const handleEnded = () => {
    setIsVideoEnded(true);
  };

  return (
    <main className="min-h-screen bg-[#0A0B10] overflow-x-hidden">
      {/* Scroll progress */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-cta z-50 transition-[width] duration-150"
        style={{ width: `${progress * 100}%` }}
      />

      {/* HERO */}
      <section ref={heroRef} className="bg-[#0A0B10] pt-16 pb-24 md:pt-24 md:pb-32 px-6 text-white min-h-[90vh] flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center w-full">
          <h2 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent animate-fade-up mb-2">
            Aprenda a ativar o gatilho mental da atração amorosa 5 minutos
          </h2>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-balance text-white animate-fade-up" style={{ animationDelay: "0.1s" }}>
            E faça o seu ex voltar correndo para você
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-300 max-w-3xl mx-auto text-balance animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Você tеrá еlе na palma da sua mãо. Quando você ativar esse gatilho da atração аmоrоѕа no mental do seu ex, vai ver você não sair da cabeça dele nem por 1 minuto
          </p>

          <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <video
              ref={videoRef}
              src="/videos/vsl.mp4"
              controls
              className="w-full max-w-[340px] md:max-w-[400px] mx-auto rounded-2xl shadow-2xl border-4 border-white/10 aspect-[9/16] bg-black/50 object-cover"
              controlsList="nodownload"
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleEnded}
            />
          </div>

          {isVideoEnded && (
            <div className="mt-10 flex flex-col items-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <CTA />
              <img src="/uploads/5 estrelas.png" alt="Avaliações 5 estrelas" className="h-6 mt-2" />
            </div>
          )}
        </div>
      </section>

      {isVideoEnded && (
        <div className="animate-fade-up" style={{ animationDuration: "1s" }}>
          {/* INTRO EMOCIONAL / SEGUNDA PARTE */}
      <section className="py-20 md:py-28 px-6 bg-[#0A0B10] text-gray-300">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center reveal">
          <div className="space-y-6 text-lg md:text-xl leading-relaxed font-light">
            <p>
              Você já tentou de tudo, contato zero, mensagens estratégicas, livros de autoajuda, ebooks cheios de teoria e nada funcionou de verdade. Eu sei exatamente como você se sente, porque eu também passei por tudo isso. Foi só quando descobri essa estratégia que tudo mudou. Ela age de forma tão poderosa que cria uma vantagem real na sua vida amorosa, fazendo com que você seja naturalmente vista, notada e cortejada pelo homem que deseja sem esforço, sem jogos e sem depender de nenhuma técnica vazia.
            </p>
            <p>
              Essa não é mais uma promessa bonita sem resultado. É um método que já transformou a vida de mulheres reais, que assim como você estavam cansadas de perder tempo com o que não funciona. Se você quer ser a mulher que desperta atenção genuína e reconquista o poder de atrair o homem certo, chegou a hora de dar esse passo. Clique agora e descubra como essa melodia pode mudar o seu jogo — antes que você perca maisum dia esperando que algo mude sozinho.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="/uploads/section-below-vsl.png" alt="Mulher ouvindo melodia" className="w-full max-w-md md:max-w-lg object-contain" />
          </div>
        </div>
      </section>

      {/* TERCEIRA PARTE / PROBLEMA */}
      <section className="py-20 md:py-28 px-6 bg-[#0A0B10] text-gray-300">
        <div className="max-w-6xl mx-auto reveal">
          <div className="text-center mb-16">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent mb-4">
              Se seu relacionamento está por um fio, ou ele te abandonu...
            </h3>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
              Eu sei exatamente como você se sente...<br className="hidden md:block" /> eu já passei por isso!
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
            <div className="flex justify-center">
              <img src="/uploads/woman.png" alt="Mulher pensativa" className="w-full max-w-md object-contain" />
            </div>

            <div className="space-y-6 text-[17px] md:text-lg leading-relaxed font-light">
              <p>
                Você já se perguntou por que suas amigas vivem relacionamentos incríveis pedidos de casamento, flores, viagens enquanto o seu está cheio de brigas e desentendimentos?
              </p>
              <p>
                Eu também me fiz essa pergunta, e depois de tentar contato zero, mensagens estratégicas, livros de autoajuda e ebooks de teoria vazia, descobri o verdadeiro motivo: seu campo energético está desalinhado.
              </p>
              <p>
                É exatamente isso que aneurolove corrige ela ativa o interruptor da atração amorosa em você, realinhando sua energia e fazendo com que você seja naturalmente vista, desejada e cortejada, seja por um ex, por alguém que você quer conquistar ou para salvar um casamento que parece estar por um fio.
              </p>
              <p>
                Menos de 2% das mulheres sabem que isso existe e quem descobre passa a ter uma vantagem real nos relacionamentos, quase como um "controle" sobre a atração masculina.
              </p>
              <p>
                Chega de perder tempo com o que não funciona. Se você quer que ele te mande mensagem, volte, ou finalmente te veja como a mulher que você é, essa frequência pode mudar isso de forma quase imediata.  Clique agora, ouça a Melodia do Amor e ative esse interruptor hoje mesmo — antes de perder mais um dia esperando que algo mude por conta própria.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <CTA />
          </div>
        </div>
      </section>

      {/* QUARTA PARTE / RESULTADOS */}
      <section className="py-20 md:py-28 px-6 bg-[#0A0B10] relative overflow-hidden">

        <div className="max-w-7xl mx-auto relative z-10 reveal text-center">
          <p className="font-bold text-lg md:text-xl mb-4 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            + de 6 mil mulheres usam essa frequência
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-16">
            Melhor do que falar... é mostrar os resultados
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
            {/* Left Image */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <img src="/uploads/resultado-esquerda.png" alt="Depoimento Esquerda" className="w-full max-w-[320px] rounded-xl shadow-2xl hover:scale-105 transition-transform" />
            </div>

            {/* Center Video */}
            <div className="w-full md:w-1/3 flex justify-center z-20">
              <iframe
                src="https://www.youtube.com/embed/MsOFZ_oZicw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full max-w-[340px] rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border-2 border-white/10 relative scale-110 aspect-[9/16]"
              />
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <img src="/uploads/resultado-direita.png" alt="Depoimento Direita" className="w-full max-w-[320px] rounded-xl shadow-2xl hover:scale-105 transition-transform" />
            </div>
          </div>

          <div className="mt-24 max-w-4xl mx-auto">
            <p className="text-gray-300 text-[17px] md:text-xl leading-relaxed font-light text-balance">
              Você só precisa de 5 mіnutоѕ por dia, para transformar completamente o seu relacionamento. Com a neurolove, sua frequência energética se eleva tão rapidamente que, mesmo que ele esteja com outra pessoa, ele sentirá que você é a mulher da vida dele e voltará para os seus braços. Clique agora, ouça o NeuroLove e ative esse interruptor hoje mesmo.
            </p>
          </div>
        </div>
      </section>

      {/* QUINTA PARTE / QUEBRA-CABEÇA */}
      <section className="py-20 md:py-28 px-6 bg-[#0A0B10] text-gray-300 relative overflow-hidden">

        <div className="max-w-4xl mx-auto relative z-10 text-center reveal">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-balance leading-tight">
            Essa Melodia do Amor é a peça do<br className="hidden md:block" /> quebra-cabeça que faltava no seu relacionamento.
          </h2>

          <div className="bg-[#12141a]/80 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 md:p-12 text-left max-w-2xl mx-auto shadow-2xl relative overflow-hidden">

            <ul className="space-y-6 relative z-10">
              {[
                "Chega ouvir conselhos das amigas para esquecê-lo",
                "De achar que ele não vai voltar",
                "De perder tempo com amarrações",
                "De perder tempo e dinheiro comprando ebooks com dicas vazias",
                "De usar frases prontas para reconquistar"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-300 text-[15px] md:text-[17px]">
                  <X className="h-5 w-5 text-red-500 shrink-0 stroke-[3]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SEXTA PARTE / PASSO A PASSO */}
      <section className="py-20 md:py-28 px-6 bg-[#0A0B10]">
        <div className="max-w-5xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
            Veja como é simples...
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Mail,
                title: "Passo #01",
                text: "Após receber a neurolove, você irá pegar o seus fones de ouvido, e ouvir uma vez ao acordar e outra antes de dormir"
              },
              {
                icon: Headphones,
                title: "Passo #02",
                text: "São apenas 5 minutos por dia para captar a frequência individualmente."
              },
              {
                icon: Banknote,
                title: "Passo #03",
                text: "Em poucos dias, você notará os resultados: ele vai te mandar uma mensagem, aparecer na sua porta, e até o jeito que as pessoas ao redor te olham será completamente diferente."
              }
            ].map((step, i) => (
              <div key={i} className="bg-[#0c0d12] border border-white/5 rounded-3xl p-8 md:p-10 text-left hover:-translate-y-1 transition-transform duration-300 shadow-2xl">
                <step.icon className="h-8 w-8 md:h-10 md:w-10 text-red-500 mb-6" />
                <h3 className="text-white text-xl md:text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SÉTIMA PARTE / OFERTA FINAL */}
      <section id="oferta" className="py-20 md:py-28 px-6 bg-[#0A0B10]">
        <div className="max-w-4xl mx-auto reveal">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
              Promoção válida até<br />Terça-Feira, 5 de Maio de 2026
            </h2>
          </div>

          <div className="bg-[#12141a] rounded-[2.5rem] shadow-2xl overflow-hidden max-w-xl mx-auto border border-white/5 relative">
            <div className="pt-12 pb-8 flex justify-center px-6">
              <img src="/uploads/promocao-melodia-fones.png" alt="Produto" className="w-full max-w-[320px] md:max-w-[400px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="px-8 md:px-10 pb-10">
              <ul className="space-y-4 mb-10">
                {[
                  "Melodia do amor para trazer ele de volta",
                  "Melodia para atrair o seu par perfeito",
                  "Melodia da atração amorosa",
                  "Melodia restabelecendo a confiança",
                  "Melodia do encantamento, onde ele não terá mais olhos para outras",
                  "Melodia Neutralizadora de emoções negativas, onde todos os seus sentimentos e memórias negativas envolvendo vocês serão ELIMINADOS",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-gray-300 text-[16px] md:text-[18px] leading-relaxed">
                    <Check className="h-6 w-6 text-red-500 shrink-0 stroke-[3] mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mt-8">
                <p className="text-gray-400 font-medium text-lg mb-1">por apenas</p>
                <p className="text-5xl md:text-7xl font-extrabold text-white mb-2 tracking-tight">
                  R$ 57,00
                </p>
                <p className="text-gray-400 text-base md:text-lg mb-10">ou 12x de R$ 5,89</p>

                <CTA href="https://pay.cakto.com.br/6vupxvo_873418" className="w-full block [&>button]:w-full" />

                <img src="/uploads/caktopay.png" alt="Formas de pagamento" className="w-full max-w-[280px] md:max-w-[360px] mx-auto mt-8 opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

          {/* Garantia */}
          <div className="mt-24 flex flex-col md:flex-row gap-10 items-center justify-center max-w-4xl mx-auto">
            <div className="w-56 md:w-64 shrink-0 flex justify-center">
              <img src="/uploads/30-dias-garantia.png" alt="30 Dias de Garantia" className="w-full max-w-[220px] md:max-w-[250px] object-contain" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-5">30 dias de garantia</h3>
              <p className="text-gray-300 text-[17px] md:text-lg leading-relaxed">
                Eu já mostrei que isso pode mudar o seu relacionamento e também mostrei vários depoimentos de pessoas do qual eu ensinei a frequência e elas tiveram seus relacionamentos transformados
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-32 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center">Dúvidas Frequentes</h3>
            <div className="bg-[#12141a] border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-white/5">
                  <AccordionTrigger className="text-white hover:text-white/80 hover:no-underline text-lg md:text-xl font-medium py-5 text-left">
                    Como vou acessar o produto?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-base md:text-lg leading-relaxed pl-8">
                    Assim que a compra for concretizada você receberá em seu e-mail todos os dados de acesso.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b border-white/5">
                  <AccordionTrigger className="text-white hover:text-white/80 hover:no-underline text-lg md:text-xl font-medium py-5 text-left">
                    É realmente seguro?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-base md:text-lg leading-relaxed pl-8">
                    Sim, nosso sistema de pagamento é o mais seguro e utilizado do Brasil. (Cakto)
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b border-white/5">
                  <AccordionTrigger className="text-white hover:text-white/80 hover:no-underline text-lg md:text-xl font-medium py-5 text-left">
                    Quanto tempo eu tenho de garantia?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-base md:text-lg leading-relaxed pl-8">
                    Garantia de Satisfação de 7 dias, se o material não lhe atender você pode solicitar reembolso do pagamento
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-b-0">
                  <AccordionTrigger className="text-white hover:text-white/80 hover:no-underline text-lg md:text-xl font-medium py-5 text-left">
                    Preciso pagar algum valor mensal?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-base md:text-lg leading-relaxed pl-8">
                    Não, o pagamento é feito apenas uma vez.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-10 px-6 text-center text-xs text-muted-foreground bg-[#0A0B10] border-t border-white/5">
        NeuroLove 2025 © | Todos os direitos reservados
        <p className="mt-2 max-w-xl mx-auto">
          Este produto é uma ferramenta de bem-estar emocional e não substitui acompanhamento psicológico ou médico.
        </p>
      </footer>

      {/* Sticky mobile CTA */}
      {isVideoEnded && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-background/95 backdrop-blur border-t border-border">
          <CTA className="block w-full [&>button]:w-full" />
        </div>
      )}
      <div className="md:hidden h-24" aria-hidden />
    </main>
  );
};

export default Index;
