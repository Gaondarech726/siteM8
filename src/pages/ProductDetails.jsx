import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { BackLink } from '../components/BackLink';
import {
  P,
  ProductDescription,
  ProductH1,
} from '../components/ProductList.styled';
import { getProductById } from '../fakeAPI';

const YOUTUBE_API_KEY = 'AIzaSyD0gzV_4jwgWmqV8sFro1VzfgoEmTnUj50';

const ProductDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';
  const { id } = useParams();
  const product = getProductById(id);
  const [views, setViews] = useState(null);
  const [videoDescription, setVideoDescription] = useState('');

  useEffect(() => {
    const videoId = extractVideoId(product.link);
    if (!videoId) return;

    const fetchVideoData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos`,
          {
            params: {
              part: 'snippet,statistics',
              id: videoId,
              key: YOUTUBE_API_KEY,
            },
          }
        );

        const videoData = response.data.items[0];
        if (videoData) {
          setViews(videoData.statistics.viewCount);
          setVideoDescription(videoData.snippet.description);
        }
      } catch (error) {
        console.error('Помилка при завантаженні данних відео:', error);
      }
    };

    fetchVideoData();
  }, [product.link]);

  function extractVideoId(url) {
    const match = url.match(/(?:embed\/|v=|\/)([0-9A-Za-z_-]{11})/);
    return match ? match[1] : null;
  }

  return (
    <main>
      <BackLink to={backLinkHref}>Повернутись назад</BackLink>
      <div>
        <ProductH1>{product.name}</ProductH1>
        <ProductDescription>{product.description}</ProductDescription>
        <P>
          <strong>Перегляди:</strong>{' '}
          {views !== null ? views.toLocaleString() : 'Завантаження...'}
        </P>
        <P>
          <strong>Опис відео:</strong> {videoDescription || 'Завантаження...'}
        </P>
        <iframe
          width="260"
          height="315"
          src={product.link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
};

export default ProductDetails;
