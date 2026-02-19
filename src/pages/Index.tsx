import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Music,
  Sparkles,
  ArrowRight,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Quote,
  Film,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import heroBg from "@/assets/hero-bg.jpg";

/* ─── Data ─── */
const pillars = [
  {
    icon: Sparkles,
    title: "Immersive Concerts",
    description:
      "Site-specific live performances that dissolve the boundary between artist and audience in unexpected venues across LA.",
    href: "/concerts",
    cta: "Experience a Concert",
  },
  {
    icon: Film,
    title: "Music Production",
    description:
      "Film/TV scoring, custom composition, string arrangements, and sound design for media and experiential events.",
    href: "/music-production",
    cta: "Explore Services",
  },
  {
    icon: GraduationCap,
    title: "Programs",
    description:
      "Artist residency, workshops, and private lessons to develop your musical craft with professional mentorship.",
    href: "/programs",
    cta: "View Programs",
  },
];

const stats = [
  { value: 15, suffix: "+", label: "Years Performing" },
  { value: 50, suffix: "+", label: "Film & TV Credits" },
  { value: 200, suffix: "+", label: "Students Mentored" },
  { value: 8, suffix: "", label: "Awards & Grants" },
];

const testimonials = [
  {
    quote:
      "Working with Emer completely transformed my approach to composition. Her ability to blend classical technique with modern production is unmatched.",
    name: "Sarah M.",
    title: "Composition Student, 2024",
  },
  {
    quote:
      "The Artist Residency was the most creatively fulfilling week of my life. Emer's mentorship pushed me to places I didn't know I could go.",
    name: "James L.",
    title: "Residency Alumni, Spring 2025",
  },
  {
    quote:
      "Emer's film scoring workshop gave me the confidence and tools to land my first sync placement. I can't recommend her teaching enough.",
    name: "Priya K.",
    title: "Workshop Participant",
  },
  {
    quote:
      "The Emersion Music concert experience is unlike anything else in LA. You don't just hear the music — you feel it in your bones.",
    name: "Michael R.",
    title: "Concert Attendee",
  },
];

const credentials = [
  "Netflix",
  "Sense8",
  "SESAC",
  "Bandcamp",
  "Spotify",
  "Outfest LA",
];

const upcomingEvents = [
  {
    date: "Mar 15, 2026",
    title: "Spring Residency Open House",
    location: "Culver City, LA",
  },
  {
    date: "Apr 8, 2026",
    title: "Composing for Film Workshop",
    location: "Virtual",
  },
  {
    date: "May 22, 2026",
    title: "Experiential Concert: Resonance",
    location: "Culver City, LA",
  },
];

/* ─── Counter Component ─── */
const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref} className="font-serif text-4xl md:text-5xl font-bold text-primary">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

