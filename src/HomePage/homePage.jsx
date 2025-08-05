import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const movieLists = [
    [
      {
        title: `It's New Music ${new Date().toLocaleString("en-US", {
          weekday: "long",
        })}`,
      },
      {
        id: 0,
        title: "KGF_Chapter_1",
        thumbnail:
          "https://tse4.mm.bing.net/th/id/OIP.jl8wX0iVgLC05cZbKNpzHQHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
      {
        id: 1,
        title: "KGF_Chapter_2",
        thumbnail:
          "https://mir-s3-cdn-cf.behance.net/project_modules/1400/567708143997813.6284a8db8a7b2.png",
      },
      {
        id: 2,
        title: "Life_Of_Ram",
        thumbnail: "https://i.ytimg.com/vi/6LD30ChPsSs/maxresdefault.jpg",
      },
      {
        id: 3,
        title: "Pushba",
        thumbnail: "https://i.ytimg.com/vi/vz-wIITmBCE/maxresdefault.jpg",
      },
      {
        id: 4,
        title: "Thani_Oruvan",
        thumbnail:
          "https://th.bing.com/th/id/OIP.dU13Lyf0NFsnI5_xeSDmsgHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      },
    ],
    [
      {
        title: "Classic Songs",
      },
      {
        id: 0,
        title: "Engayeum_Kadhal",
        thumbnail:
          "https://1.bp.blogspot.com/_eewr1b1LpYA/TNd8WmRFHYI/AAAAAAAAKyw/QK8HXNJOmAc/s640/engeyum_kadhal_audio_release_posters.jpg",
      },
      {
        id: 1,
        title: "Minnale",
        thumbnail:
          "https://s.saregama.tech/image/c/fw_485/4/f7/06/minnalae_1440x1440_1619076869.jpg",
      },
      {
        id: 2,
        title: "Ko",
        thumbnail:
          "https://c.saavncdn.com/653/KO-Tamil-2011-20190731134123-500x500.jpg",
      },
      {
        id: 3,
        title: "Singam",
        thumbnail:
          "https://i.ytimg.com/vi/r50QPUqErgM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBUM0kjrZIQWo1VLEwxRrDtQGKghQ",
      },
      {
        id: 4,
        title: "Kandukonden_Kandukonden",
        thumbnail:
          "https://e1.pxfuel.com/desktop-wallpaper/843/339/desktop-wallpaper-enna-solla-pogirai-full-screen-whatsapp-status-enna-solla-pogirai-thumbnail.jpg",
      },
    ],
    [
      {
        title: "Love Songs",
      },
      {
        id: 0,
        title: "Paiya",
        thumbnail:
          "https://cdn-images.dzcdn.net/images/cover/025e6f72ea7f1b92b40f53bcac28ce54/1900x1900-000000-80-0-0.jpg ",
      },
      {
        id: 1,
        title: "Varanayam_Aayiram",
        thumbnail: "https://i.ytimg.com/vi/qu08mmVxJYA/maxresdefault.jpg",
      },
      {
        id: 2,
        title: "I",
        thumbnail: "https://i.ytimg.com/vi/kemCPuDhEDM/maxresdefault.jpg",
      },
      {
        id: 3,
        title: "Naanum_Rowdy_Than",
        thumbnail: "https://i.ytimg.com/vi/dImiR3Sr8Wo/sddefault.jpg",
      },
      {
        id: 4,
        title: "Singam2",
        thumbnail: "https://i.ytimg.com/vi/_Qi8QO7QMic/maxresdefault.jpg",
      },
    ],
    [
      {
        title: "Mass Songs",
      },
      {
        id: 0,
        title: "Maari",
        thumbnail: "https://i.ytimg.com/vi/_Z-wletdIEw/maxresdefault.jpg",
      },
      {
        id: 1,
        title: "Master",
        thumbnail:
          "https://www.tamil2lyrics.com/wp-content/uploads/2020/03/vaathi-coming-tamil-song-lyrics-from-master-vijay-film.jpg",
      },
      {
        id: 2,
        title: "Vidamuyarchi",
        thumbnail:
          "https://assets-in.bmscdn.com/discovery-catalog/events/et00408788-hqkcdlqwcj-landscape.jpg",
      },
      {
        id: 3,
        title: "Jailer",
        thumbnail: "https://wallpapercave.com/wp/wp13392459.jpg",
      },
      {
        id: 4,
        title: "Kaithi",
        thumbnail: "https://i.ytimg.com/vi/WY12sD4Rm-I/maxresdefault.jpg",
      },
    ],
  ];
  const ArtistsName = [
    {
      title: "Aniruth RaviChandran",
      image:
        "https://static.toiimg.com/thumb/msid-90306359,width-400,resizemode-4/90306359.jpg",
    },
    {
      title: "Harris Jeyaraj",
      image:
        "https://m.media-amazon.com/images/M/MV5BOWUyNDMyZTgtNGQ3Ny00NDQwLThmYTktMjlkY2JlNDg3Y2ZlXkEyXkFqcGc@._V1_.jpg",
    },
    {
      title: "A.R. Rahman",
      image:
        "https://e0.pxfuel.com/wallpapers/110/42/desktop-wallpaper-ar-rahman-age-height-wife-children-biography-more-a-r-rahman.jpg",
    },
    {
      title: "Yuvan Shankar Raja",
      image: "https://pbs.twimg.com/media/EWdmXA-VAAAqw1-.jpg",
    },
    {
      title: "S.P. Balasubraniyam",
      image: "https://i.scdn.co/image/ab67616d0000b273181c1c67b2b6f37658ee9063",
    },
    {
      title: "Unni Krishnan",
      image: "https://chiloka.com/i/p/p/15/6/29.jpg",
    },
    {
      title: "Alen Walker",
      image:
        "https://edm.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg5Mzg0MzcyODg4MDIwODg1/279912798_554688012687989_7371472378482916394_n-e1651905549299-696x522.jpg",
    },
  ];
  // movieLists.forEach((item) => item.map((innerItem) => console.log(innerItem)));
  const genrateArtistView = (key) => {
    return (
      <>
        <div className="artists  w-25 h-25 hover:scale-110 cursor-pointer  my-5">
          <img
            src={ArtistsName[key].image}
            className="object-contains rounded-full mt-10 hover:ring-4 hover:outline-none hover:ring-slate-600/50 w-full h-full hover:scale-3d"
          ></img>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container relative my-1 ">
        <div className="artists absolute md:block sm:hidden overflow-hidden md:mx-2 p-2 md:h-120  xl:h-400   w-30 bg-black  border border-transparent border-r-black h-full">
          {ArtistsName.map((item, key) => genrateArtistView(key))}
        </div>
        <div className="homePageSongsCatalog xl:w-430 absolute  bg-[#292929] xl:ml-33  z-0 mx-20 lg:ml-30 rounder-md md:w-150 lg:w-200 md:mt-10  sm:w-120  xl:mt-0 xl:mb-20 rounded-3xl h-400  md:mx-30 ">
          <div className="category_separator lg:w-120 sm:w-30  lg:mx-5 mx-10 md:w-100 grid lg:grid-cols-3 md:grid-cols-3 md:px-2  sm:grid-cols-1 my-3">
            <div className=" All_music_podcast sm:mb-2 sticky hover:bg-slate-300/50 hover:ring-2 t-20 z-50 w-25 h-15 tracking-widest  font-medium text-center border text-white border-white rounded-3xl p-4 cursor-pointer  hover:text-white">
              <span>All</span>
            </div>
            <div className=" music w-25 sm:mb-2 h-15 tracking-widest font-medium text-center border text-white border-white rounded-3xl p-4 cursor-pointer  hover:bg-slate-300/50 hover:ring-2">
              <span> Music </span>
            </div>
            <div className=" podacast  w-25 h-15 sm:mb-2 tracking-widest font-medium text-white text-center border border-white rounded-3xl p-4 cursor-pointer hover:bg-slate-300/50 hover:ring-2 hover:text-white">
              <span> Podcast </span>
            </div>
          </div>
          <div className="recent_history my-2 "></div>
          <div className=" Playsong_box ">
            {movieLists.map((movieList) => generatePlayBox(movieList))}
          </div>
        </div>
      </div>
    </div>
  );
};

const generatePlayBox = (movieListBox) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  return (
    <>
      <h1 className=" font-bold  mx-10  text-white title_of_play_box tracking-widest  ">
        {movieListBox[0].title}
      </h1>
      <div className={`grid grid-cols-6 gap-80 my-10 ml-23   `}>
        {[...Array(5)].map((_, key) => (
          <div
            key={key}
            tabIndex="0"
            onClick={() =>
              navigate(`/listMovieSongs`, {
                state: {
                  movieName: movieListBox[key + 1].title,
                  thumbnail: movieListBox[key + 1].thumbnail,
                },
              })
            }
            className="border relative border-white rounded-md w-64 h-64 hover:outline-none hover:ring-6 transition-all 2s duration-[200ms] delay[30ms] ease-linear  hover:scale-105  hover:ring-slate-200/50  cursor-pointer"
          >
            <img
              src={movieListBox[key + 1].thumbnail}
              className="object-fit w-full h-full rounded-md"
              alt={movieListBox[key + 1].title}
            ></img>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="white"
              className="absolute bottom-1 hover:bg-slate-300/50 mb-0.5 right-3  rounded-full"
            >
              <path d="m383-310 267-170-267-170v340Zm97 230q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
            </svg>
          </div>
        ))}
      </div>
    </>
  );
};

export default Homepage;
