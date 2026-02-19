import { Link } from "react-router-dom";
import { Instagram, Youtube, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.15em] text-primary font-semibold">
              EMERSION MUSIC
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Where music becomes experience. Founded by Emer Kinsella in Culver City, Los Angeles.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider text-primary mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Concerts", href: "/concerts" },
                { label: "Music Production", href: "/music-production" },
                { label: "About", href: "/about" },
                { label: "Shop", href: "/shop" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider text-primary mb-4">Programs</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Artist Residency", href: "/programs/residency" },
                { label: "Workshops", href: "/programs/workshops" },
                { label: "Private Lessons", href: "/programs/lessons" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider text-primary mb-4">Connect</h4>
            <p className="text-sm text-muted-foreground mb-1">Culver City, Los Angeles</p>
            <p className="text-sm text-muted-foreground mb-4">California, USA</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Music">
                <Music size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Emersion Music. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
