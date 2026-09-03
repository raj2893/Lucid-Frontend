import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SchemaOrg from '@/components/SchemaOrg';
import ProductCard from '@/components/ProductCard';
import Reveal from '@/components/Reveal';
import {
  IconFlask,
  IconShieldCheck,
  IconHeart,
  IconBox,
  IconUsers,
  IconScale,
  IconArrowRight,
  IconDocument,
} from '@/components/Icons';
import { featuredProducts, concerns } from '@/data/products';
import styles from './home.module.css';

export const metadata: Metadata = {
  title:
    'Lucid Pharmatech LLP | Pharmaceutical Quality, Consumer Health & Skincare',
  description:
    'Lucid Pharmatech LLP is a pharmaceutical company delivering quality products at affordable prices — including a growing range of skincare, sun care and hair care available on Amazon.',
  alternates: { canonical: 'https://www.lucidllp.com' },
  openGraph: {
    title: 'Lucid Pharmatech LLP | Pharmaceutical Quality & Consumer Health',
    description:
      'A pharmaceutical company built on quality and affordability — with a consumer range spanning skincare, sun care and hair care.',
    url: 'https://www.lucidllp.com',
    type: 'website',
  },
};

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Lucid Pharmatech LLP - Home',
  url: 'https://www.lucidllp.com',
  description:
    'Pharmaceutical quality and affordability, plus a consumer range of skincare, sun care and hair care products.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Lucid Pharmatech LLP',
    url: 'https://www.lucidllp.com',
  },
};

const trustPoints = [
  {
    Icon: IconFlask,
    title: 'Pharmaceutical foundation',
    desc: 'A quality-first approach carried from pharmaceutical practice into every consumer formulation.',
  },
  {
    Icon: IconShieldCheck,
    title: 'Quality before everything',
    desc: 'Quality management governs how products are developed, produced and released.',
  },
  {
    Icon: IconHeart,
    title: 'Affordability by design',
    desc: 'Pricing treated as a design constraint, so quality does not become a privilege.',
  },
  {
    Icon: IconBox,
    title: 'A real product range',
    desc: 'Skincare, sun care and hair care available now on Amazon India.',
  },
];

const pillars = [
  {
    Icon: IconShieldCheck,
    title: 'Quality Manufacturing',
    desc: 'Rigorous quality control applied at every stage of production.',
    href: '/quality',
  },
  {
    Icon: IconScale,
    title: 'Ethical Operations',
    desc: 'Business practices grounded in honesty, transparency and responsibility.',
    href: '/ethics',
  },
  {
    Icon: IconUsers,
    title: 'A Dedicated Team',
    desc: 'Pharmaceutical scientists, quality specialists and business professionals.',
    href: '/strengths',
  },
];

