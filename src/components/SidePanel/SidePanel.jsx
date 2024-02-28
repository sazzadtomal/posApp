import SidePanelButtons from "./SidePanelButtons";
import LogoSection from "./LogoSection";
import { RxCross2 } from "react-icons/rx";
import { useDispatch,useSelector } from 'react-redux'
import { setSidePanelVisibility } from "../../store/uiSlice";

const SidePanel = () => {
    const dispatch=useDispatch()
    const visible=useSelector(state=>state.ui.sidePanel)
  return (
    visible ?<section className="absolute flex w-full h-full">
      <div className="flex flex-col w-[80%] md:w-1/2 xl:w-1/4 h-full bg-white z-30">
          <LogoSection/>
          <SidePanelButtons/>
      </div>
      <div onClick={()=>{dispatch(setSidePanelVisibility(false))}} className="bg-gray-600 opacity-25 flex-grow z-20">
        <button className="opacity-100 text-white text-5xl"><RxCross2 /></button>
      </div>
    </section> :""
  );
};

export default SidePanel;
