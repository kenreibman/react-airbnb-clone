import Events from './Events';

export default function Card(props) {
  console.log(props);
  return (
    <div className="c-card__item flex">
      <div className="c-card__media-container relative">
        <img
          src={`../images/${props.img}`}
          alt={props.title}
          className="c-card__media"
        />
      </div>

      <div className="c-card__meta flex">
        <div className="c-card__rating flex">
          <span className="c-card__rating-star">*</span>
          <div className="c-card__rating-scale">{props.rating}</div>
          <span className="c-card__rating-count">({props.reviewCount})</span>
        </div>
        <span className="c-card__separator">&bull;</span>
        <div className="c-card__location">{props.location}</div>
      </div>

      <div className="c-card__title">{props.title}</div>

      <div className="c-card__total">
        <span className="c-card__cost">From ${props.price}</span>
        <span className="c-card__person"> / person</span>
      </div>
    </div>
  );
}
