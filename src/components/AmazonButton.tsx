'use client';

// The only reason this is a client component is the analytics click
// handler. Keep it small — it is imported by server components that
// otherwise ship no JS.

import { IconExternal } from './Icons';
import styles from './AmazonButton.module.css';

type GtagFn = (
  command: 'event',
  eventName: string,
  params: Record<string, string>
) => void;

interface AmazonButtonProps {
  /** Amazon listing URL. If empty, the button is not rendered at all. */
  href: string;
  /** Product name — sent to analytics as product_name. */
  productName: string;
  /**
   * Where on the site this button lives, e.g. 'homepage_featured',
   * 'products_face-care', 'blog_related_product'. Sent as `placement`
   * so outbound clicks attribute to a section, not just a page.
   */
  placement: string;
  variant?: 'solid' | 'outline';
  className?: string;
  children?: React.ReactNode;
}

export default function AmazonButton({
  href,
  productName,
  placement,
  variant = 'solid',
  className = '',
  children,
}: AmazonButtonProps) {
  // No confirmed listing yet — render nothing rather than a dead link.
  if (!href) return null;

  const handleClick = () => {
    if (typeof window === 'undefined') return;
    const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
    if (typeof gtag !== 'function') return;

    // NOTE: this records an outbound CLICK only. It is not a purchase
    // and must not be reported as one.
    gtag('event', 'amazon_click', {
      product_name: productName,
      placement,
      page_path: window.location.pathname,
    });
  };

  return (
    
    <a  href={href}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      onClick={handleClick}
      className={`${styles.btn} ${styles[variant]} ${className}`}
    >
      <span>{children ?? 'Buy on Amazon'}</span>
      <IconExternal size={15} className={styles.icon} />
      <span className="sr-only">(opens Amazon in a new tab)</span>
    </a>
  );
}