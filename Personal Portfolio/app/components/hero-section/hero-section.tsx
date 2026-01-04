import { useState, useEffect } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "~/components/ui/button/button";
import styles from "./hero-section.module.css";

const typingSkills = ["Spring Boot", "Angular", "Microservices", "Cloud & DevOps"];

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSkill = typingSkills[skillIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentSkill.length) {
            setTypedText(currentSkill.substring(0, typedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(typedText.substring(0, typedText.length - 1));
          } else {
            setIsDeleting(false);
            setSkillIndex((skillIndex + 1) % typingSkills.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, skillIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <Sparkles className={styles.badgeIcon} />
            <span>Available for new opportunities</span>
          </div>

          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Manish Patel</span>
          </h1>

          <div className={styles.subtitle}>
            <span className={styles.role}>Full Stack Developer</span>
            <span className={styles.separator}>•</span>
            <span className={styles.typing}>
              {typedText}
              <span className={styles.cursor}>|</span>
            </span>
          </div>

          <p className={styles.description}>
            Innovative Full Stack Developer passionate about creating robust and scalable solutions. Expertise in building microservices architectures, RESTful APIs, and modern web applications.
          </p>

          <div className={styles.actions}>
            <Button size="lg" className={styles.primaryBtn} onClick={() => scrollToSection("projects")}>
              View Projects
              <ArrowRight className={styles.btnIcon} />
            </Button>
            <Button size="lg" variant="outline" className={styles.secondaryBtn} onClick={() => window.open('https://drive.google.com/file/d/1-y_6k4j2NMROfQ4YeK94nVMFOJ2rY95Y/view?usp=sharing', '_blank')}>
              <Download className={styles.btnIcon} />
              Download Resume
            </Button>
          </div>

          <div className={styles.social}>
            <a
              href="https://github.com/Manish9383"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/manish-patel-543333227"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:patelmanish131149198@gmail.com"
              className={styles.socialLink}
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.codeVisual}>
            <div className={styles.floatingCode}>
              <pre className={styles.code}>
                <code>
{`const developer = {
  name: 'Manish Patel',
  role: 'Full Stack Developer',
  skills: ['Java', 'Spring Boot', 
           'Angular', 'React'],
  passion: 'Building Amazing Apps'
};`}
                </code>
              </pre>
            </div>
            <div className={styles.techIcons}>
              <div className={styles.techIcon} style={{ animationDelay: '0s' }}>☕</div>
              <div className={styles.techIcon} style={{ animationDelay: '0.2s' }}>⚛️</div>
              <div className={styles.techIcon} style={{ animationDelay: '0.4s' }}>🅰️</div>
              <div className={styles.techIcon} style={{ animationDelay: '0.6s' }}>🐍</div>
              <div className={styles.techIcon} style={{ animationDelay: '0.8s' }}>☁️</div>
              <div className={styles.techIcon} style={{ animationDelay: '1s' }}>🚀</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scroll}>
        <div className={styles.scrollIndicator}></div>
      </div>
    </section>
  );
}
