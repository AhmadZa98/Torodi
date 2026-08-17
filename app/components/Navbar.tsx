"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname() || "/";

  const items = [
    { href: "/", label: "الرئيسية" },
    { href: "/shipNow", label: "تسوق الان" },
    { href: "/about", label: "عن الشركة" },
    { href: "/questions", label: "الأسئلة المتكررة" },
    { href: "/contact_us", label: "تواصل معنا" },
    
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link href="/">
            <img src="/logo.svg" alt="Torodi" className="logo-img" />
          </Link>
        </div>

        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label className="hamburger" htmlFor="nav-toggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <ul className="menu">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={isActive ? "active" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        
      </div>
    </nav>
  );
}
