import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookings from "./pages/bookings/Bookings";
import Home from "./pages/home/Home";
import Reports from "./pages/reports/Reports";
import Single from "./pages/single/Single";
import Users from "./pages/users/Users";
import UsersList from "./pages/usersList/UsersList";
import './styles/dark.scss'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="bookings" element={<Bookings/>}/>
            <Route path="reports" element={<Reports/>}/>
            <Route path="users">
              <Route index element={<Users/>}/>
              <Route path=":userId" element={<Single/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
