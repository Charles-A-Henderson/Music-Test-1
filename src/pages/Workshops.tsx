import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Film,
  Music,
  Briefcase,
  Mic2,
  Monitor,
  MapPin,
  Clock,
  Users,
  Star,
  CheckCircle2,
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

type Format = "all" | "in-person" | "virtual";

const workshops = [
  {
    id: "film-scoring",
    title: "Composing for Film & TV",
    tagline: "From concept to cue sheet — the working composer's process",
    icon: Film,
    format: ["In-Person", "Virtual"] as const,
    duration: "3-Hour Intensive",
    groupSize: "8–12 participants",
    price: "$275",
    credential: "Emer scored Netflix's Sense8 with Johnny Klimek and the award-winning short In Orbit, screened at Cork, Galway, and Outfest LA.",
    description:
      "Learn how professional film composers approach a project from first spotting session to final mix. This workshop covers dramatic scoring techniques, communicating with directors, building tension with strings, and navigating the business side of sync licensing.",
    topics: [
      "Spotting sessions & dramatic analysis",
      "Writing to picture — tempo mapping & hit points",
      "Textural string writing for emotional storytelling",
      "Working with music supervisors & editors",
      "Building your scoring demo reel",
    ],
  },
  {
    id: "string-arranging",
    title: "String Arranging for Producers",
    tagline: "Add cinematic depth to any genre",
    icon: Music,
    format: ["Virtual"] as const,
    duration: "2-Hour Session",
    groupSize: "10–20 participants",
    price: "$150",
    credential: "Drawing from her work on the Concurrence album — 8 tracks of layered contemporary string compositions blending organic and synthetic elements.",
    description:
      "Whether you produce pop, hip-hop, electronic, or ambient music, real string arrangements elevate everything. Learn voicing, orchestration fundamentals, and how to communicate with session players to get the sound in your head onto the track.",
    topics: [
      "String voicing & range fundamentals",
      "Writing for quartet vs. full section",
      "Arranging over modern production",
      "Notation vs. guide tracks for session players",
      "Mixing strings into contemporary production",
    ],
  },
  {
    id: "songwriting",
    title: "Songwriting Intensive",
    tagline: "Craft songs that connect — from melody to meaning",
    icon: Mic2,
    format: ["In-Person"] as const,
    duration: "Full Day (6 hours)",
    groupSize: "6–10 participants",
    price: "$425",
    credential: "Emer's compositions on Concurrence — including Contingency, Catalyst, and Crest of Waves — showcase her gift for blending haunting melodies with introspective storytelling.",
    description:
      "An immersive day of writing, workshopping, and refining original material. Explore melodic construction, lyric craft, harmonic experimentation, and arranging — then perform your new work for the group in our Culver City studio.",
    topics: [
      "Melodic development & motif work",
      "Lyric writing — narrative vs. abstract approaches",
      "Harmonic tension & resolution techniques",
      "Arranging for solo performer vs. ensemble",
      "Live workshopping & constructive feedback",
    ],
  },
  {
    id: "music-business",
    title: "Music Business & Licensing 101",
    tagline: "Turn your music into a sustainable career",
    icon: Briefcase,
    format: ["Virtual"] as const,
    duration: "2-Hour Session",
    groupSize: "15–30 participants",
    price: "$95",
    credential: "As the first recipient of the Reel Change: Fund for Diversity in Film Scoring (New Music USA / SESAC), Emer has navigated grants, licensing, and the business of composition firsthand.",
    description:
      "Demystify publishing, sync licensing, royalties, and grants. Learn how to pitch your music for film, TV, and advertising — and how to build multiple income streams as an independent artist or composer.",
    topics: [
      "Publishing, PROs & royalty structures",
      "Sync licensing — how placements happen",
      "Building relationships with music supervisors",
      "Grant writing for composers & artists",
      "Creating sustainable income streams",
    ],
  },
  {
    id: "performance",
    title: "Performance & Stage Presence",
    tagline: "Command the room — from intimate venues to immersive concerts",
    icon: Users,
    format: ["In-Person"] as const,
    duration: "Half Day (4 hours)",
    groupSize: "6–8 participants",
    price: "$325",
    credential: "Emer has performed with The Emersion Ensemble at The Culver Steps and The Hotel Cafe Hollywood, pioneering immersive site-specific concerts that redefine the audience-performer relationship.",
    description:
      "Develop your stage presence, audience engagement, and the art of creating immersive musical experiences. This workshop covers traditional performance skills alongside Emer's unique approach to site-specific and experiential concerts.",
    topics: [
      "Stage presence & physical awareness",
      "Audience connection & engagement techniques",
      "Designing immersive concert experiences",
      "Site-specific performance — non-traditional venues",
      "Managing performance anxiety",
    ],
  },
  {
    id: "recording",
    title: "Recording & Production Fundamentals",
    tagline: "Capture your sound with clarity and intention",
    icon: Monitor,
    format: ["In-Person", "Virtual"] as const,
    duration: "3-Hour Intensive",
    groupSize: "8–12 participants",
    price: "$275",
    credential: "Emer's self-produced Concurrence album and the In Orbit (Original Motion Picture Soundtrack) on Spotify demonstrate her command of both studio and scoring production workflows.",
    description:
      "From microphone placement to final master, learn the fundamentals of recording acoustic instruments, layering tracks, and producing polished recordings — whether for your own releases, scoring projects, or client work.",
    topics: [
      "Microphone selection & placement for strings",
      "DAW workflow & session organization",
      "Layering & building sonic textures",
      "Mixing fundamentals for composers",
      "Preparing stems & deliverables for clients",
    ],
  },
];

