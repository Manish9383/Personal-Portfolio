import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects } from "~/data/portfolio-data";
import { ProjectModal } from "~/components/project-modal/project-modal";
import styles from "./projects-section.module.css";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <>
      <section id="projects" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.badge}>Portfolio</span>
            <h2 className={styles.title}>Featured Projects</h2>
            <p className={styles.subtitle}>
              Showcasing my best work in web development, microservices, and AI integration
            </p>
          </div>

          <div className={styles.grid}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={styles.card}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt={project.title} className={styles.image} />
                  <div className={styles.overlay}>
                    <button className={styles.viewButton}>
                      View Details
                      <ArrowRight className={styles.viewIcon} />
                    </button>
                  </div>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.techStack}>
                    {project.techStack.map((tech, i) => (
                      <span key={i} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={styles.links}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className={styles.linkIcon} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className={styles.linkIcon} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  );
}
