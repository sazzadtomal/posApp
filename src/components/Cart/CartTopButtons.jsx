import { RxHamburgerMenu } from "react-icons/rx";
import { PiNotePencilLight } from "react-icons/pi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbPlaceholder } from "react-icons/tb";
import { FaPlusCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { setSidePanelVisibility } from "../../store/uiSlice";
import {memo} from "react";

const CartTopButton = () => {
  const dispatch=useDispatch()
  
  return (
    <div className="flex items-center py-2 w-full shrink-0 ">
      <button onClick={()=>dispatch(setSidePanelVisibility(true))} className="pr-4 py-2">
        <RxHamburgerMenu size={30} />
      </button>
      <section className="flex flex-grow flex-wrap gap-2 [&>*]:px-4 [&>*]:py-2  [&>*]:rounded-sm">
        <button className="flex flex-grow justify-center items-center btn-secondary gap-2">
          <PiNotePencilLight />
          <span>Note</span>
        </button>
        <button className="flex flex-grow justify-center items-center btn-secondary gap-2">
          <MdOutlineLocalShipping />
          <span>Shipping</span>
        </button>
        <button className="flex flex-grow justify-center items-center btn-secondary gap-2">
          <TbPlaceholder />
          <span>Hold Orders</span>
        </button>
        <button className="flex flex-grow justify-center items-center btn-secondary gap-2">
          <FaPlusCircle />
          <span>New Item</span>
        </button>
      </section>
    </div>
  );
};

export default memo(CartTopButton);
