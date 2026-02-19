import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Music, ExternalLink, Disc3, Download, Headphones } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const tracks = [
  { num: 1, title: "Contingency", duration: "5:01" },
  { num: 2, title: "Catalyst", duration: "3:48" },
  { num: 3, title: "Back on this Planet (Instrumental)", duration: "4:51" },
  { num: 4, title: "Congruence", duration: "4:54" },
  { num: 5, title: "Crest of Waves", duration: "4:20" },
  { num: 6, title: "International Waters", duration: "3:41" },
  { num: 7, title: "Contingency (Instrumental)", duration: "5:01" },
  { num: 8, title: "Back on this Planet", duration: "4:51" },
];

const products = [
  {
    title: 'Concurrence 12" Vinyl LP',
    price: "From $40.00",
    format: "Vinyl",
    icon: Disc3,
    description:
      "Limited pressing 12\" vinyl LP featuring all 8 tracks. Includes printed inner sleeve with liner notes and artwork.",
  },
  {
    title: "Concurrence (Digital)",
    price: "From $10.00",
    format: "Digital",
    icon: Download,
    description:
      "High-quality digital download of the full Concurrence album. WAV and MP3 formats available.",
  },
];

const SHOP_URL = "https://www.emerkinsella.com/shop-emer";

const Shop = () => (
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
          Music & Merch
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl font-semibold"
        >
          Shop
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-muted-foreground max-w-xl mx-auto font-sans"
        >
          Latest music and merch from Emer Kinsella. All purchases are handled through our official store.
        </motion.p>
      </div>
    </section>

    {/* Products */}
    <section className="pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                variants={fadeUp}
                custom={i}
                className="rounded-xl border border-border bg-card p-6 flex flex-col hover:border-primary/30 transition-all group"
              >
                {/* Album art placeholder */}
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center border border-border mb-5 overflow-hidden">
                  <Music className="w-16 h-16 text-muted-foreground/20" />
                </div>

                <Badge
                  variant="outline"
                  className="border-primary/30 text-primary font-sans text-xs w-fit mb-3"
                >
                  <Icon className="w-3 h-3 mr-1" />
                  {product.format}
                </Badge>

                <h3 className="font-serif text-xl group-hover:text-primary transition-colors mb-1">
                  {product.title}
                </h3>
                <p className="font-serif text-2xl text-primary mb-3">{product.price}</p>
                <p className="text-sm text-muted-foreground font-sans mb-5 flex-1">
                  {product.description}
                </p>

                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shimmer"
                >
                  <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                    Buy Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>

    {/* Track Listing */}
    <section className="pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Headphones className="w-5 h-5 text-primary" />
            <h2 className="font-serif text-2xl">Track Listing</h2>
          </div>

          <div className="rounded-xl border border-border bg-card overflow-hidden">
            {tracks.map((track, i) => (
              <div
                key={track.num}
                className={`flex items-center gap-4 px-5 py-3.5 hover:bg-primary/5 transition-colors ${
                  i < tracks.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="text-xs text-muted-foreground font-sans w-6 text-right">
                  {track.num}
                </span>
                <span className="flex-1 font-sans text-sm text-foreground/80">
                  {track.title}
                </span>
                <span className="text-xs text-muted-foreground font-sans">
                  {track.duration}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button asChild variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary">
              <a href="https://emerkinsella.bandcamp.com/album/concurrence" target="_blank" rel="noopener noreferrer">
                Listen on Bandcamp <ExternalLink className="w-3.5 h-3.5 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-border text-muted-foreground hover:bg-primary/10 hover:text-primary">
              <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
                Visit Full Store <ExternalLink className="w-3.5 h-3.5 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default Shop;
