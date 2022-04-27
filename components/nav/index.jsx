import useMediaQuery from "../hooks/useMediaQuery";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Nav = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return <>{isDesktop ? <NavDesktop /> : <NavMobile />}</>;
};

export default Nav;
