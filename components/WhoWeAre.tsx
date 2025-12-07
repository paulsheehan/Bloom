import Link from "next/link";
import Image from "next/image";
import Style from "./whoWeAre.module.scss";
export default function WhoWeAre() {
  return (
    <section className={Style.Container}>
      <h2 className={Style.Title}>Who we are</h2>
      <p className={Style.Description}>
        We're Our Blooms® and we're here to help you find your floral story.
      </p>
      <Link href="/about" className="btn">
        <span>About Us</span>
      </Link>
    </section>
  );
}
