import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
  CheckCircle,
  Clock,
  MapPin,
  Calendar,
  Music,
  Star,
  Quote,
  Sunrise,
  Coffee,
  Mic,
  Moon,
} from "lucide-react";
import { fadeUp } from "@/lib/animations";

const features = [
  { text: "3 hours daily one-on-one mentorship with Emer", detail: "Composition, arranging, production, performance" },
  { text: "Private studio access throughout your stay", detail: "24/7 access to a professional recording space" },
  { text: "Accommodation in Culver City", detail: "Comfortable private room near the studio" },
  { text: "Professional session musicians on call", detail: "Collaborate with LA's finest players" },
  { text: "All gear and equipment provided", detail: "Mics, instruments, DAW, plugins — everything you need" },
  { text: "Final showcase opportunity", detail: "Perform or present your work at the end of your residency" },
];

const targetAudience = [
  { title: "Singer-Songwriters", description: "Refine your sound, develop arrangements, and record with professional musicians." },
  { title: "Composers", description: "Score to picture, develop your compositional voice, and build your portfolio." },
  { title: "Producers", description: "Learn studio techniques, collaborate with live players, and polish productions." },
  { title: "Instrumentalists", description: "Expand your creative practice beyond performance into composition and recording." },
];

const dailySchedule = [
  { time: "8:00 AM", icon: Sunrise, label: "Morning", description: "Settle in, warm up, and set intentions for the day in the studio." },
  { time: "9:00 AM", icon: Coffee, label: "Mentorship Session", description: "3 hours of one-on-one work with Emer — composition, production, or performance coaching." },
  { time: "12:00 PM", icon: Clock, label: "Lunch Break", description: "Explore Culver City's restaurants and recharge." },
  { time: "1:30 PM", icon: Mic, label: "Studio Time", description: "Independent creative work with full studio access. Session musicians available." },
  { time: "5:00 PM", icon: Music, label: "Review & Reflect", description: "End-of-day debrief with Emer. Review progress, set goals for tomorrow." },
  { time: "Evening", icon: Moon, label: "Free Time", description: "Optional evening events, concerts, or continued studio work." },
];

const testimonials = [
  {
    quote: "The residency completely transformed how I approach songwriting. Having Emer's undivided attention for four days unlocked something I didn't know was there.",
    name: "Sarah M.",
    role: "Singer-Songwriter, Nashville",
  },
  {
    quote: "I came in with rough demos and left with two fully produced tracks. The session musicians were incredible, and the studio is world-class.",
    name: "James R.",
    role: "Producer, London",
  },
  {
    quote: "As a film composer, getting mentorship from someone who's scored for Netflix and Paramount was invaluable. This was the best investment in my career.",
    name: "David K.",
    role: "Composer, New York",
  },
];

const faqs = [
  {
    question: "What skill level do I need to be?",
    answer: "The residency is designed for intermediate to advanced musicians who have a clear creative direction. You don't need to be a professional, but you should be comfortable with your instrument or DAW and have specific goals for the residency.",
  },
  {
    question: "What should I bring?",
    answer: "Bring your instrument (if applicable), any works-in-progress you want to develop, a laptop if you work digitally, and an open mind. All studio gear, mics, and recording equipment are provided.",
  },
  {
    question: "Is accommodation included in the price?",
    answer: "Yes. The $1,200 fee includes a private room in Culver City, walking distance from the studio. It covers all four nights of your stay.",
  },
  {
    question: "Can I extend my residency?",
    answer: "Yes, additional days can be arranged based on studio availability. Extended stays are $350/day and include continued mentorship and studio access.",
  },
  {
    question: "How do I book?",
    answer: "Submit an inquiry through the form below with your preferred dates and a brief description of your goals. Emer will review your application and schedule a short call to discuss whether the residency is a good fit.",
  },
  {
    question: "What's the cancellation policy?",
    answer: "Full refund if cancelled 30+ days before your start date. 50% refund for 14-30 days. No refund within 14 days. Rescheduling is free with 14+ days notice, subject to availability.",
  },
  {
    question: "Do I keep the rights to music I create?",
    answer: "Absolutely. You retain 100% ownership of all music, recordings, and compositions created during your residency.",
  },
];

const walkAways = [
  "Professionally recorded tracks ready for release",
  "A refined creative process and compositional voice",
  "Industry connections in the LA music scene",
  "Personalized feedback on your portfolio",
  "A clear roadmap for your next creative phase",
  "Lasting mentorship relationship with Emer",
];

