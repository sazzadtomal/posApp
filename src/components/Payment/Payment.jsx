import PaymentSideBar from "./PaymentSideBar";
import CardPaymentForm from "./CardPaymentForm";
import PaymentButtons from "./PaymentButtons";
import { useSelector} from 'react-redux'


const Payment = ({final}) => {
  
    
    const visible=useSelector(state=>state.ui.payment)



  return (
    visible? <section className="fixed lg:absolute flex flex-col h-full w-full lg:w-[50%] bg-white right-0 pt-2 lg:p-6 lg:pt-8 shadow ">
        <section className="flex w-full justify-between items-center p-8 border rounded">
              <span className=" text-sm lg:text-lg">Order Amount</span>
              <span className=" font-bold text-black lg:text-2xl">${final}</span>
        </section>
        <section className="mt-4 flex-col flex md:flex-row w-full flex-grow border rounded ">
              
              <PaymentSideBar/>
              <div className="w-full relative flex flex-col flex-grow md:flex-grow-0">
                  <CardPaymentForm/>
                  <PaymentButtons/>
              </div>
        </section>
    </section> : ""
  )
}

export default Payment