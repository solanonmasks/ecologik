// Scroll reveal, hero zoom-in and photo hover zoom.
// Ported from the design prototype's motion.js.
// Anything inside an element with `data-nomotion` is left alone.
// Respects the visitor's "reduce motion" setting.

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const EASE = 'cubic-bezier(.2,.7,.2,1)';
const done = new WeakSet<Element>();

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement;
      el.style.opacity = '1';
      el.style.transform = 'none';
      io.unobserve(el);
      setTimeout(() => {
        el.style.transition = '';
        el.style.willChange = '';
      }, 1600);
    });
  },
  { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
);

// Full-bleed background photos slowly settle from 1.08 to 1 on load.
function kenBurns(img: HTMLImageElement) {
  if (done.has(img)) return;
  done.add(img);
  if (reduce) return;
  img.style.transform = 'scale(1.08)';
  img.style.transition = 'transform 2.8s ' + EASE;
  requestAnimationFrame(() =>
    requestAnimationFrame(() => {
      img.style.transform = 'scale(1)';
    }),
  );
}

// Photos in a cropped box zoom in slightly on hover.
function hoverZoom(img: HTMLImageElement) {
  const box = img.parentElement as (HTMLElement & { __hz?: boolean }) | null;
  if (!box || box.__hz || reduce) return;
  if (getComputedStyle(box).overflow !== 'hidden') return;
  box.__hz = true;
  img.style.transition = 'transform 1.1s ' + EASE;
  const host = box.closest('a') || box;
  host.addEventListener('mouseenter', () => (img.style.transform = 'scale(1.045)'));
  host.addEventListener('mouseleave', () => (img.style.transform = 'scale(1)'));
}

function scan() {
  const cands = new Set<HTMLElement>();
  document.querySelectorAll<HTMLImageElement>('main img').forEach((img) => {
    if (img.closest('[data-nomotion]')) return;
    const p = img.parentElement;
    const abs = getComputedStyle(img).position === 'absolute';
    if (abs && p?.tagName === 'SECTION') {
      kenBurns(img);
      return;
    }
    hoverZoom(img);
    if (p && p.tagName !== 'SECTION' && p.tagName !== 'MAIN') cands.add(p);
  });
  document
    .querySelectorAll<HTMLElement>(
      'main h1, main h2, main h3, main p, main form, main aside, main figure, footer > div:first-child > div',
    )
    .forEach((el) => {
      if (!el.closest('[data-nomotion]')) cands.add(el);
    });

  // Only animate the outermost candidate, so nothing animates twice.
  const list = [...cands].filter((el) => {
    let a = el.parentElement;
    while (a) {
      if (cands.has(a)) return false;
      a = a.parentElement;
    }
    return true;
  });

  if (reduce) return;
  list.forEach((el) => {
    if (done.has(el)) return;
    done.add(el);
    // Siblings fade in one after another (90ms apart).
    const sibs = [...(el.parentElement?.children ?? [])].filter((c) => cands.has(c as HTMLElement));
    const i = Math.max(0, sibs.indexOf(el));
    const delay = Math.min(i, 5) * 90;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.willChange = 'opacity, transform';
    el.style.transition = `opacity .9s ${EASE} ${delay}ms, transform 1s ${EASE} ${delay}ms`;
    io.observe(el);
  });
}

scan();
