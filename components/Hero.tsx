import Link from "next/link";
import Image from "next/image";
import Style from "./hero.module.scss";

export default function Hero() {
  return (
    <section className={Style.Hero}>
      <div className={Style.HeroLogo}>
        <span>Our Blooms®</span>
      </div>
      <div className={Style.HeroImage}>
        <Image
          src="/Image.jpg"
          height={570}
          width={1120}
          alt="New '10% off first order' special"
        />
      </div>
    </section>
  );
}
