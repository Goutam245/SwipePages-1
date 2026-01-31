import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap, ChevronDown, Phone } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const audienceLinks = [
  { label: "Primary (K-6)", href: "/primary", description: "Ages 5-12" },
  { label: "High School", href: "/highschool", description: "Years 7-12" },
  { label: "University", href: "/college", description: "Tertiary" },
];

const subjectLinks = [
  { label: "Mathematics", href: "/maths" },
  { label: "English", href: "/english" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAudienceDropdown, setShowAudienceDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-lg shadow-soft border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container-narrow">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-ct-green flex items-center justify-center group-hover:scale-105 transition-transform">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground hidden sm:inline">
                Canberra Tutoring
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? "text-ct-green"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Audience Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowAudienceDropdown(true)}
                onMouseLeave={() => setShowAudienceDropdown(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  <span>Students</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showAudienceDropdown ? "rotate-180" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {showAudienceDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-card rounded-xl shadow-large border border-border/50 overflow-hidden"
                    >
                      <div className="p-2">
                        <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          By Age Group
                        </p>
                        {audienceLinks.map((link) => (
                          <Link
                            key={link.href}
                            to={link.href}
                            className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-ct-mint transition-colors"
                          >
                            <span className="font-medium text-foreground">{link.label}</span>
                            <span className="text-xs text-muted-foreground">{link.description}</span>
                          </Link>
                        ))}
                        <div className="border-t border-border/50 my-2" />
                        <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          By Subject
                        </p>
                        {subjectLinks.map((link) => (
                          <Link
                            key={link.href}
                            to={link.href}
                            className="block px-3 py-2.5 rounded-lg hover:bg-ct-mint transition-colors font-medium text-foreground"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+61261234567"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">(02) 6123 4567</span>
              </a>
              <Link to="/contact">
                <PrimaryButton size="sm">
                  Free Assessment
                </PrimaryButton>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
          >
            <div className="bg-card/98 backdrop-blur-lg border-b border-border shadow-large max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="container-narrow py-6 space-y-4">
                {/* Main Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`block py-3 text-lg font-medium transition-colors ${
                      location.pathname === link.href
                        ? "text-ct-green"
                        : "text-foreground hover:text-ct-green"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Audience Links */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3 font-semibold">By Age Group</p>
                  <div className="space-y-2">
                    {audienceLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="flex items-center justify-between py-2 px-4 rounded-xl bg-secondary hover:bg-ct-mint transition-colors"
                      >
                        <span className="font-medium text-foreground">{link.label}</span>
                        <span className="text-xs text-muted-foreground">{link.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Subject Links */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3 font-semibold">Subjects</p>
                  <div className="flex gap-3">
                    {subjectLinks.map((subject) => (
                      <Link
                        key={subject.href}
                        to={subject.href}
                        className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground hover:bg-ct-mint transition-colors"
                      >
                        {subject.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Phone */}
                <div className="pt-4 border-t border-border">
                  <a
                    href="tel:+61261234567"
                    className="flex items-center gap-2 py-3 text-lg font-medium text-foreground"
                  >
                    <Phone className="w-5 h-5 text-ct-green" />
                    (02) 6123 4567
                  </a>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Link to="/contact">
                    <PrimaryButton className="w-full">
                      Book Free Assessment
                    </PrimaryButton>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
