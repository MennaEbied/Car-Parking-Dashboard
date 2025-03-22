import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "createdAt", headerName: "Created At", width: 200 }, // Ensure this matches the data key
  { field: "lastSignInTime", headerName: "Last Sign In", width: 200 }, // Ensure this matches the data key
];

const paginationModel = { page: 0, pageSize: 5 };

const DataTable = () => {
  const [rows, setRows] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        console.log("Fetched data:", response.data); // Debug: Log the fetched data

        // Map the data to ensure each row has a unique `id`
        const rowsWithIds = response.data.map((row, index) => ({
          id: row.id || `temp-id-${index}`, // Use `row.id` or generate a temporary ID
          email: row.email || "N/A",
          createdAt: row.createdAt || "N/A", // Ensure this matches the backend response
          lastSignInTime: row.lastSignInTime || "N/A", // Ensure this matches the backend response
        }));

        console.log("Processed rows:", rowsWithIds); // Debug: Log the processed rows
        setRows(rowsWithIds);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table">
      <Paper sx={{ height: 400, width: "100%" }} className="paperGrid">
        <DataGrid
          className="dataGrid"
          rows={rows}
          columns={columns}
          getRowId={(row) => row.id} // Use `id` as the unique identifier
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
};

export default DataTable;