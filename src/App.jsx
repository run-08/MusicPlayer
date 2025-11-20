import { useRoutes } from "react-router-dom";
import ArtistSongs from "./ArtistBasedSong/ArtistsSongs";
import UserRegistration from "./Credentials/UserRegistration";
import OutletPage from "./HomePage/OutletPage";
import { ListMovieSongs } from "./MovieSongDetails.jsx/ListMovieSongs";
import PlaySong from "./songPage/songsPlay";
import TakeUserInputByVoice from "./Speech-To-text/TakeUserSpeech";
import CommonDB from "./Zustand/commonDB";
const App = () => {
  const { data } = CommonDB((state) => state);
  return (
    <>
      <CustomRoutes></CustomRoutes>
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
    {
      path: "/register",
      element: <UserRegistration></UserRegistration>,
    },
  ]);
  return element;
};