const Residency = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-sans">
            Immersive Program
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl font-semibold">
            Artist Residency
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-muted-foreground max-w-xl mx-auto font-sans text-lg">
            4 days of focused creation, mentorship, and collaboration in the heart of LA's creative corridor.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 shimmer">
              <a href="#apply">Apply Now</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-foreground/20 text-foreground bg-foreground/5 hover:bg-foreground/10">
              <a href="#pricing">View Pricing</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Calendar, label: "4 Days", sub: "Fully immersive" },
              { icon: MapPin, label: "Culver City, LA", sub: "Near Sony & Amazon Studios" },
              { icon: Clock, label: "Rolling Availability", sub: "Book when you're ready" },
            ].map((item, i) => (
              <motion.div key={item.label} variants={fadeUp} custom={i} className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold font-sans">{item.label}</p>
                  <p className="text-xs text-muted-foreground font-sans">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="pb-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} custom={0} className="text-primary text-sm uppercase tracking-[0.2em] mb-3 font-sans">Everything You Need</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl md:text-4xl font-semibold mb-10">What's Included</motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, i) => (
                <motion.div key={feat.text} variants={fadeUp} custom={i + 2} className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-500">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold font-sans">{feat.text}</p>
                    <p className="text-xs text-muted-foreground font-sans mt-1">{feat.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-28 bg-card/50 border-y border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} custom={0} className="text-primary text-sm uppercase tracking-[0.2em] mb-3 font-sans text-center">Find Your Path</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-center">Who Is This For?</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {targetAudience.map((item, i) => (
                <motion.div key={item.title} variants={fadeUp} custom={i + 2} className="p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-500 group">
                  <h3 className="font-serif text-lg mb-2 text-primary group-hover:text-primary/80 transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-sans">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* A Typical Day */}
      <section className="py-28">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} custom={0} className="text-primary text-sm uppercase tracking-[0.2em] mb-3 font-sans text-center">Your Experience</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-center">A Typical Day</motion.h2>
            <div className="space-y-0">
              {dailySchedule.map((item, i) => (
                <motion.div key={item.label} variants={fadeUp} custom={i + 2} className="flex gap-5 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500 shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    {i < dailySchedule.length - 1 && <div className="w-px flex-1 bg-border" />}
                  </div>
                  <div className="pb-10">
                    <p className="text-xs text-primary font-sans font-medium mb-1">{item.time}</p>
                    <h3 className="font-serif text-lg mb-1">{item.label}</h3>
                    <p className="text-sm text-muted-foreground font-sans">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-card/50 border-y border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} custom={0} className="text-primary text-sm uppercase tracking-[0.2em] mb-3 font-sans text-center">What They Say</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-center">Past Residents</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div key={t.name} variants={fadeUp} custom={i + 2} className="p-8 rounded-2xl border border-border bg-card flex flex-col hover:border-primary/30 hover:shadow-card-hover transition-all duration-500">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-sm text-foreground/90 font-sans leading-relaxed flex-1 italic">"{t.quote}"</p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star key={si} className="w-3 h-3 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm font-semibold font-sans">{t.name}</p>
                    <p className="text-xs text-muted-foreground font-sans">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You'll Walk Away With */}
      <section className="py-28">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} custom={0} className="text-primary text-sm uppercase tracking-[0.2em] mb-3 font-sans text-center">The Outcome</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl md:text-4xl font-semibold mb-10 text-center">What You'll Walk Away With</motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {walkAways.map((item, i) => (
                <motion.div key={item} variants={fadeUp} custom={i + 2} className="flex items-center gap-3 p-4 rounded-xl hover:bg-card/50 transition-colors">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground font-sans">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-28 bg-card/50 border-y border-border scroll-mt-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.p variants={fadeUp} custom={0} className="text-primary text-sm uppercase tracking-[0.2em] mb-3 font-sans">Investment</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl md:text-4xl font-semibold">Pricing</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div variants={fadeUp} custom={2} className="p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-500">
              <p className="text-sm text-muted-foreground font-sans mb-1">Standard Residency</p>
              <p className="font-serif text-4xl text-primary font-semibold mb-4">$1,200</p>
              <ul className="space-y-2 mb-6">
                {["4 days / 4 nights", "12 hours mentorship", "Studio access", "Accommodation", "Session musicians"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full rounded-full shimmer">
                <a href="#apply">Apply Now</a>
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} custom={3} className="p-8 rounded-2xl border border-primary/40 bg-card relative overflow-hidden hover:shadow-card-hover transition-all duration-500 shadow-gold">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-sans px-3 py-1 rounded-bl-lg font-semibold">
                Premium
              </div>
              <p className="text-sm text-muted-foreground font-sans mb-1">Extended Residency</p>
              <p className="font-serif text-4xl text-primary font-semibold mb-4">$2,100</p>
              <ul className="space-y-2 mb-6">
                {["7 days / 7 nights", "21 hours mentorship", "Studio access", "Accommodation", "Session musicians", "Final showcase event", "Professional mixing session"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full rounded-full shimmer">
                <a href="#apply">Apply Now</a>
              </Button>
            </motion.div>
          </motion.div>
          <p className="text-center text-xs text-muted-foreground font-sans mt-6">
            $300 deposit secures your spot. Remaining balance due 14 days before arrival.
          </p>
        </div>
      </section>

      {/* About Your Mentor */}
      <section className="py-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} custom={0} className="aspect-square bg-muted rounded-2xl flex items-center justify-center border border-border overflow-hidden shadow-gold">
              <div className="text-center text-muted-foreground">
                <Music className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p className="text-sm">Photo of Emer</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} custom={1}>
              <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3 font-sans">Your Mentor</p>
              <h2 className="font-serif text-3xl font-semibold mb-4">Emer Kinsella</h2>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-3">
                An Irish-born, LA-based violinist, composer, and recording artist who has scored for Netflix, Hulu, NatGeo, and Paramount.
              </p>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4">
                She's collaborated with legendary songwriter Diane Warren, spoken at SXSW and GameSoundCon, and serves as a Grammy voting member. Through Emersion, she brings that world-class experience directly to emerging artists.
              </p>
              <Button asChild variant="outline" className="rounded-full border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary">
                <Link to="/about">Full Bio <ArrowRight className="w-3.5 h-3.5 ml-1.5" /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-card/50 border-y border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} custom={0} className="text-primary text-sm uppercase tracking-[0.2em] mb-3 font-sans text-center">Common Questions</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl md:text-4xl font-semibold mb-10 text-center">FAQ</motion.h2>
            <motion.div variants={fadeUp} custom={2}>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-2xl bg-card px-5 data-[state=open]:border-primary/30">
                    <AccordionTrigger className="text-sm font-sans font-semibold hover:text-primary text-left py-4 [&[data-state=open]]:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground font-sans leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-28 scroll-mt-20">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} custom={0} className="text-primary text-sm uppercase tracking-[0.2em] mb-3 font-sans text-center">Get Started</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl md:text-4xl font-semibold mb-4 text-center">Apply for the Residency</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-sm text-muted-foreground font-sans text-center mb-10 max-w-md mx-auto">
              Tell us about yourself and your goals. Emer will review your application and reach out to discuss next steps.
            </motion.p>

            {formSubmitted ? (
              <motion.div variants={fadeUp} custom={3} className="p-8 rounded-2xl border border-primary/30 bg-card text-center shadow-gold">
                <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl mb-2">Application Received</h3>
                <p className="text-sm text-muted-foreground font-sans">
                  Thank you! Emer will review your application and get back to you within 48 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form variants={fadeUp} custom={3} onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-sans font-medium mb-1.5 block">Full Name</label>
                    <Input placeholder="Your name" required className="bg-background border-border focus-visible:ring-primary" />
                  </div>
                  <div>
                    <label className="text-sm font-sans font-medium mb-1.5 block">Email</label>
                    <Input type="email" placeholder="your@email.com" required className="bg-background border-border focus-visible:ring-primary" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-sans font-medium mb-1.5 block">Primary Instrument / Discipline</label>
                    <Input placeholder="e.g., Violin, Vocals, Production" required className="bg-background border-border focus-visible:ring-primary" />
                  </div>
                  <div>
                    <label className="text-sm font-sans font-medium mb-1.5 block">Preferred Package</label>
                    <Select>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select package" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard — 4 Days ($1,200)</SelectItem>
                        <SelectItem value="extended">Extended — 7 Days ($2,100)</SelectItem>
                        <SelectItem value="undecided">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-sans font-medium mb-1.5 block">Preferred Dates</label>
                  <Input placeholder="e.g., March 2026, flexible" className="bg-background border-border focus-visible:ring-primary" />
                </div>
                <div>
                  <label className="text-sm font-sans font-medium mb-1.5 block">Tell Us About Your Goals</label>
                  <Textarea placeholder="What do you hope to accomplish during the residency? Share any relevant background, links to your music, or specific areas you'd like to focus on." rows={5} required className="bg-background border-border focus-visible:ring-primary resize-none" />
                </div>
                <div>
                  <label className="text-sm font-sans font-medium mb-1.5 block">Link to Your Music (optional)</label>
                  <Input placeholder="Spotify, SoundCloud, YouTube, website..." className="bg-background border-border focus-visible:ring-primary" />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full shimmer">
                  Submit Application <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground font-sans text-center">
                  No commitment required. We'll schedule a call to discuss if the residency is the right fit.
                </p>
              </motion.form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Residency;
