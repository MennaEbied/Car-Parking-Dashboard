import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import axios from "axios";

const DataTable = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true); // Added for better user experience
  const [error, setError] = useState(null);     // Added for error handling

  // Handler for the "View" button
  const handleView = (id) => {
    console.log("View user with ID:", id);
    // Example: window.location.href = `/users/${id}`;
  };

  // Handler for the "Delete" button
  const handleDelete = async (id) => {
    console.log("Delete user with ID:", id);
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      // This is an example; you'll need a delete endpoint on your backend
      // await axios.delete(`${apiUrl}/users/${id}`);
      setRows(rows.filter((row) => row.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    { field: "email", headerName: "Email", width: 220 },
    { field: "createdAt", headerName: "Created At", width: 220 },
    { field: "lastSignInTime", headerName: "Last Sign In", width: 220 },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginRight: 8, borderRadius: 10 }}
            onClick={() => handleView(params.row.id)}
          >
            View
          </Button>
          <Button
            variant="contained"
            style={{ borderRadius: 10 }}
            color="error"
            size="small"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      // Use Vite's way of accessing environment variables
      const apiUrl = import.meta.env.VITE_API_URL;
      
      // If the API URL is not set, don't try to fetch
      if (!apiUrl) {
        console.error("VITE_API_URL is not defined. Please set it in your .env file or deployment settings.");
        setError("API URL is not configured.");
        setLoading(false);
        return;
      }
      
      try {
        const response = await axios.get(`${apiUrl}/users`);
        const rowsWithIds = response.data.map((row) => ({
          id: row.id,
          email: row.email || "N/A",
          createdAt: new Date(row.createdAt).toLocaleString(), // Format date for readability
          lastSignInTime: new Date(row.lastSignInTime).toLocaleString(), // Format date
        }));
        setRows(rowsWithIds);
        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data. Check the console for details.");
      } finally {
        setLoading(false);
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
          loading={loading} // Use the loading state
          getRowId={(row) => row.id}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
        {error && <div style={{ color: 'red', padding: '10px' }}>{error}</div>}
      </Paper>
    </div>
  );
};

export default DataTable;