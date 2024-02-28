

const CardPayment = () => {
  return (
    <form className="p-8 xl:p-16 flex flex-col gap-4 flex-grow">
                    <input type="text" className="w-full p-2 border-b-2 outline-0" placeholder="Card Name" />
                    <input type="text" className="w-full p-2 border-b-2 outline-0" placeholder="Card Number" />
                    <input type="text" className="w-full p-2 border-b-2 outline-0" placeholder="Card Expire Date" />
                    <input type="text" className="w-full p-2 border-b-2 outline-0" placeholder="Card Screet" />
    </form>
  )
}

export default CardPayment