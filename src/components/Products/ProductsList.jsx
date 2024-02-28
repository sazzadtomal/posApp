import productsData from "../../data/productsData";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/userSlice";

const ProductsList = () => {

    const dispatch = useDispatch();
  
  
    return (
    <section className="flex flex-wrap overflow-y-scroll lg:px-4">
    {productsData.map((product) => (
      <div key={product.name}
        onClick={() => dispatch(addProduct(product))}
        className="basis-1/2 md:basis-1/4  p-2 shrink-0 grow-0  max-w-[50%] md:max-w-[25%]  xl:basis-1/4 xl:max-w-[20%]  overflow-hidden text-[#7E8B97]"
      >
        <div className=" w-full h-full border flex flex-col items-center overflow-hidden">
          <img
            className=" h-[180px] w-full object-cover  overflow-hidden"
            src={product.img}
            alt="sasas"
          />
          <div className="flex flex-col items-center justify-center w-full ">
            <span className="text-lg font-bold border-b w-full text-center">
              ${product.price}
            </span>
            <span className="px-2">{product.name}</span>
          </div>
        </div>
      </div>
    ))}
  </section>
  )
}

export default ProductsList