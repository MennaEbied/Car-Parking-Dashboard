import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Saturday", ParkingSpots: 40 },
  { name: "Sunday", ParkingSpots: 21 },
  { name: "Monday", ParkingSpots: 32 },
  { name: "Tuesday", ParkingSpots: 10 },
  { name: "Wednesday", ParkingSpots: 50 },
  { name: "Thursday", ParkingSpots: 20 },
  { name: "Friday", ParkingSpots: 30 },
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Rate of Parking Spots</div>
      <ResponsiveContainer width="100%" aspect={3/ 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="ParkingSpots" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4b49ac" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4b49ac" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="grey" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="ParkingSpots"
            stroke="#4b49ac"
            fillOpacity={1}
            fill="url(#ParkingSpots)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
