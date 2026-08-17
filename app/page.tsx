import Image from "next/image";
import HowItWorks from "./components/home/HowItWorks";
import CTA from "./components/home/CTA";
import TrackBox from "./components/home/TrackBox";
import ShipmentControl from "./components/home/ShipmentControl";
import Certificates from "./components/home/Certificates";
import LogoSection from "./components/home/LogoSection";

export default function Home() {
  return (
    <main>
     
      {/* Left-aligned responsive cover image section */}


      <section className="hero-section">
        <div className="hero-row">
          <div className="hero-image">
            <Image
              src="/cover1.jpeg"
              alt="Cover image"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="hero-img-el"
            />
          </div>
          {/* Right side: modern input + track modal trigger */}
          <TrackBox />
        </div>  
      </section>
      {/* Partners/brands logo loop - animated entrance */}
      <LogoSection />

  {/* <Features /> */} {/* Features section hidden per user request */}
  {/* New: Shipment Control section */}
  <ShipmentControl />
    <HowItWorks />
  <Certificates />

      <CTA />
    </main>
  );
}

