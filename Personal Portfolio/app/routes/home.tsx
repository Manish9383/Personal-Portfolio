import type { Route } from "./+types/home";
import { Navbar } from "~/components/navbar/navbar";
import { HeroSection } from "~/components/hero-section/hero-section";
import { AboutSection } from "~/components/about-section/about-section";
import { SkillsSection } from "~/components/skills-section/skills-section";
import { ExperienceSection } from "~/components/experience-section/experience-section";
import { ProjectsSection } from "~/components/projects-section/projects-section";
import { FreelanceSection } from "~/components/freelance-section/freelance-section";
import { CertificationsSection } from "~/components/certifications-section/certifications-section";
import { ContactSection } from "~/components/contact-section/contact-section";
import { Footer } from "~/components/footer/footer";
import styles from "./home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Manish Patel Portfolio" },
    {
      name: "description",
      content:
        "Portfolio of Manish Patel, Software Engineer at Capgemini. Specializing in Java, Spring Boot, Angular, Microservices, and Cloud Technologies.",
    },
    {
      name: "keywords",
      content:
        "Manish Patel, Full Stack Developer, Java Developer, Spring Boot, Angular, Microservices, Azure, Software Engineer, Capgemini",
    },
  ];
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <FreelanceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
