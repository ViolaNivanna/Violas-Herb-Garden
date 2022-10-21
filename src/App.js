import { Route, Switch } from 'react-router-dom';

import CartProvider from './store/CartProvider';
import MainNavigation from './components/layout/MainNavigation';
import OverviewPage from './pages/OverviewPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderPage from './pages/OrderPage';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <CartProvider>
      <MainNavigation/>
      <Switch>
        <Route path='/' exact>
          <OverviewPage />
        </Route>
        <Route path='/cart' exact>
          <CartPage />
        </Route>
        <Route path='/cart/checkout'>
          <CheckoutPage/>
        </Route>
        <Route path='/order'>
          <OrderPage/>
        </Route>
        <Route path='/products/:productId'>
          <ProductDetail />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </CartProvider>
  );
}

export default App;