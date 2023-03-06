import { useState } from "react";
import { Nav } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, Navigate } from "react-router-dom";
const Search = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  const searchProducts = () => {
    if (search) {
      return <Navigate to={`/products/${search}`} />;
    }
  };
  return (
    <>
      <form action="" className="flex flex-row justify-around px-12 md:px-32 ">
        <input
          type="text"
          placeholder="Search ..."
          className=" m-2 px-3 py-2 w-4/6"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        {search ? (
          <Link to={`/products/${search}`}>
            <AiOutlineSearch className="text-3xl xl:-ml-48" />
          </Link>
        ) : (
          <AiOutlineSearch className="text-3xl xl:-ml-48" />
        )}
      </form>
    </>
  );
};
export default Search;