const faqs = [
  {
    q: "Do I need prior experience to attend?",
    a: "It depends on the workshop. Composing for Film & TV and String Arranging assume intermediate music knowledge. The Music Business workshop is open to all levels. Each listing notes any prerequisites.",
  },
  {
    q: "What's included in the price?",
    a: "All workshops include session materials, handouts, and a post-workshop resource guide. In-person workshops include refreshments. Full-day intensives include lunch at our Culver City studio.",
  },
  {
    q: "Can I attend virtually if I'm outside Los Angeles?",
    a: "Yes — workshops marked as 'Virtual' are conducted via Zoom with full interactivity. You'll receive the link 24 hours before the session. Recordings are available for 7 days afterward.",
  },
  {
    q: "Are group discounts available?",
    a: "Yes. Groups of 3+ receive 15% off. Contact us for custom group workshops or private corporate/educational sessions.",
  },
  {
    q: "How far in advance should I register?",
    a: "Workshops fill quickly due to small group sizes. We recommend registering at least 2 weeks in advance. You can join the waitlist if a session is full.",
  },
];

const Workshops = () => {
  const [filter, setFilter] = useState<Format>("all");

  const filtered = workshops.filter((ws) => {
    if (filter === "all") return true;
    if (filter === "in-person") return (ws.format as readonly string[]).includes("In-Person");
    return (ws.format as readonly string[]).includes("Virtual");
  });

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
            Group Learning
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl font-semibold"
          >
            Workshops
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto font-sans text-lg"
          >
            Focused group sessions led by Emer Kinsella — film composer, award-winning recording artist, and creator of immersive concert experiences. Available in-person in Los Angeles and virtually worldwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 shimmer">
              <Link to="/contact">Register Interest</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans"
          >
            {["Netflix — Sense8", "In Orbit — Cork / Outfest LA", "Reel Change Award — SESAC", "The Culver Steps", "Hotel Cafe Hollywood"].map(
              (c) => (
                <span key={c} className="flex items-center gap-2">
                  <Star className="w-3 h-3 text-primary" />
                  {c}
                </span>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-6 flex justify-center gap-3">
          {([
            ["all", "All Workshops"],
            ["in-person", "In-Person (LA)"],
            ["virtual", "Virtual"],
          ] as const).map(([value, label]) => (
            <Button
              key={value}
              variant={filter === value ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(value)}
              className={`rounded-full ${
                filter === value
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {label}
            </Button>
          ))}
        </div>
      </section>

      {/* Workshop Cards */}
      <section className="pb-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {filtered.map((ws, i) => {
              const Icon = ws.icon;
              return (
                <motion.div
                  key={ws.id}
                  variants={fadeUp}
                  custom={i}
                  className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-primary/30 hover:shadow-card-hover transition-all duration-500 group"
                >
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl md:text-2xl group-hover:text-primary transition-colors">
                        {ws.title}
                      </h3>
                      <p className="text-muted-foreground font-sans text-sm mt-1 italic">
                        {ws.tagline}
                      </p>
                    </div>
                    <span className="font-serif text-2xl text-primary shrink-0">
                      {ws.price}
                    </span>
                  </div>

                  {/* Meta badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {ws.format.map((f) => (
                      <Badge
                        key={f}
                        variant="outline"
                        className="border-border text-muted-foreground font-sans text-xs rounded-full"
                      >
                        {f === "In-Person" ? (
                          <MapPin className="w-3 h-3 mr-1" />
                        ) : (
                          <Monitor className="w-3 h-3 mr-1" />
                        )}
                        {f}
                      </Badge>
                    ))}
                    <Badge
                      variant="outline"
                      className="border-border text-muted-foreground font-sans text-xs rounded-full"
                    >
                      <Clock className="w-3 h-3 mr-1" />
                      {ws.duration}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-border text-muted-foreground font-sans text-xs rounded-full"
                    >
                      <Users className="w-3 h-3 mr-1" />
                      {ws.groupSize}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 font-sans text-sm leading-relaxed mb-5">
                    {ws.description}
                  </p>

                  {/* Credential callout */}
                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 mb-5">
                    <p className="text-sm font-sans text-foreground/70 italic">
                      <Star className="w-3.5 h-3.5 text-primary inline mr-1.5 -mt-0.5" />
                      {ws.credential}
                    </p>
                  </div>

                  {/* Topics */}
                  <div className="mb-5">
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-sans mb-3">
                      What You'll Learn
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {ws.topics.map((t) => (
                        <li
                          key={t}
                          className="flex items-start gap-2 text-sm font-sans text-foreground/70"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shimmer"
                    >
                      <Link to="/contact">
                        Register Interest
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Badge
                      variant="outline"
                      className="border-primary/30 text-primary self-center font-sans text-xs px-3 py-1 rounded-full"
                    >
                      Next session dates coming soon
                    </Badge>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-28">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-serif text-3xl text-center mb-10">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border rounded-2xl px-5 bg-card data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="font-serif text-base hover:text-primary py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-sans text-sm pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-28">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Need something custom?
            </h2>
            <p className="text-muted-foreground font-sans mb-6">
              Emer offers private group workshops for organizations, schools, and ensembles. Get in touch to design a session tailored to your team.
            </p>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary"
            >
              <Link to="/contact">
                Inquire About Custom Workshops
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Workshops;
