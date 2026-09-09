"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const CONSENT_KEY = "gridialhub-analytics-consent";
const GA_ID = "G-Z0WQVN8ZMH";

function disableAnalytics(disabled) {
  window[`ga-disable-${GA_ID}`] = disabled;
}

function clearAnalyticsCookies() {
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (name === "_ga" || name.startsWith("_ga_")) {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.gridialhub.com; SameSite=Lax`;
    }
  });
}

export default function AnalyticsConsent() {
  const [ready, setReady] = useState(false);
  const [consent, setConsent] = useState(null);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    let saved = null;

    try {
      saved = window.localStorage.getItem(CONSENT_KEY);
    } catch {
      // Si el navegador bloquea localStorage, mostramos la preferencia de nuevo.
    }

    const granted = saved === "granted";

    if (saved === "granted" || saved === "denied") {
      setConsent(granted);
      disableAnalytics(!granted);
    }

    setReady(true);

    const openPreferences = () => setShowPreferences(true);
    window.addEventListener("gridialhub:cookie-settings", openPreferences);
    return () =>
      window.removeEventListener("gridialhub:cookie-settings", openPreferences);
  }, []);

  const choose = (granted) => {
    try {
      window.localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
    } catch {
      // La elección sigue aplicándose durante la sesión aunque no pueda persistirse.
    }

    disableAnalytics(!granted);
    if (!granted) clearAnalyticsCookies();
    setConsent(granted);
    setShowPreferences(false);
  };

  if (!ready) return null;

  const shouldAsk = consent === null || showPreferences;

  return (
    <>
      {consent === true && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gridialhub-google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {shouldAsk && (
        <div className="cookie-banner" role="dialog" aria-label="Preferencias de cookies">
          <div>
            <strong>Cookies de analítica</strong>
            <p>
              GridialHub usa Google Analytics solo si lo autorizas para medir visitas y mejorar el sitio. Puedes rechazarlo sin afectar el funcionamiento de la web. Consulta la{" "}
              <Link href="/privacidad">Política de Privacidad</Link>.
            </p>
          </div>
          <div className="cookie-actions">
            <button type="button" className="btn btn-secondary" onClick={() => choose(false)}>
              Rechazar
            </button>
            <button type="button" className="btn" onClick={() => choose(true)}>
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
