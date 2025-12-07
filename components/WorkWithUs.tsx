import Image from "next/image";
import Link from "next/link";
import Style from "./workWithUs.module.scss";
import "../styles/_utilities.scss";

export default function WorkWithUs() {
  return (
    <section
      className={`container ${Style.Section}`}
      aria-labelledby="work-with-us-title"
    >
      <div className={Style.Image}>
        <Image
          src="/lavander-desk.jpg"
          alt="Pink tulips in bloom"
          width={1200}
          height={750}
        />
      </div>
      <h2 id="work-with-us-title" className={Style.Title}>
        Work with us
      </h2>
      <p className={Style.Description}>
        Discover how we can add a touch of natural beauty to your next event.
      </p>
      <Link href="/about" className="btn">
        <span>About Us</span>
      </Link>
    </section>
  );
}
