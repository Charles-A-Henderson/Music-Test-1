import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Concerts", href: "/concerts" },
  { label: "Music Production", href: "/music-production" },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Artist Residency", href: "/programs/residency" },
      { label: "Workshops", href: "/programs/workshops" },
      { label: "Private Lessons", href: "/programs/lessons" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProgramsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between h-20 px-6">
        <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-primary font-semibold">
          EMERSION MUSIC
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.label} className="relative group">
                <button
                  className="flex items-center gap-1 text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors uppercase font-sans"
                  onClick={() => setProgramsOpen(!programsOpen)}
                >
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-popover border border-border rounded-xl shadow-xl py-2 min-w-[200px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-muted transition-colors font-sans"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={cn(
                    "text-sm tracking-wide uppercase transition-colors font-sans",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-20 bg-background backdrop-blur-lg z-40 lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-6 -mt-20">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="flex flex-col items-center gap-3">
                    <span className="text-lg font-serif tracking-wider text-primary uppercase">
                      {link.label}
                    </span>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="text-sm text-foreground/70 hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={cn(
                      "text-lg font-serif tracking-wider uppercase transition-colors",
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
