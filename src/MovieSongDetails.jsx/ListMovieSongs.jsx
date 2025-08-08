import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import songDetails from "../Zustand/SearchedSongDetails";
import MovieSongList from "./StaticMovieSongs";
export const ListMovieSongs = () => {
  const {
    setSongThumbnail,
    setSongVideosIds,
    setSongTitle,
    songTitle,
    songVideoIds,
    songThumbnail,
  } = songDetails((state) => state);
  const navigate = useNavigate();
  const Youtube_Restapi_key = "AIzaSyBwXH0sbemwPRlykrO9MJ5j60sJYxZgkzc";
  const location = useLocation();
  console.log(location);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="rounded-xl absolute w-full bg-black h-full">
      <div className="MovieImage w-full my-20 h-60 mx-60">
        <img
          src={thumbnail}
          alt="Movie Poster"
          className=" h-70  rounded-md mx-1 object-contain"
        />
      </div>
      <hr className="w-400 mx-40 " />
      <div>
        {" "}
        <div className="songLists mx-40 mt-7 space-y-4  text-white ">
          <div className="grid grid-cols-3 w-440 font-bold border-b pb-2">
            <div>Title</div>
            <div>Movie</div>
            <div>Duration</div>
          </div>
          {movieSongs.map((item, key) => (
            <div
              className="grid grid-cols-3 w-440  items-center cursor-pointer"
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
