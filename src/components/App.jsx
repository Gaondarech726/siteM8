import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { SharedLayout } from './SharedLayout';

const delay = ms => new Promise(res => setTimeout(res, ms));

const Home = lazy(async () => {
  await delay(2000);
  return import('../pages/Home');
});

const About = lazy(() => import('../pages/About.jsx'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const Products = lazy(() => import('../pages/Products'));
const State = lazy(() => import('../pages/State'));
const Manifest = lazy(() => import('../pages/searchbox/articles/Manifest.jsx'));
const Runes = lazy(() => import('../pages/searchbox/articles/Runes.jsx'));
const Concert = lazy(() => import('../pages/searchbox/articles/Concert.jsx'));
const Sxe = lazy(() => import('../pages/searchbox/articles/Sxe.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/state" element={<State />} />
        <Route path="/state/manifest" element={<Manifest />} />
        <Route path="/state/runes" element={<Runes />} />
        <Route path="/state/concert" element={<Concert />} />
        <Route path="/state/sxe" element={<Sxe />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};
