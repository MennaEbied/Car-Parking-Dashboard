import "./sidebar.scss";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import GroupIcon from "@mui/icons-material/Group";
import ArticleIcon from "@mui/icons-material/Article";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Car Park</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <SpaceDashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <ReceiptLongIcon className="icon" />
            <span>Bookings</span>
          </li>
          <li>
            <GroupIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <ArticleIcon className="icon" />
            <span>Reports</span>
          </li>
          <li>
            <DirectionsCarIcon className="icon" />
            <span>Cars</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
