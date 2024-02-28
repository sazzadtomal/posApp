import { MdOutlineDashboard } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";

import {useDispatch,useSelector } from "react-redux";
import { setSettingsVisibility } from "../../store/uiSlice";

const SidePanelButtons = () => {
  const dispatch=useDispatch();
  const settings=useSelector(state=>state.ui.settings)

  
  return (
    <section className="flex flex-col flex-grow pt-4 px-2">
      <button className="p-4 text-left flex items-center gap-3">
        <MdOutlineDashboard />
        <span>Dashboard</span>
      </button>

      <button className="p-4 text-left flex items-center gap-3">
        <IoLocationSharp />
        <span>Locations</span>
      </button>

      <button className="p-4 text-left flex items-center gap-3">
        <LiaFileInvoiceDollarSolid />
        <span>Pos Invoices</span>
      </button>

      <button onClick={()=>dispatch(setSettingsVisibility(true))} className={`${settings ?"bg-[#6d79ca5c]" : "" } p-4 text-left flex items-center gap-3`}>
        <CiSettings />
        <span>Settings</span>
      </button>
    </section>
  );
};

export default SidePanelButtons;
