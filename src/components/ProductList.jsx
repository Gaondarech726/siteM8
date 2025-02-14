import { Link } from "react-router-dom";
import { CardWrapper, Container, ProductName } from "./ProductList.styled";

export const ProductList = ({ products }) => {
  return (
    <Container>
      {products.map((product) => (
        <CardWrapper key={product.id}>
          <Link to={`${product.id}`}>
            <ProductName>{product.name}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};
