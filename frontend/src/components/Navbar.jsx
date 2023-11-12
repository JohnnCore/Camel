import { useEffect, useState } from "react"
import useCart from "../hooks/useCart";

const Navbar = () => {
  const { cart } = useCart();
  const [cartNumber, setCartNumber] = useState(cart.length);

  useEffect(() => {
    // Calculate the cart count
    const cartCount = cart.length;

    // Update the CSS variable for cart count
    document.documentElement.style.setProperty('--cart-count', `'${cartCount}'`);
  }, [cart]);


  return (
    <nav className="navbar">
      <div className="logo"><a href="/">&#128043; Camel</a></div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About</a></li>
        <li className="nav-dropdown">
          <a href="#">Profile</a>
          <div className="dropdown-content">
            <a href="/profile">My Profile</a>
            <a href="/settings">Settings</a>
            <a href="/logout">Logout</a>
          </div>
        </li>
        <li className="cart-link"><a href="/cart" id="cart-link">Cart</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;