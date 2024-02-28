import { TbBrandCashapp } from "react-icons/tb";
import { FaRegCreditCard } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

const PaymentSideBar = () => {
  return (
    <div className="flex flex-row md:flex-col w-full md:w-[50%] border-r py-8 justify-center md:justify-start ">
                  <button className=" p-2 md:p-4 flex items-center text-sm  xl:text-xl">
                    <TbBrandCashapp />
                    <span className=" px-2 md:px-4">Cash</span>
                    </button>
                  <button className=" p-2 md:p-4 btn-secondary flex items-center text-sm  xl:text-xl">
                    <FaRegCreditCard />
                    <span className=" px-2 md:px-4">Card</span>
                    </button>
                  <button className=" p-2 md:p-4 flex items-center text-sm  xl:text-xl">
                    <FaRegUser />
                    <span className=" px-2 md:px-4">On Account</span>
                    </button>
                  <button className=" p-2 md:p-4 flex items-center text-sm  xl:text-xl">
                    <FaRegCreditCard />
                    <span className=" px-2 md:px-4">Cheque</span>
                    </button>
             </div>
  )
}

export default PaymentSideBar