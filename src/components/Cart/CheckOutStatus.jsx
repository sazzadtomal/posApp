
const CheckOutStatus = ({ data }) => {

  const {count,tax,shipping,discount,total,final }=data

  return (
    <section className="w-full flex flex-col items-end mt-4 shrink-0">
      <div className="flex w-full md:w-1/2 justify-between items-center border-t-2 py-2">
        <span>Sub Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="flex w-full md:w-1/2 justify-between items-center border-t-2 py-2">
        <span>Tax</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="flex w-full md:w-1/2 justify-between items-center border-t-2 py-2">
        <span>Shipping</span>
        <span>${shipping.toFixed(2)}</span>
      </div>
      <div className="flex w-full md:w-1/2 justify-between items-center border-t-2 py-2">
        <span className="text-[#3674D9] font-bold max-w-[50%]">
          Discount on Cart
        </span>
        <span>${discount.toFixed(2)}</span>
      </div>

      <div className="mt-2 w-full bg-[#E1EAF9] font-semibold flex justify-between items-center p-2 rounded-md text-[#4B82DD] shrink-0">
        <div className="text-xs">Products Count({count})</div>
        <div className="flex md:w-1/2 justify-between text-3xl">
          <span>Total</span>
          <span className="pl-2">${final}</span>
        </div>
      </div>
    </section>
  );
};

export default CheckOutStatus;
