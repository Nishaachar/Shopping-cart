import { Route, Routes } from 'react-router-dom';
import { ProductList, ShoppingCart } from '../pages';

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<ProductList title='Home'/>}/>
            <Route path='/cart' element={<ShoppingCart title='Cart'/>}/>
        </Routes>
    </div>
  )
}
