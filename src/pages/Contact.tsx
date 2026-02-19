import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fadeUp } from "@/lib/animations";

const Contact = () => {
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-primary text-sm uppercase tracking-[0.3em] mb-4 font-sans">Get in Touch</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl font-semibold">Contact</motion.h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-3 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <motion.div variants={fadeUp} custom={0}>
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <Input id="name" placeholder="Your name" className="mt-1.5 bg-card border-border focus-visible:ring-primary" />
              </motion.div>
              <motion.div variants={fadeUp} custom={1}>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="mt-1.5 bg-card border-border focus-visible:ring-primary" />
              </motion.div>
              <motion.div variants={fadeUp} custom={2}>
                <Label htmlFor="subject" className="text-foreground">Subject</Label>
                <Select>
                  <SelectTrigger className="mt-1.5 bg-card border-border focus:ring-primary">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    <SelectItem value="residency">Artist Residency</SelectItem>
                    <SelectItem value="workshops">Workshops</SelectItem>
                    <SelectItem value="lessons">Private Lessons</SelectItem>
                    <SelectItem value="events">Events & Booking</SelectItem>
                    <SelectItem value="press">Press & Media</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
              <motion.div variants={fadeUp} custom={3}>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea id="message" placeholder="Tell us about your inquiry..." rows={5} className="mt-1.5 bg-card border-border focus-visible:ring-primary" />
              </motion.div>
              <motion.div variants={fadeUp} custom={4}>
                <Button type="submit" size="lg" className="w-full sm:w-auto px-8 shimmer">Send Message</Button>
              </motion.div>
            </motion.form>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2 space-y-8">
              <motion.div variants={fadeUp} custom={0}>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-serif text-lg mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground font-sans">Culver City, Los Angeles</p>
                    <p className="text-sm text-muted-foreground font-sans">California, USA</p>
                    <p className="text-xs text-muted-foreground/70 mt-1 font-sans">Near Sony Pictures, Amazon Studios & Apple</p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} custom={1}>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-serif text-lg mb-1">Booking Inquiries</h3>
                    <p className="text-sm text-muted-foreground font-sans">For concert bookings, residency applications, and partnership inquiries, please use the form or reach out directly.</p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} custom={2} className="p-6 rounded-lg border border-border bg-card">
                <p className="text-sm text-muted-foreground font-sans italic">"Whether you're an emerging artist seeking mentorship or an organization looking to create a unique musical experience, I'd love to hear from you."</p>
                <p className="text-sm text-primary mt-3 font-sans">— Emer Kinsella</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
