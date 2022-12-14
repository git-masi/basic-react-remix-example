import styles from './productCard.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

type Props = {
  prod: Product;
};

export default function ProductCard({ prod }: Props) {
  return (
    <article key={prod.id} className="product-card">
      <h4 className="title mb-2">{prod.title}</h4>

      <div className="image-wrapper mb-2">
        <img
          className="image"
          src={prod.image}
          alt={prod.title}
          loading="lazy"
        />
      </div>

      <div className="price-container mb-2">
        <p>${prod.price}</p>
        <p>Rating: {prod.rating.rate}/5</p>
      </div>

      <p>{prod.description}</p>
    </article>
  );
}
