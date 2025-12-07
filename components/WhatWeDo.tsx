import Image from "next/image";
import Style from "./whatWeDo.module.scss";

const steps = [
  {
    title: "FLORAL INSTALLATIONS",
    description: "Living art for homes, businesses, and events.",
    imgSrc: "/flower-step-1.png",
    altText: "Floral installation of pink tulips in a modern vase",
  },
  {
    title: "NATIVE PLANT ARRANGEMENTS",
    description:
      "Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.",
    imgSrc: "/flower-step-2.png",
    altText: "Native plant arrangement with wildflowers and grasses",
  },
  {
    title: "CUSTOM FLORAL CONCEPTS",
    description:
      "Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.",
    imgSrc: "/flower-step-3.png",
    altText: "Custom floral concept with mixed seasonal stems",
  },
];

export default function WhatWeDo() {
  return (
    <section className={Style.Container} aria-labelledby="what-we-do-title">
      <div className={Style.IntroText}>
        <h2 className={Style.Title}>What We Do</h2>
        <p className={Style.Description}>
          We bring a touch of that simple magic into your world.
        </p>
      </div>

      <ul className={Style.StepList}>
        {steps.map((step, index) => (
          <li key={step.title} className={Style.StepItem}>
            <span className={Style.StepNumber}>{index + 1}</span>
            <Image
              src={steps[index].imgSrc}
              alt={steps[index].altText}
              width={145}
              height={145}
            />
            <h3 className={Style.StepTitle}>{step.title}</h3>
            <p className={Style.StepText}>{step.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
