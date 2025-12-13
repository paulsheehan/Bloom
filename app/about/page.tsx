import Image from "next/image";
import Style from "./about.module.scss";

export default function About() {
  return (
    <section className="container container--about page">
      <h1>About</h1>
      <div className={Style.Info}>
        <h2 className={Style.Title}>Our story</h2>
        <div className={Style.Image}>
          <Image src="/flowers-woman.png" alt={""} fill />
        </div>
        <div className={Style.PersonCard}>
          <p className={Style.Name}>Lily smith</p>
          <p className={Style.Role}>Owner</p>
        </div>
      </div>
    </section>
  );
}
