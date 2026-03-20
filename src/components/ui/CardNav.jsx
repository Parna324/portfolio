import { useLayoutEffect, useMemo, useRef, useState } from "react";

function ArrowUpRightIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17L17 7M10 7h7v7"
      />
    </svg>
  );
}

/**
 * CardNav
 * - Expands from 60px into card grid
 * - Uses measured height (no GSAP needed)
 * - items: [{ label, bgColor, textColor, links: [{label, href, ariaLabel}] }]
 */
export default function CardNav({
  logo,
  items = [],
  className = "",
  baseColor = "rgba(0,0,0,0.35)",
  menuColor = "rgba(226,232,240,0.9)",
  buttonBgColor = "rgba(56,189,248,0.95)",
  buttonTextColor = "#001018",
  ctaLabel = "Let’s talk",
  ctaHref = "/#contact",
}) {
  const navRef = useRef(null);
  const contentRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(60);

  const topItems = useMemo(() => (items || []).slice(0, 3), [items]);

  const measure = () => {
    const navEl = navRef.current;
    const contentEl = contentRef.current;
    if (!navEl || !contentEl) return;
    const contentHeight = contentEl.scrollHeight;
    const targetHeight = 60 + contentHeight;
    setHeight(targetHeight);
  };

  useLayoutEffect(() => {
    if (!open) {
      setHeight(60);
      return;
    }
    measure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, topItems.length]);

  useLayoutEffect(() => {
    const onResize = () => {
      if (open) measure();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const toggle = () => setOpen((v) => !v);

  return (
    <div
      className={`card-nav-container fixed left-1/2 top-4 z-40 w-[92%] max-w-5xl -translate-x-1/2 ${className}`}
    >
      <nav
        ref={navRef}
        className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_18px_70px_rgba(15,23,42,0.75)] backdrop-blur-2xl"
        style={{
          height: open ? height : 60,
          transition: "height 420ms cubic-bezier(.2,.9,.2,1)",
          backgroundColor: baseColor,
          willChange: "height",
        }}
        aria-label="Primary navigation"
      >
        {/* Top bar */}
        <div className="absolute inset-x-0 top-0 z-20 flex h-[60px] items-center justify-between px-3 sm:px-4">
          <button
            type="button"
            onClick={toggle}
            className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200/90 transition-colors hover:bg-white/10"
            aria-label={open ? "Close menu" : "Open menu"}
            style={{ color: menuColor }}
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0.5 h-[2px] w-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[11px] h-[2px] w-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {logo}
          </div>

          <a
            href={ctaHref}
            className="hidden sm:inline-flex h-10 items-center gap-2 rounded-xl px-4 text-sm font-medium shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            {ctaLabel}
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </a>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className={`absolute left-0 right-0 top-[60px] px-3 pb-3 sm:px-4 sm:pb-4 ${
            open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
          style={{
            transition: "opacity 220ms ease",
          }}
          aria-hidden={!open}
        >
          <div className="grid gap-3 md:grid-cols-3">
            {topItems.map((item, idx) => (
              <div
                key={`${item.label}-${idx}`}
                className="select-none rounded-2xl p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                style={{ backgroundColor: item.bgColor, color: item.textColor }}
              >
                <div className="text-[18px] font-semibold tracking-tight sm:text-[20px]">
                  {item.label}
                </div>
                <div className="mt-3 flex flex-col gap-2">
                  {(item.links || []).map((lnk, i) => (
                    <a
                      key={`${lnk.label}-${i}`}
                      href={lnk.href}
                      aria-label={lnk.ariaLabel}
                      className="inline-flex items-center gap-2 text-[14px] opacity-95 transition-opacity hover:opacity-75"
                    >
                      <ArrowUpRightIcon className="h-4 w-4" />
                      <span className="truncate">{lnk.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between gap-3 sm:hidden">
            <a
              href={ctaHref}
              className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl text-sm font-medium"
              style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
            >
              {ctaLabel}
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

