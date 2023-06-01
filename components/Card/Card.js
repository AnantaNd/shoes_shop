import Link from 'next/link';
import { StarFill } from 'react-bootstrap-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import style from './Card.module.css';

export default function Card({
  img, name, price, priceAftDisc, ratting, idProduct, brand, disc, tagNew,
}) {
  return (
    <div className={style.myCard}>
      <div className={style.innerCard}>
        {/* frontside */}
        <div className={style.frontSide}>
          <div className={style.tag}>
            {tagNew ? <div className={style.tagNew}>{tagNew}</div> : <br />}
            {disc
              ? (
                <p className={style.tagDisc}>
                  {disc}
                  {' '}
                  %
                </p>
              )
              : <br />}
          </div>
          <LazyLoadImage src={img} className={style.img} effect="blur" alt={name} />
          <h1 data-testid="title" className={style.title}>{name}</h1>
          <p className={style.brand}>{brand}</p>
          <p data-testid="rating">
            {ratting}
            {' '}
            <StarFill className={style.iconRating} size={`${13}px`} />
          </p>
          {!disc
            ? (
              <h2 className={style.price}>
                Rp.
                {price}
              </h2>
            )
            : (
              <h2 className={style.disc}>
                Rp.
                {priceAftDisc}
              </h2>
            )}
        </div>
        <div className={style.backSide}>
          <Link href={`/products/${idProduct}`}>
            <h1 className={style.linkDetail}>Check Product</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
