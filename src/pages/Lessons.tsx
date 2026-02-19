import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Music,
  Film,
  Headphones,
  Lightbulb,
  CheckCircle2,
  Star,
  MapPin,
  Monitor,
  Clock,
  Sparkles,
  Send,
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

const lessonTypes = [
  {
    id: "violin",
    title: "Violin",
    icon: Music,
    tagline: "From classical foundations to contemporary expression",
    credential:
      "Emer has played violin since the age of two. Her performances with The Emersion Ensemble at The Culver Steps and Hotel Cafe Hollywood showcase a lifelong mastery of the instrument.",
    description:
      "Whether you're a beginner building fundamentals or an advanced player refining your artistic voice, these lessons are tailored to your level and goals. Emer's approach blends classical technique with contemporary and experimental styles.",
    topics: [
      "Classical & contemporary technique",
      "Tone production & intonation",
      "Improvisation & experimental playing",
      "Audition & performance preparation",
      "Repertoire selection & interpretation",
    ],
  },
  {
    id: "composition",
    title: "Composition & Scoring",
    icon: Film,
    tagline: "Write music that moves audiences — on screen and off",
    credential:
      "Emer worked with Johnny Klimek on Netflix's Sense8, scored the award-winning She the Creator (Reel Change Award recipient), and won Best Score at Bucharest Shortcut Cinefest and South Film Arts Festival Chile.",
    description:
      "Learn composition from a working film & TV composer. These lessons cover everything from foundational music theory and melodic development to professional scoring workflows, dramatic analysis, and building a portfolio that gets you hired.",
    topics: [
      "Music theory & harmonic language",
      "Melodic & motivic development",
      "Scoring to picture — tempo, hits & drama",
      "Orchestration & string arranging",
      "Building a scoring portfolio & demo reel",
    ],
  },
  {
    id: "production",
    title: "Recording & Production",
    icon: Headphones,
    tagline: "Capture and shape your sound with professional tools",
    credential:
      "Emer self-produced her Concurrence album and the In Orbit soundtrack (available on Spotify), demonstrating command of both studio recording and scoring production pipelines.",
    description:
      "From microphone technique to final mix, learn the production skills you need to create polished recordings. Sessions are customized to your setup — whether you're working in a home studio or preparing for professional sessions.",
    topics: [
      "DAW setup & workflow optimization",
      "Recording acoustic instruments",
      "Layering, textures & sound design",
      "Mixing fundamentals for composers",
      "Preparing deliverables for clients & sync",
    ],
  },
  {
    id: "coaching",
    title: "Creative Coaching",
    icon: Lightbulb,
    tagline: "Unlock your artistic direction and build a sustainable career",
    credential:
      "As the first recipient of the Reel Change: Fund for Diversity in Film Scoring and artistic director of immersive site-specific concerts, Emer has built a multidisciplinary career across composition, performance, and curation.",
    description:
      "Not every musician needs technique lessons — sometimes you need clarity. These sessions help you define your artistic identity, overcome creative blocks, navigate the industry, and build a career strategy that aligns with your vision.",
    topics: [
      "Defining your artistic voice & brand",
      "Overcoming creative blocks",
      "Career strategy & goal setting",
      "Grant applications & funding",
      "Building an audience & community",
    ],
  },
];

const pricingTiers = [
  {
    label: "Intro Session",
    price: "$100",
    per: "one-time",
    duration: "45 minutes",
    description: "A get-to-know-you session to assess your level, discuss goals, and create a custom lesson plan.",
    features: ["Level assessment", "Goal setting", "Custom curriculum outline"],
    featured: false,
  },
  {
    label: "Single Session",
    price: "$150",
    per: "per session",
    duration: "60 minutes",
    description: "Full-length private lesson — perfect for focused work on a specific skill or project.",
    features: ["Full 60-minute session", "Session notes & resources", "In-person or virtual"],
    featured: false,
  },
  {
    label: "4-Session Pack",
    price: "$540",
    per: "4 sessions",
    duration: "60 min each",
    description: "The most popular option. Commit to consistent growth with a month of weekly lessons.",
    features: ["Save $60 vs. singles", "Priority scheduling", "Progress tracking", "Email support between sessions"],
    featured: true,
    savings: "Save $60",
  },
  {
    label: "8-Session Pack",
    price: "$1,000",
    per: "8 sessions",
    duration: "60 min each",
    description: "For serious students ready for transformation. Two months of dedicated mentorship.",
    features: ["Save $200 vs. singles", "Priority scheduling", "Progress tracking", "Unlimited email support", "One 30-min bonus check-in"],
    featured: false,
    savings: "Save $200",
  },
];

