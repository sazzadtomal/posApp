import { MdOutlineCancel } from "react-icons/md";
import { FaRegHandBackFist } from "react-icons/fa6";
import { TbDiscount2 } from "react-icons/tb";
import { FaMoneyBill } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentVisibility } from "../../store/uiSlice";
import { memo } from "react";

const CartBottomButtons = () => {
  const dispatch = useDispatch();

  return (
    <section className="my-2 flex justify-between flex-wrap gap-2 [&>*]:px-5 [&>*]:py-3 shrink-0">
      <button className="flex justify-center items-center gap-3 flex-grow btn-danger">
        <MdOutlineCancel />
        <span>Cancel</span>
      </button>
      <button className="flex justify-center items-center gap-3 flex-grow btn-secondary">
        <FaRegHandBackFist />
        <span>Hold</span>
      </button>
      <button className="flex justify-center items-center gap-3 flex-grow btn-secondary">
        <TbDiscount2 />
        <span>Discount</span>
      </button>
      <button
        onClick={() => dispatch(setPaymentVisibility(true))}
        className="flex justify-center items-center gap-3 flex-grow btn-secondary"
      >
        <FaMoneyBill />
        <span>Pay Now</span>
      </button>
    </section>
  );
};

export default memo(CartBottomButtons);
