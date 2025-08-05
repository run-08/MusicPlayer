import { useRoutes } from "react-router-dom";
import OutletPage from "./HomePage/OutletPage";
import { ListMovieSongs } from "./MovieSongDetails.jsx/ListMovieSongs";
import PlaySong from "./songPage/songsPlay";
import TakeUserInputByVoice from "./Speech-To-text/TakeUserSpeech";
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
  ]);
  return element;
};
