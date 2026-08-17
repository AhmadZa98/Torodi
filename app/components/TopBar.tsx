"use client";

import { FaFacebookF, FaInstagram, FaTiktok, FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import styles from "./TopBar.module.css";

type TopBarProps = {
  location?: string;
  locationUrl?: string;
  phone?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
};

export default function TopBar({
  location = "السواحرة الشرقية - بجانب حاجز الكونتينر",
  locationUrl = "https://maps.app.goo.gl/82k6kjuk5gVwo63UA",
  phone = "+972586306057",
  facebookUrl = "https://facebook.com/",
  instagramUrl = "https://instagram.com/",
  tiktokUrl = "https://tiktok.com/@",
}: TopBarProps) {
  // Build WhatsApp chat link in international format without '+'
  const whatsappNumber = phone.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${whatsappNumber}`;

  return (
    <div className={styles.topbar} role="banner">
      <div className={styles.inner}>
        <div className={styles.left}>
          <a
            className={styles.iconLink}
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF size={14} />
          </a>
          <a
            className={styles.iconLink}
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={14} />
          </a>
          <a
            className={styles.iconLink}
            href={tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok size={14} />
          </a>
        </div>
        <div className={styles.right}>
          <a className={styles.contactLink} href={locationUrl} target="_blank" rel="noopener noreferrer" aria-label="Location">
            {location}
            <FaLocationDot size={14} />
          </a>
          <span>•</span>
          <a className={styles.contactLink} href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            {phone}
            <FaWhatsapp size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
