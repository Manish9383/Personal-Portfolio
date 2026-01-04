import { useState } from "react";
import { ExternalLink, Github, Briefcase } from "lucide-react";
import { ProjectModal } from "~/components/project-modal/project-modal";
import { freelanceProjects } from "~/data/portfolio-data";
import styles from "./freelance-section.module.css";

export function FreelanceSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof freelanceProjects)[0] | null>(null);

  return (
    <section id="freelance" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <Briefcase className={styles.icon} />
            <h2 className={styles.title}>Freelance Projects</h2>
          </div>
          <p className={styles.subtitle}>Client work and independent development projects</p>
        </div>

        <div className={styles.grid}>
          {freelanceProjects.map((project, index) => (
            <div key={project.id} className={styles.card} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.image} loading="lazy" />
                <div className={styles.overlay}>
                  <button className={styles.viewButton} onClick={() => setSelectedProject(project)}>
                    View Details
                  </button>
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      <Github size={18} />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
