import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phoneNumber", headerName: "Phone Number", width: 150 },
  { field: "displayName", headerName: "Name", width: 150 },
];

const paginationModel = { page: 0, pageSize: 5 };

const DataTable = () => {
  const [rows, setRows] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        console.log(response.data); // Log the data to the console
        const rowsWithIds = response.data.map((row, index) => ({
          id: row.id || `temp-id-${index}`, // Generate a temporary ID if `id` is missing
          ...row,
        }));
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
