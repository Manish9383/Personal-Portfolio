import { useEffect } from "react";
import { X, Github, ExternalLink } from "lucide-react";
import { Button } from "~/components/ui/button/button";
import styles from "./project-modal.module.css";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  demo: string;
  image: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <img src={project.image} alt={project.title} />
          <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
            <X />
          </button>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.techStack}>
            <h4 className={styles.techStackTitle}>Technologies Used</h4>
            <div className={styles.techList}>
              {project.techStack.map((tech) => (
                <span key={tech} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.actions}>
            <Button onClick={() => window.open(project.github, "_blank")}>
              <Github className={styles.icon} />
              View Code
            </Button>
            <Button variant="outline" onClick={() => window.open(project.demo, "_blank")}>
              <ExternalLink className={styles.icon} />
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
