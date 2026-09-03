'use client';

// ~40 lines of IntersectionObserver instead of an animation library.
// Content is visible by default and only *animates* if JS runs and the
// user has not asked for reduced motion — so nothing is ever hidden
// from a crawler, a no-JS visitor, or a reduced-motion visitor.

import { useEffect, useRef, useState, type ElementType } from 'react';
import styles from './Reveal.module.css';

interface RevealProps {
  children: React.ReactNode;
  /** Stagger within a section, in ms. Keep under ~200. */
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article';
}

export default function Reveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) return;

    const node = ref.current;
    if (!node) return;

    // Only now do we allow the "hidden" start state, so content is never
    // stuck invisible if any of the above bails out.
    setArmed(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Widening to ElementType keeps one ref type across div/section/li/article
  // instead of intersecting their incompatible element interfaces.
  const Tag = as as ElementType;

  return (
    <Tag
      ref={ref}
      className={`${armed ? styles.armed : ''} ${shown ? styles.shown : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}