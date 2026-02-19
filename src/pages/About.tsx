import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Music,
  ArrowRight,
  Award,
  Film,
  MapPin,
  Users,
  Star,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeUp } from "@/lib/animations";

const filmCredits = [
  {
    title: "Sense8",
    role: "Composer (with Johnny Klimek)",
    type: "Netflix Series",
  },
  {
    title: "Jungle",
    role: "Composer (with Johnny Klimek)",
    type: "Feature Film — starring Daniel Radcliffe",
  },
  {
    title: "She the Creator",
    role: "Composer",
    type: "Psychological Film — dir. Ettie Wahl",
  },
  {
    title: "I Hate New Years",
    role: "Score",
    type: "Feature Film — Tello Films",
  },
  {
    title: "In Orbit",
    role: "Original Score",
    type: "Short Film — dir. Katie McNeice",
  },
  {
    title: "Faith",
    role: "Score",
    type: "Documentary — Vancouver & Atlanta LGBT Film Festivals",
  },
  {
    title: "Suburban Jungle",
    role: "Score",
    type: "Short Film — Best Short, San Pedro Int'l Film Festival 2018",
  },
];

const awards = [
  {
    title: "Reel Change: Fund for Diversity in Film Scoring",
    org: "New Music USA / SESAC",
    detail: "First-ever recipient — grant for scoring She the Creator",
  },
  {
    title: "Best Original Score",
    org: "Bucharest Shortcut Cinefest",
    detail: "Winner",
  },
  {
    title: "Best Original Score",
    org: "South Film & Arts Festival, Chile",
    detail: "Winner",
  },
  {
    title: "Best Original Score",
    org: "ISFMF (International Sound & Film Music Festival)",
    detail: "Nominee",
  },
];

