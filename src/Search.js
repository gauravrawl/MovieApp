import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
  return (
    <>
      <section className="search-section" >
        <h2 className="heading">MyMovies</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input id="search"  name="search"
              type="search" style={{color: "white"}}
              placeholder="search movie"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  );
};

export default Search;

