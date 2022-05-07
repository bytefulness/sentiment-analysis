import { BiHomeSmile, BiUserCircle } from "react-icons/bi";
import { RiSettings4Line } from "react-icons/ri";

export default [
  {
    label: "Home",
    icon: <BiHomeSmile />,
    href: "/",
  },
  {
    label: "Profile",
    icon: <BiUserCircle />,
    href: "/profile",
  },
  {
    label: "Settings",
    icon: <RiSettings4Line />,
    href: "/settings",
  },
];