const faqs = [
  {
    q: "What skill levels do you teach?",
    a: "Emer works with all levels — from beginners picking up the violin for the first time to professional composers refining their scoring technique. The intro session helps establish your starting point and goals.",
  },
  {
    q: "Can I take lessons virtually?",
    a: "Absolutely. All lesson types are available via Zoom with full screen-sharing for production and composition sessions. Virtual lessons are equally interactive and effective.",
  },
  {
    q: "Where are in-person lessons held?",
    a: "In-person lessons take place at Emer's studio in Culver City, Los Angeles — conveniently located near major entertainment studios in the heart of LA's creative hub.",
  },
  {
    q: "How do I schedule my sessions?",
    a: "After booking, you'll receive a link to Emer's scheduling calendar. Sessions are available weekdays and select weekends. Pack sessions can be scheduled weekly or bi-weekly.",
  },
  {
    q: "What's your cancellation policy?",
    a: "Sessions can be rescheduled with 24 hours' notice at no charge. Cancellations with less than 24 hours' notice forfeit the session. Pack sessions never expire.",
  },
  {
    q: "Do you teach children?",
    a: "Yes — violin lessons are available for students ages 6 and up. Composition, production, and coaching sessions are best suited for ages 14+.",
  },
];

const Lessons = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            One-on-One
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl font-semibold"
          >
            Private Lessons
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-muted-foreground max-w-2xl mx-auto font-sans text-lg"
          >
            Personalized instruction from a working film composer, recording artist, and lifelong violinist. In-person in Culver City or virtually anywhere in the world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <Badge variant="outline" className="border-border text-muted-foreground font-sans text-xs px-4 py-2 rounded-full">
              <MapPin className="w-3 h-3 mr-1.5" /> Culver City, LA
            </Badge>
            <Badge variant="outline" className="border-border text-muted-foreground font-sans text-xs px-4 py-2 rounded-full">
              <Monitor className="w-3 h-3 mr-1.5" /> Virtual via Zoom
            </Badge>
            <Badge variant="outline" className="border-border text-muted-foreground font-sans text-xs px-4 py-2 rounded-full">
              <Clock className="w-3 h-3 mr-1.5" /> All Levels Welcome
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 shimmer">
              <a href="#book">Book a Lesson</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-foreground/20 text-foreground bg-foreground/5 hover:bg-foreground/10">
              <a href="#pricing">View Pricing</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Lesson Types */}
      <section className="pb-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-serif text-3xl text-center mb-3">What Would You Like to Study?</h2>
            <p className="text-muted-foreground text-center font-sans mb-12 max-w-xl mx-auto">
              Choose a focus area — or combine disciplines across your sessions.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            {lessonTypes.map((lesson, i) => {
              const Icon = lesson.icon;
              return (
                <motion.div
                  key={lesson.id}
                  variants={fadeUp}
                  custom={i}
                  className="rounded-2xl border border-border bg-card p-6 md:p-8 hover:border-primary/30 hover:shadow-card-hover transition-all duration-500 group"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl md:text-2xl group-hover:text-primary transition-colors">
                        {lesson.title}
                      </h3>
                      <p className="text-muted-foreground font-sans text-sm mt-1 italic">
                        {lesson.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-foreground/80 font-sans text-sm leading-relaxed mb-5">
                    {lesson.description}
                  </p>

                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 mb-5">
                    <p className="text-sm font-sans text-foreground/70 italic">
                      <Star className="w-3.5 h-3.5 text-primary inline mr-1.5 -mt-0.5" />
                      {lesson.credential}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-sans mb-3">
                      Areas Covered
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {lesson.topics.map((t) => (
                        <li key={t} className="flex items-start gap-2 text-sm font-sans text-foreground/70">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pb-28 scroll-mt-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-serif text-3xl text-center mb-3">Pricing</h2>
            <p className="text-muted-foreground text-center font-sans mb-12 max-w-xl mx-auto">
              Flexible options for every commitment level. All lesson types use the same pricing.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.label}
                variants={fadeUp}
                custom={i}
                className={`rounded-2xl border p-6 flex flex-col relative hover:shadow-card-hover transition-all duration-500 ${
                  tier.featured
                    ? "border-primary/50 bg-card ring-1 ring-primary/20 shadow-gold"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                {tier.featured && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-sans text-xs rounded-full px-4">
                    <Sparkles className="w-3 h-3 mr-1" /> Most Popular
                  </Badge>
                )}
                <p className="text-sm text-muted-foreground font-sans mb-1">{tier.label}</p>
                <p className="font-serif text-3xl text-primary font-semibold">{tier.price}</p>
                <p className="text-xs text-muted-foreground font-sans mb-1">{tier.per}</p>
                {tier.savings && (
                  <Badge variant="outline" className="border-primary/30 text-primary font-sans text-xs w-fit mt-1 mb-3 rounded-full">
                    {tier.savings}
                  </Badge>
                )}
                <p className="text-xs text-muted-foreground font-sans mb-1 mt-1">
                  <Clock className="w-3 h-3 inline mr-1 -mt-0.5" />
                  {tier.duration}
                </p>
                <p className="text-sm text-foreground/70 font-sans mt-3 mb-4 flex-1">
                  {tier.description}
                </p>
                <ul className="space-y-2 mb-5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs font-sans text-foreground/60">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={tier.featured ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full ${
                    tier.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 w-full shimmer"
                      : "border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary w-full"
                  }`}
                >
                  <a href="#book">{tier.label === "Intro Session" ? "Book Intro" : "Get Started"}</a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book" className="pb-28 scroll-mt-20">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-serif text-3xl text-center mb-3">Book Your First Lesson</h2>
            <p className="text-muted-foreground text-center font-sans mb-10 max-w-lg mx-auto">
              Tell us a bit about yourself and Emer will follow up within 48 hours to schedule your session.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 rounded-2xl border border-primary/30 bg-card shadow-gold"
              >
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-2xl mb-2">Request Received!</h3>
                <p className="text-muted-foreground font-sans text-sm max-w-md mx-auto">
                  Emer will review your request and reach out within 48 hours to schedule your session. Check your email for confirmation.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground font-sans mb-2 block">
                      Full Name *
                    </label>
                    <Input required placeholder="Your name" className="bg-background border-border" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground font-sans mb-2 block">
                      Email *
                    </label>
                    <Input required type="email" placeholder="you@email.com" className="bg-background border-border" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground font-sans mb-2 block">
                      Lesson Type *
                    </label>
                    <Select required>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select focus area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="violin">Violin</SelectItem>
                        <SelectItem value="composition">Composition & Scoring</SelectItem>
                        <SelectItem value="production">Recording & Production</SelectItem>
                        <SelectItem value="coaching">Creative Coaching</SelectItem>
                        <SelectItem value="unsure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground font-sans mb-2 block">
                      Format *
                    </label>
                    <Select required>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="In-person or virtual" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in-person">In-Person (Culver City, LA)</SelectItem>
                        <SelectItem value="virtual">Virtual (Zoom)</SelectItem>
                        <SelectItem value="flexible">Flexible / Either</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-sans mb-2 block">
                    Experience Level
                  </label>
                  <Select>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Your current level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-sans mb-2 block">
                    Tell us about your goals
                  </label>
                  <Textarea
                    placeholder="What are you hoping to achieve? Any specific skills, projects, or deadlines?"
                    rows={4}
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shimmer">
                  <Send className="w-4 h-4 mr-2" />
                  Request a Lesson
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-28">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-serif text-3xl text-center mb-10">Frequently Asked Questions</h2>
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
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Not sure where to start?</h2>
            <p className="text-muted-foreground font-sans mb-6">
              Book a 45-minute intro session. Emer will assess your level, discuss your goals, and recommend a path forward — no commitment required.
            </p>
            <Button asChild variant="outline" className="rounded-full border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Lessons;
