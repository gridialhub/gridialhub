import Link from "next/link";
import CookieSettingsButton from "./CookieSettingsButton";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", marginTop: 24 }}>
      <div
        className="container"
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div>
          © {new Date().getFullYear()} GridialHub — Comunidad gaming y sorteos
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/bases">Bases</Link>
          <Link href="/privacidad">Política de Privacidad</Link>
          <Link href="/terminos">Términos y Condiciones</Link>
          <CookieSettingsButton />
        </div>
      </div>
    </footer>
  );
}
