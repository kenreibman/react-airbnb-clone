import React from 'react';
import HeroImage from '../images/group.png';

export default function Hero() {
  return (
    <section className="s-hero" aria-labelledby="h2_hero">
      <h2 className="hide" id="h2_hero">
        Hero
      </h2>
      <div className="s-hero__inner row">
        <div className="s-hero__container flex">
          <img src={HeroImage} alt="Group Collage" />
        </div>
        <div className="s-hero__details flex">
          <div className="s-hero__title">Online Experiences</div>
          <div className="s-hero__subtitle">
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </div>
        </div>
      </div>
    </section>
  );
}
