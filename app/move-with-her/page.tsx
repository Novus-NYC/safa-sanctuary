import type { Metadata } from "next";
import Image from "next/image";
import ZeffyTicketForm from "@/components/zeffy-ticket-form";

const ZEFFY_EVENT_URL = "https://www.zeffy.com/en-US/ticketing/move-with-her";

export const metadata: Metadata = {
  title: "Move With Her",
  description:
    "Join Safa Sanctuary on December 10 for Move With Her, an evening wellness retreat and fundraiser in Brooklyn.",
};

export default function MoveWithHerPage() {
  return (
    <>
      <section className="event-ticket-hero">
        <div className="container-rail event-ticket-hero-grid">
          <div className="event-ticket-intro reveal">
            <p className="eyebrow">Safa Sanctuary&apos;s First Birthday</p>
            <h1>Move With Her</h1>
            <p className="event-ticket-kicker">December 10 | 6 PM | Brooklyn, NY</p>
            <p className="section-copy">
              Make time for yourself while supporting opportunities for women and
              families in our community. Join us for mat Pilates, self-care, and
              connection.
            </p>
            <a href="#tickets" className="btn-primary">
              Get Your Tickets <span aria-hidden="true">&#8595;</span>
            </a>
            <a
              href={ZEFFY_EVENT_URL}
              target="_blank"
              rel="noreferrer"
              className="event-ticket-external-link"
            >
              Prefer Zeffy&apos;s ticket page? Open checkout <span aria-hidden="true">&#8599;</span>
            </a>
          </div>
          <div className="event-ticket-flyer-frame reveal reveal-delay-1">
            <Image
              src="/images/move-with-her-flyer.png"
              alt="Move With Her: a December 10 wellness retreat and fundraiser featuring mat Pilates, self-care, and connection."
              width={1080}
              height={1350}
              priority
            />
          </div>
        </div>
      </section>

      <section className="event-ticket-checkout" id="tickets">
        <div className="container-rail">
          <div className="event-ticket-checkout-intro reveal">
            <p className="eyebrow">Reserve Your Place</p>
            <h2>Tickets for Move With Her</h2>
            <p className="section-copy">
              Complete your registration below. Payment is securely processed by Zeffy.
            </p>
          </div>
          <div className="event-ticket-embed-card reveal reveal-delay-1">
            <ZeffyTicketForm />
          </div>
        </div>
      </section>
    </>
  );
}
