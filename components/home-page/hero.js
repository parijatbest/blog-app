import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/parijat.jpeg"
          alt="An image showing Parijat"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Parijat</h1>
      <p>I am a UI developer</p>
    </section>
  );
}

export default Hero;
