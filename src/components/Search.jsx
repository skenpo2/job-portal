const Search = () => {
  return (
    <div className=" bg-base-200 align-element mt-8 md:rounded-xl lg:rounded-xl">
      <div className="flex gap-1 py-4">
        <div className=" w-1/2">
          <label className="input w-full rounded-none border-none rounded-tl-xl rounded-bl-xl">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" placeholder="Search" />
          </label>
        </div>
        <div className=" w-1/2 flex gap-6">
          <label className="select rounded-none border-none rounded-tr-lg rounded-br-lg">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </g>
            </svg>
            <select>
              <option>Personal</option>
              <option>Business</option>
            </select>
          </label>
          <button className="btn btn-secondary rounded-lg"> Search</button>
        </div>
      </div>
    </div>
  );
};
export default Search;
