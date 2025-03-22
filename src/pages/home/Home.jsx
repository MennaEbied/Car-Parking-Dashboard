import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Barchart from "../../components/barChart/BarChart";
import DataTable from "../../components/table/Table";
import Featured from "../../components/featured/Featured";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="Registers" />
          <Widget type="Users" />
          <Widget type="Spots" />
          <Widget type="Booked" />
        </div>
        <div className="charts">
          <Barchart />
          <Featured />
        </div>
        <div className="listContainer">
          <div className="listTitle">Users</div>
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
