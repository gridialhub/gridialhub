"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const CONSENT_KEY = "gridialhub-analytics-consent";
const GA_ID = "G-Z0WQVN8ZMH";

function disableAnalytics(disabled) {
  window[`ga-disable-${GA_ID}`] = disabled;
}

function updateAnalyticsConsent(granted, command = "update") {
  // Se prepara la cola local antes de cargar Google; esto no descarga etiquetas.
  disableAnalytics(!granted);
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag("consent", command, {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
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
    updateAnalyticsConsent(false, "default");
    let saved = null;

    try {
      saved = window.localStorage.getItem(CONSENT_KEY);
    } catch {
      // Si el navegador bloquea localStorage, mostramos la preferencia de nuevo.
    }

    const granted = saved === "granted";

    if (saved === "granted" || saved === "denied") {
      setConsent(granted);
      updateAnalyticsConsent(granted);
      if (!granted) clearAnalyticsCookies();
    }

    setReady(true);

    const openPreferences = () => setShowPreferences(true);
    const syncPreferences = (event) => {
      if (event.key !== CONSENT_KEY && event.key !== null) return;
      const granted = event.newValue === "granted";
      updateAnalyticsConsent(granted);
      if (!granted) clearAnalyticsCookies();
      setConsent(event.newValue === "granted" || event.newValue === "denied" ? granted : null);
    };
    window.addEventListener("gridialhub:cookie-settings", openPreferences);
    window.addEventListener("storage", syncPreferences);
    return () => {
      window.removeEventListener("gridialhub:cookie-settings", openPreferences);
      window.removeEventListener("storage", syncPreferences);
    };
  }, []);

  const choose = (granted) => {
    try {
      window.localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
    } catch {
      // La elección sigue aplicándose durante la sesión aunque no pueda persistirse.
    }

    updateAnalyticsConsent(granted);
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
              gtag('config', '${GA_ID}', {
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
            `}
          </Script>
        </>
      )}

      {shouldAsk && (
        <div className="cookie-banner" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-description">
          <div>
            <strong id="cookie-title">Tú eliges las cookies de analítica</strong>
            <p id="cookie-description">
              Con tu permiso, Google Analytics utiliza cookies para medir las visitas.
              Puedes aceptar o rechazar la analítica y seguir usando toda la web.
              Esta elección no autoriza publicidad personalizada. Consulta la{" "}
              <Link href="/privacidad">Política de Privacidad</Link>.
            </p>
            <p>Puedes cambiar tu elección desde «Preferencias de cookies», al final de cualquier página.</p>
            {showPreferences && <p>Analítica: {consent === true ? "aceptada" : consent === false ? "rechazada" : "sin elegir"}.</p>}
          </div>
          <div className="cookie-actions">
            <button type="button" className="btn btn-secondary" onClick={() => choose(false)}>
              Rechazar analítica
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => choose(true)}>
              Aceptar analítica
            </button>
          </div>
        </div>
      )}
    </>
  );
}
