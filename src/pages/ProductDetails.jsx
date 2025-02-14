import { useLocation, useParams } from 'react-router-dom';
import { BackLink } from '../components/BackLink';
import {
  ProductDescription,
  ProductH1,
} from '../components/ProductList.styled';
import { getProductById } from '../fakeAPI';

const ProductDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';
  const { id } = useParams();
  const product = getProductById(id);
  return (
    <main>
      <BackLink to={backLinkHref}>Повернутись назад</BackLink>
      <div>
        <ProductH1>{product.name}</ProductH1>
        <ProductDescription>{[product.description]}</ProductDescription>
        <iframe
          width="560"
          height="315"
          src={product.link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        {/* <a
          className="btnDownload"
          href={`${defaultPath + product.id}.mp3`}
          download={`${product.id}.mp3`}
        >
          Завантажити MP3
        </a> */}
      </div>
    </main>
  );
};

export default ProductDetails;
