import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ColorSchemeToggle } from "~/components/ui/color-scheme-toggle/color-scheme-toggle";
import styles from "./navbar.module.css";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Freelance", id: "freelance" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${className || ""}`}>
        <div className={styles.container}>
          <button className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className={styles.logoGradient}>&lt;/&gt;</span>
            <span className={styles.logoText}>Manish<span className={styles.logoDot}>.</span>dev</span>
          </button>
          <div className={styles.nav}>
            <ul className={styles.navLinks}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button className={styles.navLink} onClick={() => scrollToSection(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <ColorSchemeToggle />
            <button
              className={styles.mobileMenuButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ""}`}>
        <ul className={styles.mobileNavLinks}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button className={styles.mobileNavLink} onClick={() => scrollToSection(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
