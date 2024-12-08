import './barChart.scss'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sat",
    duration:4
   
  },
  {
    name: "Sun",
    duration:3
   
  },
  {
    name: "Mon",
    duration:4
  
  },
  {
    name: "Tue",
    duration:1
   
  },
  {
    name: "Wed",
    duration:2
   
  },
  {
    name: "Thu",
    duration:5
 
  },
  {
    name: "Fri",
    duration:8
   
  },
];

const Barchart=()=> {
  return (
    <div className="barChart">
      <div className="title">Parking Duration</div>
    <ResponsiveContainer width={450} aspect={2/1}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="duration"
          fill="#4b49ac"
          activeBar={<Rectangle  stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
}
export default Barchart;
