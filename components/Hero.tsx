import Link from "next/link";
import Image from "next/image";
import Style from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={Style.Hero}>
      <div className={Style.LogoImage}>
        <Image
          src="/logo-image-desk.svg"
          height={150}
          width={1120}
          alt="Our Blooms logo"
        />
      </div>
      <div className={Style.HeroImage}>
        <Image
          src="/hero-desk.jpg"
          height={570}
          width={1120}
          alt="New '10% off first order' special"
        />
      </div>
    </section>
  );
}
