import { useState } from "react";

const ArtistSongs = () => {
  const ArtistsFameSongs = useState([]);
  return (
    <>
      <div className="ArtistsSong p-0">
        <div className="artists-image  my-10 flex justify-center items-center">
          <img
            src={
              "https://www.deccanchronicle.com/h-upload/2025/03/19/1900060-untitleddesign84.webp"
            }
            className="object-cover w-120 h-120 mr-300 border box-border cursor-pointer p-0 m-0 "
            alt=""
          ></img>
        </div>
        <div className="artists_songs my-10 absolute mx-4 w-[calc(100%-2rem)] bg-black h-120">
          <div className="playlist ">
            <div className="song-bar  mx-10 h-15 bg-white  cursor-pointer mt-10 ring-3 hover:ring-purple-300 rounded-xl"></div>
            <div className="song-bar  mx-10 h-15 bg-white  cursor-pointer mt-10 ring-3 hover:ring-purple-300 rounded-xl"></div> 
          </div>
        </div>
      </div>
    </>
  );
};
export default ArtistSongs;
