import { setSettingsVisibility } from "../../store/uiSlice";
import { IoIosArrowBack } from "react-icons/io";
import {useDispatch } from "react-redux";

const SettingsHeader = () => {
    const dispatch=useDispatch()
  return (
    <div className="relative w-full text-center">
    <span className='text-lg md:text-2xl text-black'>Settings</span>
    <button onClick={()=>dispatch(setSettingsVisibility(false))} className="absolute left-0 text-lg md:text-2xl"><IoIosArrowBack /></button>
</div>
  )
}

export default SettingsHeader