import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { Store } from './pages/Store';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/store', element: <Store onBack={() => {}} /> },
  { path: '/products', element: <ProductListing /> },
  { path: '/product/:id', element: <ProductDetails /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
