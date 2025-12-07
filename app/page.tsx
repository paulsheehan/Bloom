import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";

export const metadata = {
  title: "Our Blooms | Fresh Flowers",
  description:
    "Seasonal bouquets, hand-tied arrangements, and same-day delivery from Our Blooms.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Carousel />
    </>
  );
}
