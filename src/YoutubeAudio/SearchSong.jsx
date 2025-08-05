import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import songDetails from "../Zustand/SearchedSongDetails";
const SearchSong = ({ userquery }) => {
  const Youtube_Restapi_key = "AIzaSyCbT67HwQ4DbIs3y23_1MySkKwFBlKrGZo";
  const userQuery = userquery;
  const [videoId, setVideoId] = useState([]);
  const [titles, setTitles] = useState([]);
  const [image, setImage] = useState([]);
  const navigate = useNavigate();
  const { setSongVideosIds, setSongTitle, setSongThumbnail } = songDetails(
    (state) => state
  );
  const handleSearch = async () => {
    try {
      const songs = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${userquery}&type=video&maxResults=5&key=${Youtube_Restapi_key}`
      );
      const data = await songs.json();
      console.log(userQuery);
      console.log(data);

      const tempTitles = [];
      const tempVideoIds = [];
      const tempImages = [];

      data.items.forEach((item) => {
        tempTitles.push(item.snippet?.title);
        tempVideoIds.push(item?.id?.videoId);
        tempImages.push(item?.snippet?.thumbnails?.high?.url);
      });
      setVideoId(() => tempVideoIds);
      setTitles(() => tempTitles);
      setImage(() => tempImages);
      setSongThumbnail(tempImages);
      setSongTitle(tempTitles);
      setSongVideosIds(tempVideoIds);
    } catch (err) {
      console.log(err);
      console.log(image + "" + videoId);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [userQuery]);
  return (
    <>
      {
        (titles && console.log(image),
        titles.map((item, key) => (
          <div
            key={key}
            className="mx-20 border text-white tracking-wide font-bold  border-transparent border-b-white mb-7 mt-7 "
          >
            <h1
              className="cursor-pointer hover:text-blue-500"
              style={{
                transition: "all 0.1s linear ",
              }}
              onClick={() => navigate(`/playSong/${key}`)}
            >
              {item}
            </h1>
          </div>
        )))
      }
    </>
  );
};
export default SearchSong;
