import styles from './SectionWrapper.module.css';

interface SectionWrapperProps {
  children: React.ReactNode;
  variant?: 'white' | 'grey' | 'dark' | 'primary';
  id?: string;
  className?: string;
  tight?: boolean;
}

export default function SectionWrapper({
  children,
  variant = 'white',
  id,
  className = '',
  tight = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${styles[variant]} ${tight ? styles.tight : ''} ${className}`}
    >
      <div className="container">{children}</div>
    </section>
  );
}