import { Award, Cloud, Github, FileCheck } from "lucide-react";
import { certifications } from "~/data/portfolio-data";
import styles from "./certifications-section.module.css";

const iconMap: Record<string, any> = {
  azure: Cloud,
  salesforce: Award,
  github: Github,
  certificate: FileCheck,
};

export function CertificationsSection() {
  return (
    <section id="certifications" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Certifications</span>
          <h2 className={styles.title}>Professional Credentials</h2>
          <p className={styles.subtitle}>
            Continuously learning and staying updated with industry standards
          </p>
        </div>

        <div className={styles.grid}>
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.icon] || Award;
            const content = (
              <>
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.certName}>{cert.name}</h3>
                  <p className={styles.issuer}>Issued by {cert.issuer}</p>
                  {cert.credentialId && (
                    <p className={styles.credentialId}>Credential ID: {cert.credentialId}</p>
                  )}
                  {cert.issued && (
                    <p className={styles.dates}>
                      Issued {cert.issued}
                      {cert.expires && ` • Expires ${cert.expires}`}
                    </p>
                  )}
                </div>
                <div className={styles.badge2}>Verified</div>
              </>
            );
            
            return cert.url ? (
              <a
                key={cert.id}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {content}
              </a>
            ) : (
              <div key={cert.id} className={styles.card} style={{ animationDelay: `${index * 0.1}s` }}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
