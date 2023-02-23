import React from "react";
import data from '../data';
import Card from './Card';

export default function Events() {
    const cards = data.map((item) => {
        return (
          <Card
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
          />
        );
      });
      return (
        <section className="s-events">
            <div className="s-events__inner row">
                <div className="c-card__events flex">
                    {cards}
                </div>
            </div>
        </section>
      )
}