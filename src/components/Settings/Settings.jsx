import { useSelector,useDispatch } from "react-redux";

import Taxation from "./Taxation";
import DiscountRadioButtons from "./DiscountRadioButtons";
import SettingsHeader from "./SettingsHeader";
import { setSettingsVisibility } from "../../store/uiSlice";

const Settings = () => {
  const visible = useSelector((state) => state.ui.settings);
  const dispatch=useDispatch()

  return visible ? (
    <div className="absolute w-full h-full flex justify-center items-center">
      <section onClick={()=>{dispatch(setSettingsVisibility())}} className="absolute w-full h-full  bg-gray-600 opacity-25 z-40 "></section>

      <div className=" bg-white relative flex flex-col items-center px-6 py-4 md:py-6 md:px-8 z-50">
        <SettingsHeader />
        <Taxation />
        <DiscountRadioButtons />
      </div>
    </div>
  ) : (
    ""
  );
};

export default Settings;