const resources = [
  {
    title: 'How to choose a sunscreen for oily skin',
    desc: 'What SPF, broad spectrum and water resistance actually mean in Indian conditions.',
    href: '/blog/best-sunscreen-oily-skin-india-spf-guide',
  },
  {
    title: 'Calamine lotion: uses and benefits',
    desc: 'A complete guide to what calamine does, where it helps and where it does not.',
    href: '/blog/calamine-lotion-uses-benefits-calafine-complete-guide-2026',
  },
  {
    title: 'Choosing a hair oil for your hair type',
    desc: 'Matching oil to scalp type instead of buying by label claims.',
    href: '/blog/how-to-choose-hair-oil-for-your-hair-type-india',
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaOrg schema={homeSchema} />

      {/* ── 1. HERO ──────────────────────────────────────────
          The hero asset is a pale, high-key laboratory photograph with
          its negative space on the LEFT. Text is therefore dark navy on
          the light area — white type would be unreadable here. On mobile
          the image sits below the copy rather than behind it, so contrast
          never depends on where the crop lands. */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroImageWrap}>
          <Image
            src="/images/hero-lucid-pharmatech.png"
            alt="Laboratory bench at Lucid Pharmatech with glassware and a scientist working at a microscope"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 60vw"
            className={styles.heroImage}
          />
          <div className={styles.heroScrim} aria-hidden="true" />
        </div>

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Lucid Pharmatech LLP</p>
            <h1 id="hero-heading" className={styles.heroHeading}>
              Healthcare that
              <br />
              <em>humanity deserves</em>
            </h1>
            <p className={styles.heroSub}>
              A pharmaceutical company built on quality and affordability — now
              with a consumer range spanning skincare, sun care and hair care.
            </p>
            <div className={styles.heroCTA}>
              <Link href="/products" className="btn-primary">
                Explore our products
              </Link>
              <Link href="/about" className="btn-ghost">
                About Lucid
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST STRIP ─────────────────────────────────── */}
      <section className={styles.trust} aria-label="Why Lucid Pharmatech">
        <div className="container">
          <ul className={styles.trustGrid}>
            {trustPoints.map(({ Icon, title, desc }, i) => (
              <Reveal as="li" key={title} delay={i * 70} className={styles.trustItem}>
                <Icon size={26} className={styles.trustIcon} />
                <h2 className={styles.trustTitle}>{title}</h2>
                <p className={styles.trustDesc}>{desc}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 3. CONSUMER INTRODUCTION ───────────────────────── */}
      <section className={styles.consumer} aria-labelledby="consumer-heading">
        <div className="container">
          <div className={styles.consumerGrid}>
            <Reveal className={styles.consumerText}>
              <span className="section-label">Consumer Health &amp; Beauty</span>
              <div className="divider" />
              <h2 id="consumer-heading">
                The same standards, on your bathroom shelf
              </h2>
              <p>
                Alongside our pharmaceutical work, Lucid develops and markets a
                growing range of consumer health, beauty and dermatology
                products — cleansers, sun care, lotions and hair care.
              </p>
              <p>
                They are formulated with the same quality discipline we apply to
                pharmaceutical products, and they are available to buy today on
                Amazon India.
              </p>
              <div className={styles.consumerActions}>
                <Link href="/products" className="btn-primary">
                  Explore consumer products
                </Link>
              </div>
            </Reveal>

            <Reveal className={styles.consumerMedia} delay={100}>
              <Image
                src="/images/consumer-products-hero.png"
                alt="The Lucid consumer range including Calafine calamine lotion, Kojicid gel and facewash, Fresh O Lite Vitamin C face wash and Freshotil Sunguard-50"
                width={1536}
                height={1024}
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.consumerImage}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. FEATURED PRODUCTS ───────────────────────────────
          featured-products-background.png is used as the section's
          opening band rather than a backdrop behind the cards — the
          image already contains the same products, and layering cards
          on top of it would read as duplication. */}
      <section className={styles.featured} aria-labelledby="featured-heading">
        <div className={styles.featuredBanner}>
          <Image
            src="/images/featured-products-background.png"
            alt=""
            fill
            sizes="100vw"
            className={styles.featuredBannerImage}
          />
          <div className={styles.featuredBannerScrim} aria-hidden="true" />
          <div className={`container ${styles.featuredBannerInner}`}>
            <span className="section-label">Featured Products</span>
            <div className="divider" />
            <h2 id="featured-heading">Made by a pharmaceutical company</h2>
            <p>
              A selection from the Lucid consumer range. Each one is available
              on Amazon India.
            </p>
          </div>
        </div>

        <div className="container">
          <div className={styles.productGrid}>
            {featuredProducts.map((product, i) => (
              <Reveal key={product.slug} delay={i * 60}>
                <ProductCard product={product} placement="homepage_featured" />
              </Reveal>
            ))}
          </div>

          <div className={styles.featuredFooter}>
            <Link href="/products" className={styles.textLink}>
              View all products
              <IconArrowRight size={16} className={styles.textLinkIcon} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. SHOP BY NEED ────────────────────────────────── */}
      <section className={styles.needs} aria-labelledby="needs-heading">
        <div className="container">
          <div className={styles.needsInner}>
            <div className={styles.needsHead}>
              <span className="section-label">Find What You Need</span>
              <div className="divider" />
              <h2 id="needs-heading">Looking for something specific?</h2>
              <p>Start from the concern rather than the product name.</p>
            </div>
            <ul className={styles.needsList}>
              {concerns.map((concern) => (
                <li key={concern.slug}>
                  <Link
                    href={`/products#${concern.slug}`}
                    className={styles.needChip}
                  >
                    {concern.label}
                    <IconArrowRight size={15} className={styles.needChipIcon} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 6. SCIENCE & QUALITY ───────────────────────────── */}
      <section className={styles.science} aria-labelledby="science-heading">
        <div className="container">
          <div className={styles.scienceGrid}>
            <Reveal className={styles.scienceMedia}>
              <Image
                src="/images/science-quality.png"
                alt="Laboratory glassware and a microscope on a clean bench"
                width={1536}
                height={1024}
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.scienceImage}
              />
            </Reveal>

            <Reveal className={styles.scienceText} delay={100}>
              <span className="section-label">Science &amp; Quality</span>
              <div className="divider" />
              <h2 id="science-heading">Quality is the starting point</h2>
              <p>
                Every product carries the same obligation: it has to be right.
                That means formulations grounded in evidence, quality management
                systems that govern production, and a refusal to trade standards
                for speed.
              </p>
              <ul className={styles.pillarList}>
                {pillars.map(({ Icon, title, desc, href }) => (
                  <li key={title}>
                    <Link href={href} className={styles.pillar}>
                      <Icon size={22} className={styles.pillarIcon} />
                      <div>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                      </div>
                      <IconArrowRight size={16} className={styles.pillarArrow} />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 7. WHO IS LUCID ────────────────────────────────── */}
      <section className={styles.story} aria-labelledby="story-heading">
        <div className="container">
          <div className={styles.storyInner}>
            <span className={styles.storyLabel}>Who We Are</span>
            <blockquote className={styles.storyQuote}>
              The biggest reward is the smile of relief on the face of suffering
              humanity. Our vision is to provide{' '}
              <strong>quality products at an affordable price</strong> to the
              ailing humanity.
            </blockquote>
            <cite className={styles.storyCite}>
              Lucid Pharmatech LLP — Founding Vision
            </cite>

            <h2 id="story-heading" className={styles.storyHeading}>
              A pharmaceutical company built on purpose
            </h2>
            <p className={styles.storyBody}>
              Lucid Pharmatech LLP was established to close the gap between
              pharmaceutical quality and affordability, and operates as an
              enterprise of Tablets (India) Limited, Chennai. That pharmaceutical
              foundation is what our consumer range is built on.
            </p>
            <div className={styles.storyLinks}>
              <Link href="/about" className="btn-outline">
                Read our story
              </Link>
              <Link href="/vision" className={styles.storyTextLink}>
                Vision &amp; values
                <IconArrowRight size={15} className={styles.textLinkIcon} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. RESOURCES BRIDGE ────────────────────────────── */}
      <section className={styles.resources} aria-labelledby="resources-heading">
        <div className="container">
          <div className={styles.resourcesHead}>
            <div>
              <span className="section-label">Resources</span>
              <div className="divider" />
              <h2 id="resources-heading">Understand before you buy</h2>
            </div>
            <p className={styles.resourcesIntro}>
              Practical guides on skin, sun and hair care — written to help you
              decide, not to sell to you.
            </p>
          </div>

          <ul className={styles.resourceGrid}>
            {resources.map((r, i) => (
              <Reveal as="li" key={r.href} delay={i * 60}>
                <Link href={r.href} className={styles.resourceCard}>
                  <IconDocument size={22} className={styles.resourceIcon} />
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                  <span className={styles.resourceLink}>
                    Read article
                    <IconArrowRight size={15} className={styles.textLinkIcon} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>

          <div className={styles.resourcesFooter}>
            <Link href="/blog" className={styles.textLink}>
              Browse all articles
              <IconArrowRight size={16} className={styles.textLinkIcon} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 9. PARTNERSHIP CTA ─────────────────────────────── */}
      <section className={styles.ctaSection} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 id="cta-heading">Work with Lucid</h2>
            <p>
              We welcome distributors, healthcare institutions and business
              partners who share our view of what affordable, quality healthcare
              should look like.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn-primary">
                Partner with us
              </Link>
              <Link href="/strengths" className="btn-outline">
                Our capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}