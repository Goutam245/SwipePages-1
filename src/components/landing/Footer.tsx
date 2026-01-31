import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const audienceLinks = [
  { label: "Primary School", href: "/primary" },
  { label: "High School", href: "/highschool" },
  { label: "University", href: "/college" },
];

const subjectLinks = [
  { label: "Mathematics", href: "/maths" },
  { label: "English", href: "/english" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="py-12 md:py-16">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1 space-y-4">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-ct-green flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Canberra Tutoring</span>
              </Link>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Transforming learning experiences for Canberra students since 2018. Personalised tutoring that delivers real results.
              </p>
              <TrustBadge rating={5} reviews="500+ students" className="bg-white/10 text-primary-foreground" />
              
              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ct-green transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ct-green transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ct-green transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-ct-green transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <h4 className="font-semibold text-lg pt-4">By Age</h4>
              <ul className="space-y-2">
                {audienceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-ct-green transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contact Us</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+61261234567" className="flex items-center gap-2 text-primary-foreground/70 hover:text-ct-green transition-colors text-sm">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    (02) 6123 4567
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@canberratutoring.com.au" className="flex items-center gap-2 text-primary-foreground/70 hover:text-ct-green transition-colors text-sm">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    hello@canberratutoring.com.au
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    Canberra, ACT, Australia
                  </div>
                </li>
              </ul>
              
              <div className="pt-4">
                <h4 className="font-semibold text-lg mb-2">Hours</h4>
                <p className="text-sm text-primary-foreground/70">Mon-Fri: 8am - 8pm</p>
                <p className="text-sm text-primary-foreground/70">Sat: 9am - 5pm</p>
                <p className="text-sm text-primary-foreground/70">Sun: By appointment</p>
              </div>
            </div>

            {/* Subjects & Legal */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Subjects</h4>
              <ul className="space-y-2">
                {subjectLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-ct-green transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold text-lg pt-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-primary-foreground/70 hover:text-ct-green transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/70 hover:text-ct-green transition-colors text-sm">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/70 hover:text-ct-green transition-colors text-sm">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary-foreground/70 hover:text-ct-green transition-colors text-sm">
                    Child Safety
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Canberra Tutoring. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              ABN: 12 345 678 901 | Working with Children Check Compliant
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
