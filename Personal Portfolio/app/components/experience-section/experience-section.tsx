import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "~/data/portfolio-data";
import styles from "./experience-section.module.css";

export function ExperienceSection() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Experience</span>
          <h2 className={styles.title}>Professional Journey</h2>
          <p className={styles.subtitle}>
            Building enterprise solutions and gaining valuable industry experience
          </p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={styles.timelineItem} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={styles.timelineDot}>
                <div className={styles.dotInner}></div>
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                      <Briefcase className={styles.icon} />
                    </div>
                    <div className={styles.headerContent}>
                      <h3 className={styles.role}>{exp.role}</h3>
                      <p className={styles.company}>{exp.company}</p>
                    </div>
                  </div>
                  <div className={styles.period}>
                    <Calendar className={styles.calendarIcon} />
                    <span>{exp.period}</span>
                  </div>
                  <p className={styles.description}>{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
