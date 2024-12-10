import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import image from "../../assets/image.png";
import { IconButton } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useDarkMode } from "../../App"; // Importing the context

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search here..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <IconButton onClick={toggleDarkMode} color="inherit">
              {isDarkMode ? (
                <LightModeOutlinedIcon />
              ) : (
                <DarkModeOutlinedIcon />
              )}
            </IconButton>
          </div>
          <div className="item">
            <NotificationsOutlinedIcon className="icon" />
            <div className="counter">4</div>
          </div>

          <div className="item">
            <hr />
            <div className="text">
              Hello, <b>Admin!</b>
            </div>
            <img src={image} className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
