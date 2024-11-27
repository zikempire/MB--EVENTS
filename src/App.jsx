import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Homepage,
  Events,
  EventDetails,
  Error404,
  CreateEvent,
  Register,
  Login,
  ForgotPassword,
  ResetPassword,
  UsersEvent,
  Hosting,
  Previous,
  Attending,
} from "./pages";
import { Suspense } from "react";
import FallBackLoader from "./components/FallBackLoader";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Suspense fallback={<FallBackLoader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventDetails />} />
          <Route element={<PrivateRoute />}>
            <Route path="/create-event" element={<CreateEvent />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route element={<PrivateRoute />}>
            <Route path="/your-events" element={<UsersEvent />}>
              <Route index element={<Hosting />} />
              <Route path="attending" element={<Attending />} />
              <Route path="previous" element={<Previous />} />
            </Route>
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
