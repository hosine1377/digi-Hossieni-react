import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import CartPage from './pages/CartPage'
import SginUp from './pages/SginUp'
import LoginPage from './pages/LoginPage'
import ForgotPassword from './pages/ForgotPassword'
import ProductsPage from './pages/ProductsPage'
import SingleProductPage from './pages/SingleProductPage'
const routes = [
  { path: '/', element: <HomePage /> },
  { path: '*', element: <NotFoundPage /> },
  { path: 'cart', element: <CartPage /> },
  { path: 'sginUp', element: <SginUp /> },
  { path: 'login', element: <LoginPage /> },
  { path: 'forgotPassword', element: <ForgotPassword /> },
  { path: 'categories/:category', element: <ProductsPage /> },
  { path: 'product/:id', element: <SingleProductPage /> },
]

export default routes
