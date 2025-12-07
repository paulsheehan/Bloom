import Link from "next/link";
import Image from "next/image";
import Style from "./carousel.module.scss";

export default function Carousel() {
  return (
    <ul className={Style.Carousel}>
      <li className={Style.CarouselItem}>
        <Image src="/flower-1.png" alt="flower" fill={true} />
      </li>
      <li className={Style.CarouselItem}>
        <Image src="/flower-2.png" alt="flower" fill={true} />
      </li>
      <li className={Style.CarouselItem}>
        <Image src="/flower-3.png" alt="flower" fill={true} />
      </li>
      <li className={Style.CarouselItem}>
        <Image src="/flower-4.png" alt="flower" fill={true} />
      </li>
      <li className={Style.CarouselItem}>
        <Image src="/flower-5.png" alt="flower" fill={true} />
      </li>
    </ul>
  );
}
