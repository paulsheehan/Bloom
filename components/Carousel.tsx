import Image from "next/image";
import Style from "./carousel.module.scss";

export default function Carousel() {
  return (
    <div
      className={Style.CarouselRegion}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured flowers"
      aria-describedby="carousel-a11y-hint"
    >
      <p className={Style.CarouselTitle}>Featured flowers</p>
      <p id="carousel-a11y-hint" className={Style.VisuallyHidden}>
        Tab to each image and use shift plus scroll or your mouse wheel to move
        across the carousel.
      </p>

      <ul className={Style.Carousel}>
        <li className={Style.CarouselItem} tabIndex={0}>
          <Image src="/flower-1.png" alt="Pink tulips in bloom" fill={true} />
        </li>
        <li className={Style.CarouselItem} tabIndex={0}>
          <Image src="/flower-2.png" alt="White daisy closeup" fill={true} />
        </li>
        <li className={Style.CarouselItem} tabIndex={0}>
          <Image src="/flower-3.png" alt="Orange lily petals" fill={true} />
        </li>
        <li className={Style.CarouselItem} tabIndex={0}>
          <Image src="/flower-4.png" alt="Purple wildflowers" fill={true} />
        </li>
        <li className={Style.CarouselItem} tabIndex={0}>
          <Image src="/flower-5.png" alt="Yellow sunflower head" fill={true} />
        </li>
      </ul>
    </div>
  );
}
