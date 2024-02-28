
import { IoIosArrowBack } from "react-icons/io";
import RegistrationForm from "./RegistrationForm";
import { useDispatch,useSelector } from 'react-redux'
import { setRegistrationVisibility } from "../../store/uiSlice";

const Registration = () => {
   const dispatch=useDispatch()
   const visible=useSelector(state=>state.ui.registration)
  
  
  return visible ?
    <div className="fixed flex flex-col justify-center items-center w-screen h-screen z-30">
      <div onClick={()=>dispatch(setRegistrationVisibility(false))} className="w-full h-full bg-gray-700 absolute opacity-50"></div>
      <div className="relative w-4/5 md:w-1/2 lg:w-1/4 bg-white rounded-lg p-8 flex flex-col items-center">
        <div className="flex w-full relative justify-center">
          <IoIosArrowBack className="absolute top-0 left-0 text-lg md:text-3xl" onClick={()=>dispatch(setRegistrationVisibility(false))} />
          <h2 className=" text-lg md:text-3xl mb-8 text-black">Add New Customer</h2>
        </div>
        <RegistrationForm/>
      </div>
    </div> :""
  ;
};

export default Registration;
