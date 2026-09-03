// Minimal line-icon set drawn inline as SVG.
// Deliberately dependency-free: no package.json was supplied, so adding
// an icon library would be an unverifiable assumption. A handful of 1KB
// paths does not justify one anyway.
// All icons inherit currentColor and are aria-hidden.

interface IconProps {
  className?: string;
  size?: number;
}

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: 'false' as const,
});

/** Flask — pharmaceutical / scientific foundation */
export function IconFlask({ className, size = 24 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M9 3h6" />
      <path d="M10 3v6.5L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.5V3" />
      <path d="M7.2 14h9.6" />
    </svg>
  );
}

/** Shield with check — quality and compliance */
export function IconShieldCheck({ className, size = 24 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 3l7 3v5.5c0 4.3-2.9 8.2-7 9.5-4.1-1.3-7-5.2-7-9.5V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

/** Droplet — formulation / skincare */
export function IconDroplet({ className, size = 24 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 3.5c3.2 3.4 5.5 6.2 5.5 9a5.5 5.5 0 0 1-11 0c0-2.8 2.3-5.6 5.5-9z" />
    </svg>
  );
}

/** Sun — sun care */
export function IconSun({ className, size = 24 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
    </svg>
  );
}

/** Leaf — hair care / botanicals */
export function IconLeaf({ className, size = 24 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4 20c0-8 5-13 16-13 0 9-5 13-11 13-2.8 0-5-1.5-5-1.5z" />
      <path d="M9 15c2-3 4.5-5 8-6.5" />
    </svg>
  );
}

/** Balance scale — ethics */
export function IconScale({ className, size = 24 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 4v16M7 20h10" />
      <path d="M4 9h6l-3 5.5A3 3 0 0 1 4 9zM14 9h6l-3 5.5A3 3 0 0 1 14 9z" />
      <path d="M12 6.5L5.5 8.5M12 6.5l6.5 2" />
    </svg>
  );
}

/** Heart — affordable access / human focus */
export function IconHeart({ className, size = 24 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M12 20s-7-4.4-7-9.2A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.8C19 15.6 12 20 12 20z" />
    </svg>
  );
}

/** Box — product portfolio */
export function IconBox({ className, size = 24 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M20.5 8.2v7.6a1.4 1.4 0 0 1-.75 1.24l-7 3.6a1.4 1.4 0 0 1-1.5 0l-7-3.6A1.4 1.4 0 0 1 3.5 15.8V8.2" />
      <path d="M3.7 7.6l7.55-3.4a1.4 1.4 0 0 1 1.5 0l7.55 3.4-8.3 4-8.3-4z" />
      <path d="M12 11.6V20" />
    </svg>
  );
}

/** Users — team */
export function IconUsers({ className, size = 24 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3 19.5c0-3 2.7-5 6-5s6 2 6 5" />
      <path d="M16 5.6a3.2 3.2 0 0 1 0 5.9M17 14.9c2.4.5 4 2.3 4 4.6" />
    </svg>
  );
}

/** Document — resources / articles */
export function IconDocument({ className, size = 24 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V7.5z" />
      <path d="M14 3v4.5h4.5" />
      <path d="M8.8 12.5h6.4M8.8 16h4.4" />
    </svg>
  );
}

/** Arrow right — inline CTA affordance */
export function IconArrowRight({ className, size = 24 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M4.5 12h14" />
      <path d="M13 6.5l5.5 5.5-5.5 5.5" />
    </svg>
  );
}

/** External link — used on every Amazon CTA */
export function IconExternal({ className, size = 24 }: IconProps) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M13.5 4.5H19.5V10.5" />
      <path d="M19.5 4.5L11 13" />
      <path d="M18 14.5v4a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6h4" />
    </svg>
  );
}