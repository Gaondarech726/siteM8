import { Link } from 'react-router-dom';
import './productlist.scss';
import { CardWrapper, Container, ProductName } from './ProductList.styled';

export const ProductList = ({ products }) => {
  return (
    <Container className="conta">
      {products.map(product => (
        <CardWrapper className="cardWrapp" key={product.id}>
          <Link to={`${product.id}`}>
            <ProductName>{product.name}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};
