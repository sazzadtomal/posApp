import { IoIosAddCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/userSlice";
import { setRegistrationVisibility } from "../../store/uiSlice";

const SelectUser = ({ users, currentUser }) => {
  const dispatch = useDispatch();

  const currentUserHandler = (e) => {
    dispatch(setCurrentUser(e.target.value));
  };

  return (
    <div className="flex items-center text-2xl mt-4 gap-2 bg-[#EEF0F9] text-[#6D7ACA] p-2 rounded-lg outline-0">
      <CgProfile />
      <select
        onChange={currentUserHandler}
        value={currentUser}
        className="flex-grow bg-[#EEF0F9]"
      >
        {users?.map((user) => (
          <option key={user.name} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>
      <button onClick={() => dispatch(setRegistrationVisibility(true))}>
        <IoIosAddCircleOutline />
      </button>
    </div>
  );
};

export default SelectUser;
