import Link from "next/link";
import Image from "next/image";
import Style from "./nav.module.scss";
export default function Nav() {
  return (
    <nav className={Style.Nav}>
      <Link href="/" className={Style.Logo}>
        <span>Our Blooms®</span>
      </Link>
      <ul className={Style.Menu}>
        <li className={Style.Items}>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li className={Style.Items}>
          <Link href="/about">About</Link>
        </li>
        <li className={Style.Items}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
