import ProductListing from "./components/ProductListing";
import { Wishlist } from "./components/Wishlist";
import { useCartData } from "./contexts/dataContext";
import { useProductLoader } from "./hooks/useProductLoader";
import "./styles.css";

export default function App() {
  const { state, dispatch } = useCartData();
  const { response } = useProductLoader();

  return (
    <div className="App">
      <button
        className="btn"
        onClick={() => dispatch({ type: "ROUTE", payload: "productListing" })}
      >
        Product Listing
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "ROUTE", payload: "wishlist" })}
      >
        Wishlist
      </button>
      {state.route === "productListing" && <ProductListing />}
      {state.route === "wishlist" && <Wishlist />}
    </div>
  );
}
