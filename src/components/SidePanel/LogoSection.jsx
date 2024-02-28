const LogoSection = () => {
  return (
    <section className="w-full py-4  items-center flex flex-col  bg-gray-100">
      <span className="text-3xl text-black py-16 font-bold">
        go<span className=" text-green-500">B</span>illing
      </span>
      <div className="flex w-full flex-col px-4">
        <span className="text-xs md:text-sm p">Location:</span>
        <span className="text-sm">Los Angeles,California</span>
      </div>
    </section>
  );
};

export default LogoSection;
