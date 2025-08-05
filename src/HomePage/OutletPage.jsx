import { Outlet } from "react-router-dom";
import NavBar from "../navigation/navBar";
import Homepage from "./homePage";
const outletPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <Homepage></Homepage>
      <Outlet></Outlet>
    </>
  );
};
export default outletPage;
