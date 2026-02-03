import './App.css'
// import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './components/Layout'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {

  const routes = createHashRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Product />,
        },
        {
          path: '/product/:id',
          element: <ProductDetails />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
        {
          path: '/checkout',
          element: <Checkout />,
        },
        {
          path: '/',
          element: <Navigate to='/' replace />,
        },
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
