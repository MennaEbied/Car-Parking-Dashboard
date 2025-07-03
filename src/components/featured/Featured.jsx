import "./featured.scss";
import { PieChart, Pie, Cell, Tooltip } from "recharts";


const data = [
  { name: "Slot 1", value: 40 },
  { name: "Slot 2", value: 30 },
  { name: "Slot 3", value: 30 },
  { name: "Slot 4", value: 20 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Featured = () => {
  return (
    <div className="featured">
       <div className="title">Slots</div>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <div style={{ marginTop: "20px" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {data.map((entry, index) => (
            <li
              key={`legend-${index}`}
              style={{
                display: "inline-block",
                marginRight: "20px",
                fontSize: "15px"
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  backgroundColor: COLORS[index],
                  marginRight: "5px",
                  marginLeft:"20px"
                }}
              ></span>
              {entry.name}
            </li>
          ))}
          </ul>
      </div>
    </div>
   
  );
};

export default Featured;
