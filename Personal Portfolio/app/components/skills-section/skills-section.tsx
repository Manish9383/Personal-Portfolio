import { Server, Code, Database, Cloud, Wrench, BarChart3 } from "lucide-react";
import styles from "./skills-section.module.css";

const skillCategories = [
  {
    title: "Backend",
    icon: Server,
    color: "blue",
    skills: ["Java", "Spring Boot", "Spring Security", "Hibernate", "REST APIs", "Microservices"],
  },
  {
    title: "Frontend",
    icon: Code,
    color: "purple",
    skills: ["Angular", "React", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "green",
    skills: ["MySQL", "MongoDB", "SQL"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "orange",
    skills: ["Azure", "Docker", "CI/CD", "Data Factory"],
  },
  {
    title: "Data Engineering",
    icon: BarChart3,
    color: "cyan",
    skills: ["Microsoft Fabric", "Python", "PySpark", "Data Lakehouse", "Power BI", "USGS API", "Earthquake API"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "pink",
    skills: ["Git", "GitHub", "RabbitMQ", "Postman"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Skills & Expertise</span>
          <h2 className={styles.title}>Technologies I Work With</h2>
          <p className={styles.subtitle}>
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`${styles.card} ${styles[category.color]}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <Icon className={styles.icon} />
                  </div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>
                <div className={styles.skillTags}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className={styles.tag}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.background}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </div>
    </section>
  );
}
