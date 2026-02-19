import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import immersiveHero from "@/assets/immersive-hero.webp";

const videos = [
  {
    id: "hDk3HA9UPk0",
    title: "Renovation: Alchemy",
    description:
      "Highlights from the RENOVATION immersive concert at the Culver Steps featuring Intrinsic Strings and The Friidom.",
  },
  {
    id: "pUmzVg-05hw",
    title: "Congruence",
    description:
      "EMERSION live at the Culver Steps with contemporary movement artists The Friidom.",
  },
  {
    id: "YsXeW9gMTR4",
    title: "Deliberation",
    description:
      "Live on the Culver Steps with Emersion — an experiential performance blending strings, electronics, and movement.",
  },
  {
    id: "M3u-sDJhPMw",
    title: "Renovation: Return to Normalcy",
    description:
      "A site-specific experiential concert bringing together artists and community at the Culver Steps.",
  },
];

const events = [
  { date: "Mar 15, 2026", title: "Spring Residency Open House", location: "Culver City, LA", status: "Upcoming" },
  { date: "Apr 8, 2026", title: "Composing for Film Workshop", location: "Virtual", status: "Open" },
  { date: "May 22, 2026", title: "Experiential Concert: Resonance", location: "Culver City, LA", status: "Upcoming" },
  { date: "Jun 14, 2026", title: "Songwriting Intensive", location: "Culver City, LA", status: "Coming Soon" },
];

const Concerts = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={immersiveHero} alt="Emersion Music immersive concert" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-sans">
          Emersion Music Presents
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold">
          Immersive Concerts
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-6 text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto font-sans font-light">
          Site-specific live performances that dissolve the boundary between artist and audience in unexpected venues across Los Angeles.
        </motion.p>
      </div>
    </section>

    {/* Video Showcase */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <motion.p variants={fadeUp} custom={0} className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-sans">
            Case Studies
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl md:text-5xl font-bold">
            Experience the Work
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {videos.map((video, i) => (
            <motion.div key={video.id} variants={fadeUp} custom={i} className="space-y-4">
              <div className="aspect-video rounded-xl overflow-hidden border border-border bg-card">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-xl font-semibold">{video.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">{video.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Upcoming Events */}
    <section className="py-24 bg-card/50 border-y border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
          <motion.p variants={fadeUp} custom={0} className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-sans">
            Coming Up
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl md:text-4xl font-bold">
            Upcoming Events
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
          {events.map((evt, i) => (
            <motion.div key={evt.title} variants={fadeUp} custom={i} className="group p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-all">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-primary text-sm font-sans flex items-center gap-1.5 mb-2"><Calendar className="w-3.5 h-3.5" /> {evt.date}</p>
                  <h3 className="font-serif text-xl group-hover:text-primary transition-colors">{evt.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1"><MapPin className="w-3 h-3" /> {evt.location}</p>
                </div>
                <span className="text-xs text-primary/70 uppercase tracking-wider font-sans shrink-0">{evt.status}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Experience it Live</h2>
          <p className="text-muted-foreground font-sans mb-8 max-w-lg mx-auto">
            Interested in attending an Emersion Music concert or hosting one at your venue? Get in touch.
          </p>
          <Button asChild size="lg" className="rounded-full px-8 shimmer">
            <Link to="/contact">Get in Touch <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </>
);

export default Concerts;
