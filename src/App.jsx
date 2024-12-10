import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookings from "./pages/bookings/Bookings";
import Home from "./pages/home/Home";
import Reports from "./pages/reports/Reports";
import Single from "./pages/single/Single";
import Users from "./pages/users/Users";
import UsersList from "./pages/usersList/UsersList";

import { useState, useMemo, createContext, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Button } from "@mui/material";

// Create a Context for dark mode
const DarkModeContext = createContext();

export function useDarkMode() {
  return useContext(DarkModeContext);
}

// Define the light and dark themes
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
        },
      }),
    [isDarkMode],
  );
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Normalize CSS */}
        <div>
          <div>
            <BrowserRouter>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="bookings" element={<Bookings />} />
                  <Route path="reports" element={<Reports />} />
                  <Route path="users">
                    <Route index element={<Users />} />
                    <Route path=":userId" element={<Single />} />
                  </Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
}

export default App;
