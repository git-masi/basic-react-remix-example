import { json } from '@remix-run/node';
import { Link, Outlet, useLoaderData, useTransition } from '@remix-run/react';

export async function loader() {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  return json<string[]>(await res.json());
}

export default function Categories() {
  const categories = useLoaderData<typeof loader>();
  const { state, submission, type, location } = useTransition();

  console.log('categories state: ', state);
  console.log('categories submission', submission);
  console.log('categories type: ', type);
  console.log('categories location', location);

  return (
    <>
      <h2>Categories</h2>

      {categories.map((c) => (
        <Link
          style={{ marginRight: '1rem' }}
          key={c}
          // Making `/products/categories` dynamic is more trouble than it's worth
          to={`/products/categories/${c}`}
        >
          {c}
        </Link>
      ))}

      {state === 'loading' &&
        location.pathname === '/products/categories/electronics' && (
          <p>nothing to see here</p>
        )}

      <Outlet />
    </>
  );
}
