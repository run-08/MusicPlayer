import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TakeUserInputByVoice from "../Speech-To-text/TakeUserSpeech";
import SearchSong from "../YoutubeAudio/SearchSong";
const NavBar = () => {
  const [isSearching, setIsSearching] = useState("hidden");
  const [query, setQuery] = useState(null);
  const [searchColor, setSearchColor] = useState("white");
  const [shadow, setShadow] = useState("rgba(0,0,0,0)");
  const navigate = useNavigate();
  const showSearchColor = () => {
    setSearchColor("purple");

    setTimeout(() => {
      setSearchColor("white");
    }, 3000);
  };

  return (
    <>
      <div
        className=" flex mx-auto xl:w-470 lg:w-450 md:w-440 sm:w-450 w-450  items-center justify-between"
        style={{
          backgroundColor: "#1e1136",
        }}
      >
        <div className="flex my-5 mx-5  ">
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
            className="  border p-3 mx-60 w-100 text-white border-white-500    rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-100   focus:font-bold"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill={searchColor}
            className="absolute ml-90 cursor-pointer"
            onClick={() => {
              if (localStorage.getItem("name") === null)
                alert("Login || signup first!");
              else setIsSearching("block");
            }}
            onMouseOverCapture={() => showSearchColor()}
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
          <button className="ml-120 rounded-xl absolute w-23  ">
            {TakeUserInputByVoice()}
          </button>
        </div>

        <button
          className={`green cursor-pointer border p-4 px-10 ring-1 hover:border-pink-400 rounded-md text-white border-purple-300 hover:scale-103 transition-all ${
            localStorage.getItem("name") ? "hidden" : ""
          } duration-[600ms] ease-in-out`}
          style={{
            boxShadow: `0px 0px 10px ${shadow}`,
          }}
          onMouseOut={() => {
            setShadow("rgba(0,0,0,0)");
          }}
          onMouseOver={() => setShadow("rgba(178,59,194,1)")}
          onClick={() => navigate("/register", { state: { from: "login" } })}
        >
          Login
        </button>
        <button
          className={`green cursor-pointer ${
            localStorage.getItem("name") !== null ? "hidden" : ""
          } border p-4 px-10 ring-1 hover:border-pink-400 rounded-md text-white border-purple-300 hover:scale-103 transition-all  duration-[600ms] ease-in-out`}
          style={{
            boxShadow: `0px 0px 10px ${shadow}`,
          }}
          onMouseOut={() => {
            setShadow("rgba(0,0,0,0)");
          }}
          onMouseOver={() => setShadow("rgba(178,59,194,1)")}
          onClick={() => navigate("/register", { state: { from: "signup" } })}
        >
          Sign up
        </button>
        {localStorage.getItem("name") !== null ? (
          <p className="font-semibold h1 text-white">
            Welcome,
            <span className="text-green-400 h1">
              {" " + localStorage.getItem("name")}
            </span>
          </p>
        ) : (
          ""
        )}
        <div className="others right-settings justify-center items-center">
          <div className="grid grid-cols-3 md:pt-4 focus:ring-black-200 ">
            {/* <div className="catalog justify-around items-center pt-5 cursor-pointer  mx-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 900"
                width="40px"
                fill="#e3e3e3"
              >
                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
              </svg>
            </div> */}
            {/* <div className="catalog justify-around items-center pt-5 cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#e8eaed"
              >
                <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
              </svg>
            </div> */}
            {/* <div>
              <img
                src={AniruthImg}
                className="object-cover rounded-full w-20 h-20 mb-3 shadow-lg overflow-hidden border-4 border-gray-900  cursor-pointer "
              ></img>
            </div> */}
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
