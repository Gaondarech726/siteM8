import { useLocation, useSearchParams } from 'react-router-dom';
import { BackLink } from '../components/BackLink';
import { ProductList } from '../components/ProductList';
import { getProducts } from '../fakeAPI';
import { SearchBox } from './searchbox/SearchBox';

const Products = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/state';

  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  const visibleProducts = products.filter(product =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <BackLink to={backLinkHref}>Повернутись назад</BackLink>
      <SearchBox value={productName} onChange={updateQueryString} />
      <ProductList products={visibleProducts} />
    </main>
  );
};

export default Products;
