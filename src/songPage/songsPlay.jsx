import { useParams } from "react-router-dom";
import songDetails from "../Zustand/SearchedSongDetails";
const PlaySong = () => {
  const { id } = useParams();
  const { songThumbnail, songTitle, songVideoIds } = songDetails(
    (state) => state
  );
  if (!songVideoIds[id]) {
    console.log(songVideoIds);

    return <div>Loading...</div>;
  }

  return (
    <div className="bg-black  ">
      <div
        className={` mx-70  `}
        style={{
          maxHeight: "500px",
        }}
      >
        <div className="grid ">
          <img
            src={`https://i.ytimg.com/vi/${songVideoIds[id]}/maxresdefault.jpg`}
            alt={songThumbnail[id]}
            className="w-300 h-150 object-cover   scale-110 opacity-50 mt-30 inset-0"
          ></img>
        </div>
      </div>
      <iframe
        width="900"
        height="100"
        src={`https://www.youtube.com/embed/${songVideoIds[id]}?autoplay=1&mute=0`}
        title={songTitle[id]}
        frameBorder="0"
        allow="autoplay"
        className=" w-full  mt-53 "
      ></iframe>
    </div>
  );
};
export default PlaySong;
