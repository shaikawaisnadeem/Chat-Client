import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Assistant from "./Pages/Assistant/Assistant";
import Contact from "./Pages/Contact/Contact";
import CallLog from "./Pages/CallLog/CallLog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Settings from "./Pages/Settings/Settings";
import SideNavbarChats from "./Components/Layout/SideNavbarChats/SideNavbarChats";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}>
          <Route index element={<ProtectedRoute><SideNavbarChats /></ProtectedRoute>} />
          <Route path="assistant" element={<ProtectedRoute><Assistant /></ProtectedRoute>} />
          <Route path="contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="call-log" element={<ProtectedRoute><CallLog /></ProtectedRoute>} />
          <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        </Route>

        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
      {/* <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<SideNavbarChats />} />
          <Route path="assistant" element={<Assistant />} />
          <Route path="contact" element={<Contact />} />
          <Route path="call-log" element={<CallLog />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
