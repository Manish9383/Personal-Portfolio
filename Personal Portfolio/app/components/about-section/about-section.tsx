import { Code2, Rocket, Users, Award } from "lucide-react";
import styles from "./about-section.module.css";

const stats = [
  { icon: Code2, label: "Projects Completed", value: "25+" },
  { icon: Rocket, label: "Technologies", value: "15+" },
  { icon: Users, label: "Clients Satisfied", value: "10+" },
  { icon: Award, label: "Certifications", value: "5" },
];

export function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>About Me</span>
          <h2 className={styles.title}>Passionate About Building Exceptional Software</h2>
          <p className={styles.subtitle}>
            Crafting scalable solutions with modern technologies and best practices
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.bio}>
              <p>
                Innovative Full Stack Developer at <strong>Capgemini</strong> passionate about creating robust and scalable solutions. I specialize in building microservices architectures, RESTful APIs, and modern web applications.
              </p>
              <p>
                My tech stack includes <strong>Java, Spring Boot, Angular, React</strong>, and various cloud
                technologies including <strong>Azure and Microsoft Fabric</strong>. I'm committed to delivering high-quality, maintainable code and innovative solutions that
                drive business value.
              </p>
              <p>
                Currently focused on microservices architecture, cloud-native development, data engineering with Microsoft Fabric, and exploring the latest in
                AI and machine learning integration.
              </p>
            </div>
          </div>

          <div className={styles.stats}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statIcon}>
                    <Icon />
                  </div>
                  <div className={styles.statContent}>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
