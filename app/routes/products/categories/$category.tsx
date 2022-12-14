import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';

import type { Product } from '~/shared/productCard';
import ProductCard, { links as productLinks } from '~/shared/productCard';

import styles from '~/styles/products/categories/category.css';

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.category, `params.category is required`);

  const { category } = params;
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const products = await res.json();

  return json<{ category: string; products: Array<Product> }>({
    category,
    products,
  });
};

export function links() {
  return [...productLinks(), { rel: 'stylesheet', href: styles }];
}

export default function Category() {
  const { category, products } = useLoaderData<typeof loader>();

  return (
    <div className="category">
      <h3>{category}</h3>

      <div className="product-cards">
        {products.map((prod) => (
          <ProductCard key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
}
