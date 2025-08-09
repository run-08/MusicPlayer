import { useState } from "react";
import AniruthImg from "../assets/Aniruth.webp";
import TakeUserInputByVoice from "../Speech-To-text/TakeUserSpeech";
import SearchSong from "../YoutubeAudio/SearchSong";
const NavBar = () => {
  const [isSearching, setIsSearching] = useState("hidden");
  const [query, setQuery] = useState(null);

  return (
    <>
      <div
        className="bg-blue-600 sticky top-0 z-50 shadow-md
      contain-content grid sm:grid-cols-1 w-full xl:w-460 md:grid-cols-2 lg:grid-cols-3  tracking-[5px] navBar justify-around items-center "
        style={{
          backgroundColor: "#1e1136",
        }}
      >
        <div className="flex mt-2 md:mt-0 ">
          <div
            className="text-white  text-2xl pl-10 overflow-hidden font-bold tracking-[10px] logo cursor-pointer"
            onClick={() => {
              window.location.reload();
            }}
          >
            Arunofyit
          </div>
        </div>
        <div className="searchBar  justify-center flex  items-center">
          <input
            type="text "
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search your favorite Song"
            className="lg:w-150 absolute xl-w-1200 xl:mr-100 text-white sm:w-150 w-200 xl:pr-30 xl:w-120 sm:mb-10 sm:mt-20 mt-10 mr-50 md:mr-0 ml-10 lg:ml-0 p-3 md:pt-3 md-my-0 lg:mb-2 md:mt-10 lg:mt-0 md:w-100  border  text-white-900 border-white-500 sm:p-3  rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-100   focus:font-bold"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#e3e3e3"
            className="text-center absolute sm:ml-60  xl:mr-68 xl:mb-2   md:ml-90   lg:ml-80  cursor-pointer"
            onClick={() => {
              setIsSearching("block");
            }}
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
          <button className="absolute ml-50 rounded-xl w-23  ">
            {TakeUserInputByVoice()}
          </button>
        </div>
        <div className="others right-settings justify-center items-center">
          <div className="grid grid-cols-3 md:pt-4 focus:ring-black-200 ">
            <div className="catalog justify-around items-center pt-5 cursor-pointer  mx-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 900"
                width="40px"
                fill="#e3e3e3"
              >
                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
              </svg>
            </div>
            <div className="catalog justify-around items-center pt-5 cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#e8eaed"
              >
                <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
              </svg>
            </div>
            <div>
              <img
                src={AniruthImg}
                className="object-cover rounded-full w-20 h-20 mb-3 shadow-lg overflow-hidden border-4 border-gray-900  cursor-pointer "
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`showResultTitle  absolute xl:${isSearching} md:block sm:hidden bg-black w-220  xl:w-300 lg:w-110 md:w-90 md:ml-80 lg:ml-87 z-10   border-black border rounded-md ml-120  `}
      >
        {isSearching != "hidden" && <SearchSong userquery={query}></SearchSong>}
      </div>
    </>
  );
};
export default NavBar;
