import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
import {
  incrementProduct,
  decrementProduct,
  removeProduct,
} from "../../store/userSlice";
import { useDispatch } from "react-redux";

const CartItems = ({cart}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col my-4 flex-grow overflow-y-scroll text-[#5e636b]">
      {cart?.map((item) => (
        <div key={item.name} className="flex items-center">
          <span className="flex w-full gap-4 justify-between items-center p-4 border">
            <div className="basis-2/5">{item.name}</div>
            <div className="shrink-0 flex flex-grow justify-between">
              <span className="basis-1/3">${item.price}</span>
              <span className="basis-1/3 flex justify-center items-center gap-2">
                <button>
                  <FaPlusCircle
                    onClick={() => dispatch(incrementProduct(item))}
                  />
                </button>
                <span className="min-w-[3ch] text-center">{item.quantity}</span>
                <button>
                  <FaMinusCircle
                    onClick={() => dispatch(decrementProduct(item))}
                  />
                </button>
              </span>
              <span className="basis-1/3 flex justify-end">
                ${item.price * item.quantity}
              </span>
            </div>
          </span>
          <button
            onClick={() => dispatch(removeProduct(item))}
            className="text-red-600 p-2"
          >
            <IoTrash />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
