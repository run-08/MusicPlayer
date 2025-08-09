import { useRoutes } from "react-router-dom";
import ArtistSongs from "./ArtistBasedSong/ArtistsSongs";
import OutletPage from "./HomePage/OutletPage";
import { ListMovieSongs } from "./MovieSongDetails.jsx/ListMovieSongs";
import TakeUserInputByVoice from "./Speech-To-text/TakeUserSpeech";
import PlaySong from "./songPage/songsPlay";
const App = () => {
  return (
    <>
      <CustomRoutes />
    </>
  );
};
export default App;
const CustomRoutes = () => {
  const element = useRoutes([
    {
      path: "/homePage",
      element: <OutletPage></OutletPage>,
    },
    {
      path: "/playSong/:id",
      element: <PlaySong></PlaySong>,
    },
    {
      path: "/listMovieSongs",
      element: <ListMovieSongs></ListMovieSongs>,
    },
    {
      path: "/speechToText",
      element: <TakeUserInputByVoice></TakeUserInputByVoice>,
    },
    {
      path: "/fetchFameSong",
      element: <ArtistSongs></ArtistSongs>,
    },
  ]);
  return element;
};
