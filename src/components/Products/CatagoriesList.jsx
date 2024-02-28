import catagories from "../../data/catagoriesData";
import { useSelector,useDispatch } from "react-redux";
import { setCatagoriesVisibility } from "../../store/uiSlice";

const CatagoriesList = () => {
  const visible=useSelector(state=>state.ui.catagories)
  const dispatch=useDispatch()

  return (
    visible ? <div className="fixed w-full h-full z-[50]">
      <section onClick={()=>dispatch(setCatagoriesVisibility(false))} className="absolute w-full h-full  bg-gray-600 opacity-25"></section>

      <div className=" bg-white absolute right-0 w-4/5 md:w-1/2 lg:w-1/3 h-full flex flex-col items-center py-6 px-8 gap-8  ">
          <div className="text-2xl text-black">Catagories</div>

          <div className="flex flex-wrap gap-2 [&>*]:px-2 [&>*]:py-1 md:[&>*]:px-4 md:[&>*]:py-2  [&>*]:bg-white [&>*]:border">
             {catagories.map(cat=><button key={cat} className="text-center">{cat}</button>)}
      </div>


      </div>
    </div>:""
  )
}

export default CatagoriesList