"use client";

import Script from "next/script";
import { useState } from "react";

const ZEFFY_EVENT_URL = "https://www.zeffy.com/en-US/ticketing/move-with-her";
const ZEFFY_EMBED_PATH = "/embed/ticketing/move-with-her";

export default function ZeffyTicketForm() {
  const [embedUnavailable, setEmbedUnavailable] = useState(false);

  if (embedUnavailable) {
    return (
      <div className="zeffy-fallback" role="status">
        <p>Ticket checkout is opening securely through Zeffy.</p>
        <a href={ZEFFY_EVENT_URL} target="_blank" rel="noreferrer" className="btn-primary">
          Continue to Zeffy <span aria-hidden="true">&#8599;</span>
        </a>
      </div>
    );
  }

  return (
    <div className="zeffy-ticket-form-wrap">
      <div data-zeffy-embed="" data-form-url={ZEFFY_EMBED_PATH} />
      <Script
        src="https://www.zeffy.com/embed/v2/zeffy-embed.js"
        strategy="afterInteractive"
        onError={() => setEmbedUnavailable(true)}
      />
    </div>
  );
}
