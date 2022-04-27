import useMediaQuery from "../hooks/useMediaQuery";
import SidebarDesktop from "./SidebarDesktop";
import SidebarMobile from "./SidebarMobile";

const Sidebar = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return <>{isDesktop ? <SidebarDesktop /> : <SidebarMobile />}</>;
};

export default Sidebar;
{
  /* <div
      className={`bg-blue-50 lg:z-20 top-0 ${isOpen ? "z-20" : ""}`}
      onClick={openSideBar}
    >
      {isDesktop ? <SidebarDesktop /> : <SidebarMobile />}
    </div> */
}
