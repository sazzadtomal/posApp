import { BsThreeDotsVertical } from "react-icons/bs";
import catagoriesData from "../../data/catagoriesData"
import { useDispatch } from "react-redux";
import { setCatagoriesVisibility } from "../../store/uiSlice";

const TopCatagories = () => {
  const dispatch=useDispatch()
  
  return (
    <section className="w-full flex  justify-between items-center px-2 lg:px-6 gap-2">
    <div className="flex flex-wrap flex-grow gap-2 [&>*]:px-4 [&>*]:py-2 [&>*]:bg-white [&>*]:border">
      
      {catagoriesData.map(cat=><button key={cat} className="flex-grow text-center">{cat}</button>)}
      
    </div>
    <button onClick={()=>dispatch(setCatagoriesVisibility(true))} className="py-2">
      <BsThreeDotsVertical size={20} />
    </button>
  </section>
  )
}

export default TopCatagories