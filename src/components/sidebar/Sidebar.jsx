import "./sidebar.scss";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import GroupIcon from "@mui/icons-material/Group";
import ArticleIcon from "@mui/icons-material/Article";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Car Park</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <SpaceDashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/bookings" style={{ textDecoration: "none" }}>
            <li>
              <ReceiptLongIcon className="icon" />
              <span>Bookings</span>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <GroupIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/reports" style={{ textDecoration: "none" }}>
            <li>
              <ArticleIcon className="icon" />
              <span>Reports</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
