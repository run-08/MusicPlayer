import ColorThief from "colorthief";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import songDetails from "../Zustand/SearchedSongDetails";
import MovieSongList from "./StaticMovieSongs";
export const ListMovieSongs = () => {
  const imgRef = new useRef(null);
  const {
    setSongThumbnail,
    setSongVideosIds,
    setSongTitle,
    songTitle,
    songVideoIds,
    songThumbnail,
  } = songDetails((state) => state);
  const [bgColor, setBgColor] = useState("black");
  const navigate = useNavigate();
  const Youtube_Restapi_key = "AIzaSyBwXH0sbemwPRlykrO9MJ5j60sJYxZgkzc";
  const location = useLocation();
  const MovieName = location.state.movieName;
  const thumbnail = location.state.thumbnail;
  const movieSongs = MovieSongList[MovieName];

  const getSong = async () => {
    const tempTitles = [];
    const tempVideoIds = [];
    const tempImages = [];

    for (const item of movieSongs) {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${item.title} tamil song&type=video&maxResults=1&key=${Youtube_Restapi_key}`
        );
        const data = await response.json();
        ``;
        if (data.items && data.items.length > 0) {
          const video = data.items[0];
          tempTitles.push(video.snippet?.title);
          tempVideoIds.push(video.id?.videoId);
          tempImages.push(video.snippet?.thumbnails?.high?.url);
        }
      } catch (err) {
        console.error(err);
      }
    }

    setSongThumbnail(tempImages);
    setSongTitle(tempTitles);
    setSongVideosIds(tempVideoIds);
  };

  useEffect(() => {
    getSong();
    const img = imgRef.current;
    if (!img) return;
    img.crossOrigin = "anonymous";
    img.addEventListener("load", () => {
      const colorThief = new ColorThief();
      const palette = colorThief.getPalette(img, 3);
      const colors = palette
        .map((c) => `rgba (${c[0]}, ${c[1]}, ${c[2]}, 1)`)
        .sort(() => Math.random() - 0.5);
      const angle = Math.floor(Math.random() * 360);
      const gradient = `linear-gradient(${angle}deg, ${colors.join(",")}`;

      setBgColor(gradient);
    });
  }, []);

  return (
    <div
      className={`rounded-ml  md:w-400 sm:w-200 xl:w-auto my-1 `}
      style={{
        background: bgColor,
      }}
    >
      <div className="MovieImage  mx-30 pt-3">
        <img
          src={thumbnail}
          alt="Movie Poster"
          className="rounded-md mx-1 object-contain w-fit h-fit cursor-pointer"
          ref={imgRef}
        />
      </div>

      <div>
        {" "}
        <div className="songLists mx-30 mt-7 space-y-4  text-white ">
          <div className="grid grid-cols-3  font-bold border-b pb-2">
            <div>Title</div>
            <div>Movie</div>
            <div className="w-auto ">Duration</div>
          </div>
          {movieSongs.map((item, key) => (
            <div
              className="grid sm:grid-cols-3 py-1 sm:py-0 grid-cols-1   items-center cursor-pointer"
              key={key}
              onClick={() => navigate(`/playSong/${key}`)}
            >
              <div className="flex items-center space-x-2">
                <img
                  src={songThumbnail[key]}
                  alt=""
                  className="w-12 h-12 rounded-md"
                />
                <span className="font-medium">{item.title}</span>
              </div>
              <div>{MovieName}</div>
              <div>{item.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
