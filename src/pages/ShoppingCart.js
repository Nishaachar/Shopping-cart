import { useTitle } from "../hooks/useTitle"
import { CartCard } from "../components/CartCard"
import { useCart } from "../context/CartContext";

export const ShoppingCart = ({title}) => {


  const { total, cartList } = useCart();

  useTitle(title);

  return (
    <main>
      <section className="cart">
        <h1>Cart Items : {cartList.length} / ${total}</h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}
