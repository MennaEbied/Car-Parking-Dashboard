import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookings from "./pages/bookings/Bookings";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import UsersList from "./pages/usersList/UsersList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="bookings" element={<Bookings/>}/>
            <Route path="users">
              <Route index element={<UsersList/>}/>
              <Route path=":userId" element={<Single/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
