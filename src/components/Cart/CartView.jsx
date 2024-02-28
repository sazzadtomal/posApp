import CartTopButtons from "./CartTopButtons";
import SelectUser from "./SelectUser";
import CartItems from "./CartItems";
import CheckOutStatus from "./CheckOutStatus";
import CartBottomButtons from "./CartBottomButtons";
import { findCurrentCart } from "../../store/userSlice";
import { useSelector } from "react-redux";
import calculateTotal from "../../utilities/calculateTotal";
import Payment from "../Payment/Payment";
import { useMemo } from "react";

const CartView = () => {
  const users = useSelector((state) => state.users.users);
  const currentUserName = useSelector((state) => state.users.currentUser);
  const cart = findCurrentCart(users, currentUserName);
  const checkOutData=useMemo(()=>calculateTotal(cart),[cart])


  return (
    <aside className=" w-4/5 lg:w-full flex px-4 flex-col h-full left-0 top-0 absolute lg:static bg-white border z-10">
      <CartTopButtons />
      <SelectUser users={users} currentUser={currentUserName} />
      <CartItems cart={cart} />
      <CheckOutStatus data={checkOutData}/>
      <CartBottomButtons />
      <Payment final={checkOutData.final}/>
    </aside>
  );
};

export default CartView;
