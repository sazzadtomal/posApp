import { useEffect } from "react";
import CartView from "./CartView";
import { useSelector, useDispatch } from "react-redux";
import { setCartVisibility } from "../../store/uiSlice";
import useResponsiveResize from "../../hooks/useResponsiveResize";

const Cart = () => {
  const visible = useSelector((state) => state.ui.cart);
  const dispatch = useDispatch();
  const windowWidth = useResponsiveResize();

  useEffect(() => {
    if (windowWidth >= 1024) {
      dispatch(setCartVisibility(true));
    } else {
      dispatch(setCartVisibility(false));
    }
  }, [windowWidth]);

  return visible ? (
    <section className="w-full lg:w-[50%] h-full flex absolute lg:static">
      <div
        onClick={() => {
          dispatch(setCartVisibility(false));
        }}
        className="w-full h-full absolute bg-black opacity-25 lg:hidden z-[5]"
      ></div>

      <CartView />
    </section>
  ) : (
    <button
      type="button"
      onClick={() => {
        dispatch(setCartVisibility(true));
      }}
      className="absolute bottom-8 right-8 w-16 h-16 btn-primary  flex justify-center items-center z-5"
    >
      Cart
    </button>
  );
};

export default Cart;
