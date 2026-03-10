import Link from 'next/link';
import SchemaOrg from './SchemaOrg';
import styles from './Breadcrumb.module.css';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.lucidllp.com${item.href}`,
    })),
  };

  return (
    <>
      <SchemaOrg schema={schema} />
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <div className="container">
          <ol className={styles.list}>
            {items.map((item, index) => (
              <li key={item.href} className={styles.item}>
                {index < items.length - 1 ? (
                  <>
                    <Link href={item.href} className={styles.link}>{item.name}</Link>
                    <span className={styles.separator} aria-hidden="true">›</span>
                  </>
                ) : (
                  <span className={styles.current} aria-current="page">{item.name}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}