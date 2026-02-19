import { motion } from "framer-motion";
import { Music, Film, Disc3, FileMusic, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";

const services = [
  {
    icon: Music,
    title: "Original Music",
    description:
      "Bespoke original compositions crafted from scratch — from cinematic orchestral works and string quartets to electronic-acoustic hybrids. Every piece is tailored to your creative vision and delivered production-ready.",
  },
  {
    icon: Film,
    title: "Film / TV / Commercial / Video Game Scoring",
    description:
      "End-to-end scoring for visual media. Whether it's an indie feature, network series, national campaign, or interactive game world, Emer composes and produces music that elevates story, emotion, and brand.",
  },
  {
    icon: Disc3,
    title: "Sync Licensing",
    description:
      "License existing tracks from the Emersion Music catalog for film, TV, advertising, and digital media placements. A curated library of cinematic, emotive, and genre-spanning compositions ready for sync.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We discuss your project, creative direction, timeline, and budget to establish a clear brief.",
  },
  {
    step: "02",
    title: "Composition",
    description: "Emer composes demos and sketches based on your brief, refining until the direction feels right.",
  },
  {
    step: "03",
    title: "Production",
    description: "Full production with live instruments, professional mixing, and mastering to deliver broadcast-ready assets.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Final files delivered in all required formats with full documentation and licensing.",
  },
];

const credits = [
  "Netflix — Sense8",
  "Jungle (feat. Daniel Radcliffe)",
  "She the Creator",
  "Outfest LA — Best Score",
  "SESAC Award Recipient",
  "Reel Change Fund for Diversity",
];

const MusicProduction = () => (
  <>
    {/* Hero */}
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-6 text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-sans">
          Emersion Music
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold">
          Music Production
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-6 text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto font-sans font-light">
          Original music, scoring for film, TV, commercials, and video games, and sync licensing — composed and produced by Emer Kinsella.
        </motion.p>
      </div>
    </section>

    {/* Services */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <motion.p variants={fadeUp} custom={0} className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-sans">Services</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl md:text-5xl font-bold">What We Create</motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8 max-w-4xl mx-auto">
          {services.map((svc, i) => (
            <motion.div key={svc.title} variants={fadeUp} custom={i} className="flex flex-col md:flex-row gap-6 p-8 md:p-10 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-500">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <svc.icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-3">{svc.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-sans">{svc.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Process */}
    <section className="py-24 bg-card/50 border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <motion.p variants={fadeUp} custom={0} className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-sans">How It Works</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl md:text-4xl font-bold">The Process</motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {process.map((p, i) => (
            <motion.div key={p.step} variants={fadeUp} custom={i} className="text-center md:text-left">
              <span className="font-serif text-4xl font-bold text-primary/30">{p.step}</span>
              <h3 className="font-serif text-lg font-semibold mt-2 mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">{p.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Credits */}
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-primary text-sm uppercase tracking-[0.2em] mb-8 font-sans">
          Select Credits & Recognition
        </motion.p>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 max-w-3xl mx-auto">
          {credits.map((credit, i) => (
            <motion.span key={credit} variants={fadeUp} custom={i} className="text-lg font-serif tracking-wider text-muted-foreground/60 hover:text-primary/70 transition-colors duration-300">
              {credit}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Let's Create Together</h2>
          <p className="text-primary-foreground/70 font-sans mb-8 max-w-lg mx-auto">
            Have a project that needs original music, scoring, or a sync placement? Let's talk about your vision.
          </p>
          <Button asChild size="lg" className="rounded-full px-8 bg-background text-foreground hover:bg-background/90 font-semibold">
            <Link to="/contact">Start a Conversation <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </>
);

export default MusicProduction;
