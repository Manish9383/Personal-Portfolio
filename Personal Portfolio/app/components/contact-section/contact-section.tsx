import { useState } from "react";
import { Mail, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "~/components/ui/button/button";
import styles from "./contact-section.module.css";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:patelmanish131149198@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Get In Touch</span>
          <h2 className={styles.title}>Let's Work Together</h2>
          <p className={styles.subtitle}>
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Mail />
              </div>
              <div>
                <h3 className={styles.infoTitle}>Email</h3>
                <a href="mailto:patelmanish131149198@gmail.com" className={styles.infoLink}>
                  patelmanish131149198@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <MapPin />
              </div>
              <div>
                <h3 className={styles.infoTitle}>Location</h3>
                <p className={styles.infoText}>Bengaluru, India</p>
              </div>
            </div>

            <div className={styles.social}>
              <a
                href="https://linkedin.com/in/manish-patel-543333227"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Linkedin />
                LinkedIn
              </a>
              <a
                href="https://github.com/Manish9383"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Github />
                GitHub
              </a>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" size="lg" className={styles.submitBtn}>
              <Send className={styles.btnIcon} />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
