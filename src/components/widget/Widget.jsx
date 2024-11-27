import "./widget.scss";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupsIcon from "@mui/icons-material/Groups";
import TodayIcon from "@mui/icons-material/Today";
import LoopTwoToneIcon from "@mui/icons-material/LoopTwoTone";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Widget = ({ type }) => {
  let data;
  switch (type) {
    case "Registers":
      data = {
        title: "10K",
        details: "Total Registers",
        percentage: "4% (30 days)",
        icon: <SignalCellularAltIcon className="icon" />,
        miniIcon: <ExpandLessIcon className="upIcon" />,
      };
      break;
    case "Users":
      data = {
        title: "356",
        details: "Active Users",
        percentage: "6% (1 day)",
        icon: <GroupsIcon className="icon" />,
        miniIcon: <ExpandLessIcon className="upIcon" />,
      };
      break;
    case "Spots":
      data = {
        title: "10",
        details: "Available Spots",
        percentage: "Last 10 minutes",
        icon: <TodayIcon className="icon" />,
        miniIcon: <LoopTwoToneIcon className="upIcon" />,
      };
      break;
    case "Booked":
      data = {
        title: "15",
        details: "Booked Spots",
        percentage: "2% (per/hour)",
        icon: <LocationOnIcon className="icon" />,
        miniIcon: <ExpandMoreIcon className="downIcon" />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="details">{data.details}</span>
        <span className="percentage">
          <span miniIcon>{data.miniIcon}</span>
         {data.percentage}
        </span>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
