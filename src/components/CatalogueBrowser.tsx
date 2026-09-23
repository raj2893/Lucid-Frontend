'use client';

// Search + formulation filter for the product catalogue.
// The full list is server-rendered on first paint (every product link is
// in the HTML for crawlers); filtering only hides entries on the client.

import { useMemo, useState } from 'react';
import Link from 'next/link';
import styles from './CatalogueBrowser.module.css';

export interface CatalogueListItem {
  slug: string;
  name: string;
  href: string;
  form: string;
  summary: string;
  packs: string;
  comingSoon: boolean;
}

export interface CatalogueFormOption {
  slug: string;
  name: string;
  count: number;
}

interface CatalogueBrowserProps {
  items: CatalogueListItem[];
  forms: CatalogueFormOption[];
}

const ALL = 'all';

export default function CatalogueBrowser({ items, forms }: CatalogueBrowserProps) {
  const [query, setQuery] = useState('');
  const [form, setForm] = useState<string>(ALL);

  const q = query.trim().toLowerCase();

  const visible = useMemo(
    () =>
      items.filter(
        (item) =>
          (form === ALL || item.form === form) &&
          (q === '' ||
            item.name.toLowerCase().includes(q) ||
            item.summary.toLowerCase().includes(q))
      ),
    [items, form, q]
  );

  const groups = forms
    .map((f) => ({ ...f, items: visible.filter((i) => i.form === f.slug) }))
    .filter((g) => g.items.length > 0);

  const reset = () => {
    setQuery('');
    setForm(ALL);
  };

  return (
    <div className={styles.browser}>
      <div className={styles.controls}>
        <label className={styles.searchLabel} htmlFor="catalogue-search">
          Search by brand name or composition
        </label>
        <input
          id="catalogue-search"
          type="search"
          className={styles.search}
          placeholder="e.g. Pantoluc, Cefixime, 500 mg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
        />

        <div className={styles.filters} role="group" aria-label="Filter by form">
          <button
            type="button"
            className={styles.filter}
            aria-pressed={form === ALL}
            onClick={() => setForm(ALL)}
          >
            All <span className={styles.count}>{items.length}</span>
          </button>
          {forms.map((f) => (
            <button
              key={f.slug}
              type="button"
              className={styles.filter}
              aria-pressed={form === f.slug}
              onClick={() => setForm(f.slug)}
            >
              {f.name} <span className={styles.count}>{f.count}</span>
            </button>
          ))}
        </div>

        <p className={styles.status} aria-live="polite">
          {visible.length === items.length
            ? `${items.length} products`
            : `${visible.length} of ${items.length} products`}
        </p>
      </div>

      {groups.length === 0 ? (
        <div className={styles.empty}>
          <p>No products match &ldquo;{query}&rdquo;.</p>
          <button type="button" className={styles.resetBtn} onClick={reset}>
            Clear search and filters
          </button>
        </div>
      ) : (
        groups.map((group) => (
          <section
            key={group.slug}
            id={`catalogue-${group.slug}`}
            className={styles.group}
            aria-labelledby={`catalogue-${group.slug}-heading`}
          >
            <h3 id={`catalogue-${group.slug}-heading`} className={styles.groupTitle}>
              {group.name}
              <span className={styles.groupCount}>{group.items.length}</span>
            </h3>
            <ul className={styles.grid}>
              {group.items.map((item) => (
                <li key={item.slug}>
                  {/* prefetch off: hundreds of links would otherwise
                      trigger hundreds of background requests on scroll. */}
                  <Link href={item.href} prefetch={false} className={styles.card}>
                    <span className={styles.name}>
                      {item.name}
                      {item.comingSoon && <span className={styles.badge}>Coming soon</span>}
                    </span>
                    {item.summary && <span className={styles.summary}>{item.summary}</span>}
                    {item.packs && <span className={styles.packs}>{item.packs}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  );
}