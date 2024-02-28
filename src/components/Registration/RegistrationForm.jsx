import { useRef } from "react";
import { useDispatch } from 'react-redux'
import { addUser,setCurrentUser } from "../../store/userSlice";
import { setRegistrationVisibility } from "../../store/uiSlice";

const RegistrationForm = () => {

  const dispatch=useDispatch()


  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const currencyRef = useRef();
  const taxIdRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      number: numberRef.current.value,
      currency: currencyRef.current.value,
      taxId: taxIdRef.current.value,
      cart:[]
    };

    dispatch(addUser(newUser))
    dispatch(setCurrentUser(newUser.name))
    dispatch(setRegistrationVisibility(false))

  };

  return (
    <form onSubmit={submitHandler} className="w-full flex flex-col gap-4">
      <div>
        <input
          ref={nameRef}
          type="text"
          placeholder="Name"
          className="p-2 w-full border-b-2"
        />
      
      </div>
      <div>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className="p-2 w-full border-b-2 "
        />
      
      </div>
      <div>
        <input
          ref={numberRef}
          type="number"
          placeholder="Phone"
          className="p-2 w-full border-b-2 "
        />
      
      </div>
      <div>
        <input
          ref={currencyRef}
          type="text"
          placeholder="Currency"
          className="p-2 w-full border-b-2"
        />
      
      </div>
      <div>
        <input
          ref={taxIdRef}
          type="text"
          placeholder="Tax ID"
          className="p-2 w-full border-b-2"
        />
      
      </div>

      <span className="text-sm px-1 font-bold text-[#3674D9] py-2">+ Add More Details</span>

      <button
        type="submit"
        className="mt-8 p-4 btn-primary text-white rounded-sm "
      >
        Update
      </button>
      
    </form>
  );
};

export default RegistrationForm;
