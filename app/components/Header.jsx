"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/articulos", label: "Artículos" },
  { href: "/sorteos", label: "Sorteos" },
  { href: "/resultados", label: "Resultados" },
  { href: "/bases", label: "Bases" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className={styles.header} onKeyDown={(event) => {
      if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
    }}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)} aria-label="GridialHub — Inicio">Gridial<span>Hub</span></Link>
        <button ref={toggle} type="button" className={styles.toggle} aria-expanded={open} aria-controls="site-navigation" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {open ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
        <nav id="site-navigation" className={`${styles.nav} ${open ? styles.open : ""}`} aria-label="Navegación principal">
          {links.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`));
            return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={active ? styles.active : undefined} onClick={() => setOpen(false)}>{link.label}</Link>;
          })}
        </nav>
      </div>
    </header>
  );
}
