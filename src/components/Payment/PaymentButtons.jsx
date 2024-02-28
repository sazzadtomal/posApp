import { MdOutlineCancel } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { useDispatch } from 'react-redux'
import { setPaymentVisibility, } from "../../store/uiSlice";

const PaymentButtons = () => {
    const dispatch=useDispatch()  
  
    return (
    <div className="flex font-bold gap-4 px-8 xl:px-16 relative bottom-8 text-sm 2xl:text-xl">
                    <button onClick={()=>dispatch(setPaymentVisibility(false))} className="p-2 xl:p-4 btn-danger rounded justify-center flex items-center gap-2">
                        <MdOutlineCancel />
                        <span>Cancel</span>
                    </button>
                    <button className="p-2 xl:p-4 btn-primary flex justify-center items-center gap-2 rounded flex-grow">
                    <GiReceiveMoney />
                        <span>Complete Payment </span>
                    </button>
    </div>
  )
}

export default PaymentButtons