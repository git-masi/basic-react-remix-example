import { Link, Outlet, useTransition } from '@remix-run/react';

export default function Products() {
  const { state, location } = useTransition();

  console.log('products location', location);

  return (
    <>
      <h1>Products</h1>

      {/* Making `/products/categories` dynamic is more trouble than it's worth */}
      <Link to="/products/categories">Categories</Link>

      {state === 'loading' && location.pathname === '/products/categories' && (
        <p>nothing to see here</p>
      )}

      <Outlet />
    </>
  );
}
