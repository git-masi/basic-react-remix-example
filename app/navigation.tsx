import { Link } from '@remix-run/react';

export default function Navigation() {
  return (
    <>
      <h2>Nav Goes Here</h2>
      <nav>
        <Link to="/">Home</Link> <Link to="/broken">Broken</Link>{' '}
        <Link to="/products">Products</Link>
      </nav>
    </>
  );
}
