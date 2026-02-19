import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Users, GraduationCap, ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const programs = [
  {
    icon: Sparkles,
    title: "Artist Residency",
    description: "A 4-day immersive experience with private mentorship, studio access, accommodation, and professional musicians.",
    price: "From $1,200",
    href: "/programs/residency",
  },
  {
    icon: Users,
    title: "Workshops",
    description: "Group sessions on composition, film/TV scoring, songwriting, music business, and performance — in-person and virtual.",
    price: "Various pricing",
    href: "/programs/workshops",
  },
  {
    icon: GraduationCap,
    title: "Private Lessons",
    description: "One-on-one instruction in violin, composition, production, and creative coaching with Emer Kinsella.",
    price: "From $150/session",
    href: "/programs/lessons",
  },
];

const Programs = () => {
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-sans">Learn & Create</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl font-semibold">Programs</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4 text-muted-foreground max-w-xl mx-auto font-sans">
            Choose the path that fits your creative goals — from intensive residencies to flexible private instruction.
          </motion.p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            {programs.map((prog, i) => (
              <motion.div key={prog.title} variants={fadeUp} custom={i}>
                <Link to={prog.href} className="group flex flex-col md:flex-row items-start md:items-center gap-6 p-8 rounded-lg border border-border bg-card hover:border-primary/40 transition-all duration-500">
                  <prog.icon className="w-10 h-10 text-primary shrink-0" />
                  <div className="flex-1">
                    <h2 className="font-serif text-2xl mb-2 group-hover:text-primary transition-colors">{prog.title}</h2>
                    <p className="text-muted-foreground font-sans text-sm">{prog.description}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-primary font-sans">{prog.price}</span>
                    <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Programs;
