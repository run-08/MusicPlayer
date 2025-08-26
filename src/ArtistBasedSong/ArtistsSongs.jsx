import ColorThief from "colorthief";
import { useEffect, useRef, useState } from "react";
const ArtistSongs = () => {
  const [bgColor, setBgColor] = useState("black");
  const imgRef = useRef(null);
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    img.crossOrigin = "anonymous";
    img.addEventListener("load", () => {
      const colorThief = new ColorThief();
      const colorPallete = colorThief.getPalette(img, 3);
      console.log(colorPallete);
      const colors = colorPallete
        .map((c) => `rgb(${c[0]},${c[1]},${c[2]})`)
        .sort(() => Math.random() - 0.5);
      const angle = Math.floor(Math.random() * 360);
      const gradient = `linear-gradient(${angle}deg , ${colors.join(",")})`;
      setBgColor(gradient);
      console.log(gradient);
    });
  }, []);
  const ArtistsSongs = [
    {
      title: "Monica",
      Duration: "5:00",
      Author: "Aniruth Ravichandran",
    },
    {
      title: "Jawan",
      Duration: "4:00",
      Author: "Aniruth Ravichandran",
    },
    {
      title: "Hukum Thalaivar",
      Duration: "3:00",
      Author: "Aniruth Ravichandran",
    },
    {
      title: "Sirrikathey",
      Duration: "4:46",
      Author: "Aniruth Ravichandran",
    },
    {
      title: "VIP",
      Duration: "3:00",
      Author: "4:00",
    },
  ];
  const ArtistsFameSongs = useState([]);
  return (
    <>
      <div
        className={`ArtistsSong p-0 h-120 `}
        style={{
          background: bgColor,
        }}
      >
        <div className="artists-image mr-40 flex justify-center items-center">
          <img
            src={
              "https://variety.com/wp-content/uploads/2024/03/AR-Rahman-Firdaus.jpg?w=1000&h=563&crop=1"
            }
            className="object-cover w-90 h-90 my-10 mr-00 border rounded-xl box-border cursor-pointer p-0 m-0 "
            alt="Aniruth Ravichandran"
            onClick={() => alert()}
            crossOrigin="anonymous"
            ref={imgRef}
          ></img>
        </div>
        <div className="artists_songs my-13 ring-4 bg-[linear-gradient(to_bottom,black_30%,#828282_100%)] absolute mx-2 w-[calc(100%-1rem)] rounded-md h-120">
          <div className="playlist ">
            {ArtistsSongs &&
              ArtistsSongs.map((items, key) => (
                <div
                  key={key}
                  className="song-bar  mx-10 h-14 *:   bg-white transition transform ease-in-out  hover:128 cursor-pointer mt-10 ring-3 hover:ring-purple-300 rounded-md"
                ></div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ArtistSongs;
