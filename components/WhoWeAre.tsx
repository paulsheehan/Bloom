import Link from "next/link";
import Image from "next/image";
import Style from "./whoWeAre.module.scss";
export default function WhoWeAre() {
  return (
    <section className={Style.Container}>
      <div className="font-heading">
        <h1>Who we are</h1>
      </div>
      <div className={Style.Desciption}>
        <h2>
          We're Our Blooms® and we're here to help you find your floral story.
        </h2>
      </div>
      <Link href="/" className="btn">
        <span>About Us</span>
      </Link>
    </section>
  );
}
