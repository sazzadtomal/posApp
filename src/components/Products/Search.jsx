import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <section className=" bg-white shadow-md">
        <form className="flex justify-center items-center px-4 py-2">
          <IoSearch />
          <input
            type="text"
            className="w-full p-2 outline-0"
            placeholder="Search Products"
          />
        </form>
      </section>
  )
}

export default Search