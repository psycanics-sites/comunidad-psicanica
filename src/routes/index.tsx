import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import {
  Play,
  Check,
  X,
  ArrowRight,
  ShieldCheck,
  Users,
  Compass,
  Sparkles,
  MessageCircle,
  Heart,
  Phone,
  Mail,
  Globe,
} from "lucide-react";
import logo from "@/assets/logo.png";
import heroWoman from "@/assets/hero-woman.jpg";
import calmWoman from "@/assets/calm-woman.jpg";
import couple from "@/assets/couple.jpg";
import manPortrait from "@/assets/man-portrait.jpg";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`w-full px-6 md:px-10 py-20 md:py-28 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <img src={logo} alt="Psicánica" width={40} height={40} className="w-9 h-9" />
      <span
        className={`font-display text-2xl tracking-tight ${light ? "text-white" : "text-primary"}`}
      >
        Psicánica
      </span>
    </div>
  );
}

function CTAButton({
  children,
  variant = "primary",
  className = "",
  href = "#unirme",
}: {
  children: React.ReactNode;
  variant?: "primary" | "warm" | "ghost";
  className?: string;
  href?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm md:text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-soft";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : variant === "warm"
        ? "gradient-warm text-foreground hover:brightness-105"
        : "border border-primary/30 text-primary hover:bg-primary/5";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <Brand />
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#loop" className="hover:text-primary transition">El Loop</a>
            <a href="#mapa" className="hover:text-primary transition">El Mapa</a>
            <a href="#comunidad" className="hover:text-primary transition">Comunidad</a>
            <a href="#unirme" className="hover:text-primary transition">Unirme</a>
          </div>
          <CTAButton className="!px-5 !py-2.5 text-sm">Entrar ahora</CTAButton>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-10 gradient-hero">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-20 -left-20 w-[420px] h-[420px] rounded-full bg-primary-soft blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-soft blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur border border-primary/15 text-xs uppercase tracking-[0.18em] text-primary font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Cambia desde la raíz
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl leading-[0.95] text-foreground text-balance">
              No estás <span className="font-script text-accent text-6xl md:text-8xl">fallando.</span>
              <br />
              Estás atrapado en un <span className="text-primary italic">ciclo</span>.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Te prometiste que esta vez sería diferente, pero algo dentro de ti se activa…
              y todo se repite. <span className="text-foreground font-medium">No es solo lo que te pasa: es que siempre regresas al mismo lugar.</span>
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CTAButton href="#video">
                <Play className="w-4 h-4 fill-current" /> Ver el video
              </CTAButton>
              <CTAButton variant="ghost" href="#comunidad">
                Conoce la comunidad <ArrowRight className="w-4 h-4" />
              </CTAButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-6 gradient-blue rounded-[3rem] opacity-20 blur-2xl" />
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-soft bg-sky-soft">
              <img src={heroWoman} alt="Mujer serena" className="w-full h-full object-cover" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/85 backdrop-blur-md rounded-2xl p-5 border border-white">
                <p className="font-script text-2xl text-primary leading-tight">
                  "Volví a respirar."
                </p>
                <p className="text-xs text-muted-foreground mt-1">— María, miembro de la comunidad</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <Section id="video" className="bg-background">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">Mira el video completo</p>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            Si te identificas con esto…<br />
            <span className="font-script text-accent text-5xl md:text-6xl">esto puede cambiar todo.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Lo que vas a entender puede transformar la forma en que ves todo lo que te pasa por dentro.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12 relative max-w-4xl mx-auto"
        >
          <div className="absolute -inset-4 gradient-warm rounded-3xl opacity-30 blur-2xl" />
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-soft border border-border bg-gradient-to-br from-primary/90 to-primary">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group relative">
                <div className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full gradient-warm flex items-center justify-center shadow-2xl group-hover:scale-110 transition">
                  <Play className="w-10 h-10 text-primary fill-primary ml-1" />
                </div>
              </button>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/90 text-sm">
              <span className="font-display italic">El Loop · 4:32</span>
              <span className="opacity-70">Comunidad Psicánica</span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <CTAButton variant="warm">
              <Play className="w-4 h-4 fill-current" /> Ver video completo
            </CTAButton>
          </div>
        </motion.div>
      </Section>

      {/* THE LOOP */}
      <Section id="loop" className="bg-secondary/40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">El patrón</p>
            <h2 className="mt-3 text-4xl md:text-5xl text-balance leading-tight">
              No es el evento lo que te atrapa…<br />
              es el <span className="font-script text-primary text-5xl md:text-6xl">Loop</span>.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Esto no te pasa por casualidad. Hay un patrón que se repite — y por fin puedes verlo con claridad.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {["Botón", "Reacción", "Dolor", "Consecuencia", "Repetición"].map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-5 rounded-2xl border ${
                    i % 2 === 0 ? "bg-card border-primary/20" : "bg-accent-soft border-accent/30"
                  } ${i === 4 ? "col-span-2" : ""} shadow-card`}
                >
                  <div className="text-xs text-muted-foreground font-semibold tracking-wider">
                    PASO {i + 1}
                  </div>
                  <div className="font-display text-2xl mt-1 text-foreground">{step}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Examples */}
        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Ejemplo 1 · Relaciones",
              steps: [
                ["Botón", "no contesta"],
                ["Reacción", "“ya no le importo”"],
                ["Dolor", "ansiedad, celos, inseguridad"],
                ["Consecuencia", "reclamo, suposiciones"],
                ["Repetición", "conflicto, distanciamiento"],
              ],
            },
            {
              title: "Ejemplo 2 · Finanzas",
              steps: [
                ["Botón", "gasto inesperado"],
                ["Reacción", "“no voy a poder salir adelante”"],
                ["Dolor", "angustia, preocupación, miedo"],
                ["Consecuencia", "evitación, decisiones impulsivas"],
                ["Repetición", "más desorden + más ansiedad"],
              ],
            },
          ].map((ex) => (
            <motion.div
              key={ex.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 shadow-card border border-border"
            >
              <h3 className="font-display text-2xl text-primary">{ex.title}</h3>
              <ul className="mt-5 space-y-3">
                {ex.steps.map(([k, v]) => (
                  <li key={k} className="flex gap-3 items-start">
                    <span className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">{k}:</span>{" "}
                      <span className="text-muted-foreground">{v}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* BREAK THE CYCLE */}
      <Section className="bg-background">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl text-balance leading-[1.05]">
            ¡Rompe el <span className="font-script text-accent text-5xl md:text-7xl">ciclo!</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Aprende una nueva respuesta.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { word: "Pausa", sub: "detente", icon: Heart },
            { word: "Claridad", sub: "identifica", icon: Compass },
            { word: "Elección", sub: "elige tu reacción", icon: Sparkles },
          ].map((s, i) => (
            <motion.div
              key={s.word}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative p-10 rounded-3xl bg-gradient-to-br from-secondary to-card border border-border shadow-card text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl gradient-blue flex items-center justify-center text-white">
                <s.icon className="w-8 h-8" />
              </div>
              <div className="mt-6 font-display text-4xl text-primary">{s.word}</div>
              <div className="mt-1 text-sm uppercase tracking-widest text-accent">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
          {[
            "No repites porque quieres… repites porque algo se activa dentro de ti.",
            "No es falta de disciplina… es falta del mapa para salir del sufrimiento.",
            "No estás fallando… estás viendo solo una parte del proceso del dolor.",
          ].map((t) => (
            <p key={t} className="text-muted-foreground italic leading-relaxed px-4">
              {t}
            </p>
          ))}
        </div>
      </Section>

      {/* MAPA */}
      <Section id="mapa" className="bg-sky-soft/40">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 gradient-blue opacity-20 blur-3xl rounded-[3rem]" />
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-soft">
              <img src={calmWoman} alt="Calma" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">El Mapa</p>
            <h2 className="mt-3 text-4xl md:text-5xl text-balance leading-tight">
              Todo lo que te pasa por dentro tiene <span className="font-script text-primary text-5xl md:text-6xl">estructura</span>.
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "¿Qué pasó?",
                "¿Qué pensaste?",
                "¿Qué sentiste?",
                "¿Qué hiciste?",
                "¿Qué costo y resultado tuvo?",
              ].map((q, i) => (
                <li key={q} className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border">
                  <span className="w-9 h-9 rounded-full gradient-warm flex items-center justify-center font-semibold text-foreground">
                    {i + 1}
                  </span>
                  <span className="text-lg text-foreground">{q}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-display italic text-2xl text-primary">
              Aquí es donde empieza el cambio.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section className="bg-background">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-balance">
            No es información. <span className="font-script text-accent text-5xl md:text-6xl">Es un proceso.</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { title: "Alivio", text: "Bajas el dolor emocional.", img: calmWoman },
            { title: "Reconstrucción", text: "Conectas contigo mismo.", img: t1 },
            { title: "Cambio desde la raíz", text: "Dejas de repetir.", img: couple },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden shadow-card border border-border bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-7">
                <div className="text-xs uppercase tracking-widest text-accent font-semibold">Etapa {i + 1}</div>
                <h3 className="mt-2 font-display text-3xl text-primary">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* TWO WORLDS */}
      <Section className="gradient-hero">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-balance leading-tight">
            Tu entorno refuerza la misma versión de ti. <br />
            <span className="font-script text-primary text-5xl md:text-6xl">El mapa lo cambia.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl p-8 bg-card/80 backdrop-blur border border-border shadow-card">
            <div className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">Sin mapa · El Loop</div>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              {["Finanzas insuficientes", "Relaciones dolorosas", "Enojo y reactividad", "Trabajo sufrido", "Vida sin propósito"].map((x) => (
                <li key={x} className="flex gap-3 items-center">
                  <X className="w-5 h-5 text-destructive shrink-0" /> {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-8 gradient-blue text-white shadow-soft">
            <div className="text-sm uppercase tracking-widest text-white/70 font-semibold">Con el mapa · Tu nueva vida</div>
            <ul className="mt-5 space-y-3">
              {["Relaciones en armonía", "Finanzas saludables", "Vida sana", "Paz interior", "Trabajo disfrutable"].map((x) => (
                <li key={x} className="flex gap-3 items-center">
                  <Check className="w-5 h-5 text-accent shrink-0" /> {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* COMMUNITY */}
      <Section id="comunidad" className="bg-background">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">Por eso existe</p>
          <h2 className="mt-3 text-4xl md:text-6xl text-balance">
            La <span className="font-script text-primary text-5xl md:text-7xl">Comunidad</span> Psicánica
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Un espacio donde comprendes lo que te pasa… y empiezas a salir del ciclo.
            Con estructura, guía y acompañamiento.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-5 text-center">
          {[
            { icon: Compass, label: "Con estructura" },
            { icon: Users, label: "Con guía" },
            { icon: Heart, label: "Con acompañamiento" },
          ].map((p) => (
            <div key={p.label} className="p-8 rounded-3xl bg-secondary border border-border">
              <p.icon className="w-8 h-8 mx-auto text-primary" />
              <p className="mt-3 font-display text-xl">{p.label}</p>
            </div>
          ))}
        </div>

        {/* What changes */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h3 className="font-display text-3xl md:text-4xl text-primary">Lo que empieza a cambiar</h3>
            <ul className="mt-6 space-y-4">
              {[
                "Dejas de reaccionar en automático.",
                "Empiezas a ver con claridad.",
                "Dejas de volver al mismo lugar.",
                "Empiezas a sentirte en control.",
                "Dejas de pelear contigo.",
                "Tomas decisiones con dirección.",
              ].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 gradient-warm opacity-30 blur-2xl rounded-[3rem]" />
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-soft">
              <img src={manPortrait} alt="Cambio real" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* AUTHORITY */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-white">
            Esto <span className="italic">no</span> es teoría.
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {[
              { n: "+40", t: "años de desarrollo" },
              { n: "Real", t: "aplicado en crisis, relaciones y decisiones" },
              { n: "Funciona", t: "cuando tu mente y tu corazón no pueden más" },
            ].map((s) => (
              <div key={s.t} className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
                <div className="font-display text-5xl text-accent">{s.n}</div>
                <p className="mt-2 text-white/80">{s.t}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="bg-background">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl">
            Cambios visibles en nuestra <span className="font-script text-accent text-5xl md:text-6xl">comunidad</span>
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { img: t1, name: "María Ortiz", quote: "Volví a respirar." },
            { img: t2, name: "Pedro Juárez", quote: "Entendí qué me pasaba." },
            { img: t3, name: "Ana D'tal", quote: "Dejé de volver al mismo lugar." },
          ].map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden bg-card border border-border shadow-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-7">
                <p className="font-script text-3xl text-primary leading-tight">"{p.quote}"</p>
                <p className="mt-3 text-sm text-muted-foreground">— {p.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* OFFER */}
      <Section id="unirme" className="gradient-hero">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">Comunidad Psicánica</p>
            <h2 className="mt-3 text-4xl md:text-5xl text-balance leading-tight">
              Sé parte de un espacio donde el cambio <span className="font-script text-primary text-5xl md:text-6xl">empieza a ser real.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Puedes seguir intentando salir del loop desde el mismo lugar de siempre… o dar un paso distinto hoy.
            </p>

            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-display text-6xl text-primary">$750</span>
              <span className="text-muted-foreground">MXN / mes</span>
            </div>
            <p className="text-sm text-muted-foreground">Sin riesgo. Sin presión.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton variant="primary">
                Registro online <ArrowRight className="w-4 h-4" />
              </CTAButton>
              <CTAButton variant="warm">
                <MessageCircle className="w-4 h-4" /> Registro por WhatsApp
              </CTAButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-card border border-border shadow-soft p-8"
          >
            <h3 className="font-display text-2xl text-primary">Lo que incluye tu membresía</h3>
            <ul className="mt-6 space-y-3.5">
              {[
                "Mapa interno inicial",
                "1 sesión grupal quincenal de liberación emocional",
                "1 sesión grupal quincenal de coaching",
                "Videos de orientación",
                "Diagnóstico emocional mensual",
                "Comunidad y acompañamiento online",
                "Precio preferencial en eventos",
              ].map((b) => (
                <li key={b} className="flex gap-3 items-start">
                  <span className="mt-0.5 w-6 h-6 rounded-full gradient-warm flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-foreground" />
                  </span>
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 rounded-2xl bg-accent-soft/60 border border-accent/30 flex gap-4 items-center">
              <ShieldCheck className="w-10 h-10 text-primary shrink-0" />
              <div>
                <div className="font-semibold text-foreground">Pruébalo sin riesgo</div>
                <p className="text-sm text-muted-foreground">
                  30 días para vivirlo. Si no es para ti, te devolvemos el 100% de tu inversión.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FOR YOU / NOT FOR YOU */}
      <Section className="bg-background">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl p-8 bg-secondary border border-primary/20">
            <h3 className="font-display text-2xl text-primary">Esto es para ti si…</h3>
            <ul className="mt-5 space-y-3">
              {[
                "Vuelves al mismo patrón.",
                "Quieres entenderte de verdad.",
                "Estás listo para cambiar.",
                "Buscas un camino claro y comprobado.",
              ].map((x) => (
                <li key={x} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary mt-0.5" /> <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-8 bg-card border border-border">
            <h3 className="font-display text-2xl text-muted-foreground">Esto no es para ti si…</h3>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              {[
                "Solo buscas información.",
                "No quieres verte a ti mismo.",
                "No estás listo para cambiar tu respuesta.",
                "Tienes miedo a que no funcione y prefieres seguir igual.",
              ].map((x) => (
                <li key={x} className="flex gap-3 items-start">
                  <X className="w-5 h-5 mt-0.5" /> <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="gradient-blue text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl text-white text-balance leading-[1.05]">
            El dolor es inevitable.<br />
            El sufrimiento… <span className="font-script text-accent text-5xl md:text-7xl">se vuelve opcional.</span>
          </h2>
          <p className="mt-6 text-xl text-white/85">
            No estás perdido. Te falta un mapa.
          </p>
          <div className="mt-10">
            <CTAButton variant="warm" className="!text-base !px-10 !py-4">
              Quiero el mapa <ArrowRight className="w-5 h-5" />
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground px-6 md:px-10 py-14">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <Brand light />
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Cambia desde la raíz. Una comunidad para vivir distinto.
            </p>
          </div>
          <div className="space-y-2 text-sm text-white/80">
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> 000 1234 5678</div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /> hola@psicanica.com</div>
            <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-accent" /> www.psicanica.com</div>
          </div>
          <div className="text-sm text-white/70">
            <p>© {new Date().getFullYear()} Psicánica.</p>
            <p className="mt-1">Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
