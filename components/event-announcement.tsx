"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const EVENT_DISMISSAL_KEY = "safa-move-with-her-announcement-dismissed";
const TICKETS_URL = "https://www.zeffy.com/en-US/ticketing/move-with-her";

export default function EventAnnouncement() {
  const [isOpen, setIsOpen] = useState(false);

  const dismissAnnouncement = useCallback(() => {
    window.sessionStorage.setItem(EVENT_DISMISSAL_KEY, "true");
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (window.sessionStorage.getItem(EVENT_DISMISSAL_KEY) !== "true") {
        setIsOpen(true);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismissAnnouncement();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [dismissAnnouncement, isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="event-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          dismissAnnouncement();
        }
      }}
    >
      <section
        className="event-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="move-with-her-title"
        aria-describedby="move-with-her-description"
      >
        <button
          className="event-modal-close"
          type="button"
          onClick={dismissAnnouncement}
          aria-label="Close event announcement"
        >
          <span aria-hidden="true">&#215;</span>
        </button>
        <div className="event-modal-flyer-wrap">
          <Image
            src="/images/move-with-her-flyer.png"
            alt="Move With Her: December 10 at 6 PM in Brooklyn, New York. A wellness retreat and fundraiser featuring mat Pilates, self-care, and connection."
            className="event-modal-flyer"
            width={1080}
            height={1350}
            priority
          />
        </div>
        <div className="event-modal-content">
          <p className="event-modal-eyebrow">December 10 | 6 PM | Brooklyn, NY</p>
          <h2 id="move-with-her-title">Make time for you.</h2>
          <p id="move-with-her-description">
            Join us for <strong>Move With Her</strong>, a chance to move your body,
            recharge, and connect with other women.
          </p>
          <p>Come solo or bring a friend. We&apos;d love to see you there!</p>
          <a
            className="btn-primary event-modal-ticket-link"
            href={TICKETS_URL}
            target="_blank"
            rel="noreferrer"
          >
            Get Your Tickets <span aria-hidden="true">&#8599;</span>
          </a>
          <button className="event-modal-dismiss" type="button" onClick={dismissAnnouncement}>
            Maybe later
          </button>
        </div>
      </section>
    </div>
  );
}