const ensemblePerformances = [
  "The Culver Steps — Culver City, LA",
  "The Hotel Cafe — Hollywood, LA",
  "Immersive site-specific concerts across Los Angeles",
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-sans"
          >
            The Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl font-semibold max-w-3xl mx-auto"
          >
            About <span className="text-gradient-gold italic">Emersion</span>
          </motion.h1>
        </div>
      </section>

      {/* Bio Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Photo placeholder */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center border border-border sticky top-28 overflow-hidden"
            >
              <div className="text-center text-muted-foreground">
                <Music className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p className="text-sm font-sans">Photo of Emer Kinsella</p>
              </div>
            </motion.div>

            {/* Bio text */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
                <h2 className="font-serif text-3xl font-semibold">Emer Kinsella</h2>
                <Badge variant="outline" className="border-primary/30 text-primary font-sans text-xs">
                  <MapPin className="w-3 h-3 mr-1" /> Los Angeles
                </Badge>
              </motion.div>

              <motion.p variants={fadeUp} custom={0} className="text-lg text-foreground/90 leading-relaxed mb-6 font-sans italic">
                "Redefining Contemporary Composition with Captivating Strings and Innovative Soundscapes"
              </motion.p>

              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-4 font-sans">
                Emer Kinsella is a film composer, classically-trained experimental violinist, and songwriter from Dublin, Ireland. She is known for her textural and minimal introspective string writing, blended together with ambient electronics and poignant soundscapes.
              </motion.p>

              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-4 font-sans">
                At the heart of her musical voice is the violin, an instrument she has played since the age of two. Emer's compositions transport listeners to otherworldly realms, blending hypnotic strings and haunting melodies. With a moody and introspective tone, her work pushes the boundaries of contemporary classical composition, fusing organic and synthetic elements to create a unique and evocative sonic experience.
              </motion.p>

              <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed mb-4 font-sans">
                Her credits include working with Johnny Klimek on the Netflix show <span className="text-foreground">Sense8</span> and the motion picture <span className="text-foreground">Jungle</span> starring Daniel Radcliffe. She was the first recipient of the <span className="text-foreground">Reel Change: The Fund for Diversity in Film Scoring</span> award from New Music USA and SESAC, which supported her score for the psychological film <span className="text-foreground">She the Creator</span> by director Ettie Wahl.
              </motion.p>

              <motion.p variants={fadeUp} custom={4} className="text-muted-foreground leading-relaxed mb-4 font-sans">
                Beyond composition, Emer is a creator and artistic director of social impact and immersive site-specific concerts. She redefines the role of audience and musician by allowing audiences to move freely and placing participants in non-traditional settings and unexpected locations — activating public spaces through community and sound.
              </motion.p>

              <motion.p variants={fadeUp} custom={5} className="text-muted-foreground leading-relaxed mb-8 font-sans">
                Based in Culver City — in the heart of LA's creative corridor near Sony Pictures, Amazon Studios, and Apple — Emer founded Emersion to share her philosophy: that music is not just heard, but experienced.
              </motion.p>

              <motion.div variants={fadeUp} custom={6}>
                <h3 className="font-serif text-xl font-semibold mb-4 text-primary">
                  The Emersion Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed font-sans">
                  Emersion is more than a music company — it's a philosophy. Every program, event, and collaboration is designed to dissolve the boundary between performer and listener, creating moments of genuine connection through sound. From the Artist Residency to immersive concerts to private instruction, Emersion exists to make music a lived experience.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Film & TV Credits */}
      <section className="py-24 border-y border-border" style={{ backgroundColor: "hsl(var(--charcoal-light))" }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center justify-center gap-3 mb-3">
              <Film className="w-5 h-5 text-primary" />
              <h2 className="font-serif text-3xl font-semibold">Film & Television</h2>
            </div>
            <p className="text-muted-foreground text-center font-sans mb-12 max-w-lg mx-auto">
              Selected scoring credits across feature films, series, and documentaries.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3 max-w-3xl mx-auto">
            {filmCredits.map((credit, i) => (
              <motion.div
                key={credit.title}
                variants={fadeUp}
                custom={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-all group gap-2"
              >
                <div className="flex items-start gap-3">
                  <Play className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-base group-hover:text-primary transition-colors">
                      {credit.title}
                    </h4>
                    <p className="text-xs text-muted-foreground font-sans">{credit.type}</p>
                  </div>
                </div>
                <span className="text-xs text-foreground/60 font-sans sm:text-right">{credit.role}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center justify-center gap-3 mb-3">
              <Award className="w-5 h-5 text-primary" />
              <h2 className="font-serif text-3xl font-semibold">Awards & Grants</h2>
            </div>
            <p className="text-muted-foreground text-center font-sans mb-12 max-w-lg mx-auto">
              Recognition for excellence in film scoring and composition.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto"
          >
            {awards.map((award, i) => (
              <motion.div
                key={`${award.title}-${award.org}`}
                variants={fadeUp}
                custom={i}
                className="p-5 rounded-xl border border-border bg-card"
              >
                <Star className="w-5 h-5 text-primary mb-3" />
                <h4 className="font-serif text-base mb-1">{award.title}</h4>
                <p className="text-sm text-primary font-sans mb-1">{award.org}</p>
                <p className="text-xs text-muted-foreground font-sans">{award.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Emersion Ensemble */}
      <section className="py-24 border-y border-border" style={{ backgroundColor: "hsl(var(--charcoal-light))" }}>
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center justify-center gap-3 mb-3">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="font-serif text-3xl font-semibold">The Emersion Ensemble</h2>
            </div>
            <p className="text-muted-foreground text-center font-sans mb-8 max-w-2xl mx-auto">
              EMER and The Emersion Ensemble bring Emer's compositions to life through immersive, site-specific live performances that redefine the relationship between audience and musician.
            </p>

            <div className="bg-card border border-border rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
              <p className="text-foreground/80 font-sans text-sm leading-relaxed mb-6">
                The ensemble has performed at landmark Los Angeles venues including The Culver Steps and The Hotel Cafe Hollywood. These concerts place audiences inside the music — free to move, explore, and experience sound from every angle in non-traditional settings and unexpected locations.
              </p>

              <p className="text-foreground/80 font-sans text-sm leading-relaxed mb-6">
                Emer's collaborative work extends across disciplines. Her project <span className="text-foreground italic">Double: body as source</span> — a duet with dancer-choreographer Megan Lowe responding to visual artist Mary Little's series and poet Eavan Boland's <span className="italic">Anna Liffey</span> — was featured in the <span className="text-foreground">Due West</span> series celebrating Irish artists in the Western US.
              </p>

              <div className="border-t border-border pt-5">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-sans mb-3">
                  Performance History
                </p>
                <ul className="space-y-2">
                  {ensemblePerformances.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm font-sans text-foreground/70">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Discography teaser */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center justify-center gap-3 mb-3">
              <Music className="w-5 h-5 text-primary" />
              <h2 className="font-serif text-3xl font-semibold">Discography</h2>
            </div>
            <p className="text-muted-foreground text-center font-sans mb-10 max-w-lg mx-auto">
              Original compositions and soundtracks available worldwide.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
              <div className="p-5 rounded-xl border border-border bg-card">
                <Badge variant="outline" className="border-primary/30 text-primary font-sans text-xs mb-3">
                  Latest Release
                </Badge>
                <h4 className="font-serif text-lg mb-1">Concurrence</h4>
                <p className="text-xs text-muted-foreground font-sans mb-3">
                  8-track album · 12" Vinyl LP & Digital
                </p>
                <p className="text-xs text-foreground/60 font-sans leading-relaxed">
                  Contingency · Catalyst · Back on this Planet · Congruence · Crest of Waves · International Waters
                </p>
                <Button asChild variant="outline" size="sm" className="mt-4 border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary">
                  <Link to="/shop">View in Shop <ArrowRight className="w-3 h-3 ml-1.5" /></Link>
                </Button>
              </div>

              <div className="p-5 rounded-xl border border-border bg-card">
                <Badge variant="outline" className="border-border text-muted-foreground font-sans text-xs mb-3">
                  Soundtrack
                </Badge>
                <h4 className="font-serif text-lg mb-1">In Orbit (OST)</h4>
                <p className="text-xs text-muted-foreground font-sans mb-3">
                  6-track soundtrack · Streaming
                </p>
                <p className="text-xs text-foreground/60 font-sans leading-relaxed">
                  Dysphoria · First Sight · Letting Go · The Choice · A New Beginning · Intrinsic Perceptions
                </p>
                <Button variant="outline" size="sm" className="mt-4 border-border text-muted-foreground hover:bg-primary/10 hover:text-primary" asChild>
                  <a href="https://open.spotify.com/album/316U5Fq3x6yvHpP3VbBiub" target="_blank" rel="noopener noreferrer">
                    Listen on Spotify <ArrowRight className="w-3 h-3 ml-1.5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">Ready to Begin?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto font-sans">
              Explore our programs and find the right path for your musical journey.
            </p>
            <Button asChild size="lg" className="px-8 shimmer">
              <Link to="/programs">
                Explore Programs <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