/* ─── Page ─── */
const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const nextTestimonial = () =>
    setCurrentTestimonial((c) => (c + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial(
      (c) => (c - 1 + testimonials.length) % testimonials.length
    );

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setNewsletterSubmitted(true);
  };

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Cinematic concert ambiance"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary text-sm uppercase tracking-[0.3em] mb-6 font-sans"
          >
            Culver City, Los Angeles
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight max-w-4xl mx-auto"
          >
            Where Music
            <br />
            Becomes{" "}
            <span className="text-gradient-gold italic">Experience</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto font-sans font-light"
          >
            Immersive concerts, music production, and creative programs —
            crafted by violinist, composer, and recording artist Emer Kinsella.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold shimmer"
            >
              <Link to="/concerts">Immersive Concerts</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-foreground/20 text-foreground bg-foreground/5 hover:bg-foreground/10 text-base font-semibold"
            >
              <Link to="/music-production">Music Production</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-foreground/20 text-foreground bg-foreground/5 hover:bg-foreground/10 text-base font-semibold"
            >
              <Link to="/programs">Programs</Link>
            </Button>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent" />
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="py-16 border-b border-border bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="space-y-2"
              >
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="text-xs text-muted-foreground font-sans font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THREE PILLARS ═══ */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-sans"
            >
              What We Do
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-serif text-3xl md:text-5xl font-bold"
            >
              Three Pillars of Emersion Music
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pillars.map((pillar, i) => (
              <motion.div key={pillar.title} variants={fadeUp} custom={i}>
                <Link
                  to={pillar.href}
                  className="group block h-full p-10 rounded-2xl border border-border bg-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                    <pillar.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-sans mb-8">
                    {pillar.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm text-primary font-sans font-medium opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0">
                    {pillar.cta} <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS CAROUSEL ═══ */}
      <section className="py-28 bg-card/50 border-y border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-sans">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              What People Are Saying
            </h2>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="text-center px-4 md:px-12"
              >
                <Quote className="h-10 w-10 text-primary mx-auto mb-8 opacity-40" />
                <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <p className="font-semibold text-foreground font-sans">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-sm text-muted-foreground font-sans">
                  {testimonials[currentTestimonial].title}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prevTestimonial}
                className="p-2.5 rounded-full border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-muted-foreground" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === currentTestimonial
                        ? "bg-primary scale-125"
                        : "bg-border hover:bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2.5 rounded-full border border-border hover:border-primary/40 hover:bg-primary/5 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOUNDER SPOTLIGHT ═══ */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="aspect-[4/5] bg-muted rounded-2xl flex items-center justify-center border border-border overflow-hidden shadow-gold"
            >
              <div className="text-center text-muted-foreground">
                <Music className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p className="text-sm font-sans">Photo of Emer</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="space-y-6"
            >
              <p className="text-primary text-sm uppercase tracking-[0.2em] font-sans font-medium">
                Meet the Founder
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Emer Kinsella
              </h2>
              <p className="text-muted-foreground leading-relaxed font-sans">
                An Irish-born, LA-based violinist, composer, and recording
                artist, Emer has scored for Netflix's{" "}
                <span className="text-foreground">Sense8</span>, the feature
                film <span className="text-foreground">Jungle</span> starring
                Daniel Radcliffe, and won Best Score at international film
                festivals. She was the first recipient of the{" "}
                <span className="text-foreground">
                  Reel Change: Fund for Diversity in Film Scoring
                </span>
                .
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Through Emersion Music, she creates immersive musical experiences that
                dissolve the boundary between artist and audience —
                transforming how people connect with sound.
              </p>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary"
              >
                <Link to="/about">
                  Read Her Full Story{" "}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF ═══ */}
      <section className="py-14 border-y border-border">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 font-sans">
            As Seen & Heard With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {credentials.map((name) => (
              <span
                key={name}
                className="text-lg md:text-xl font-serif tracking-wider text-muted-foreground/40 hover:text-primary/70 transition-colors duration-300"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ UPCOMING EVENTS ═══ */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-sans"
            >
              Coming Up
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-serif text-3xl md:text-5xl font-bold"
            >
              Upcoming Events
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {upcomingEvents.map((evt, i) => (
              <motion.div
                key={evt.title}
                variants={fadeUp}
                custom={i}
                className="group p-8 rounded-2xl border border-border bg-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-500"
              >
                <p className="text-primary text-sm font-sans mb-3 flex items-center gap-1.5 font-medium">
                  <Calendar className="w-4 h-4" />
                  {evt.date}
                </p>
                <h3 className="font-serif text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {evt.title}
                </h3>
                <p className="text-xs text-muted-foreground flex items-center gap-1.5 font-sans">
                  <MapPin className="w-3.5 h-3.5" />
                  {evt.location}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary"
            >
              <Link to="/concerts">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ NEWSLETTER ═══ */}
      <section className="py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Join the Inner Circle
            </h2>
            <p className="text-primary-foreground/70 mb-10 font-sans text-lg">
              Be the first to know about new concerts, workshops, residency openings,
              and exclusive behind-the-scenes content.
            </p>

            {newsletterSubmitted ? (
              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-lg font-medium font-sans"
              >
                Thank you! Check your inbox for a welcome message. ✨
              </motion.p>
            ) : (
              <form
                onSubmit={handleNewsletter}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-full bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-primary-foreground/30"
                />
                <Button
                  type="submit"
                  className="rounded-full px-8 bg-background text-foreground hover:bg-background/90 font-semibold whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
