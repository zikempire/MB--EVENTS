import { lazy } from "react";

const Homepage = lazy(() => import("./Homepage"));
const Events = lazy(() => import("./Events"));
const EventDetails = lazy(() => import("./EventDetails"));
const Error404 = lazy(() => import("./Error404"));
const CreateEvent = lazy(() => import("./CreateEvent"));
const Register = lazy(() => import("./Register"));
const Login = lazy(() => import("./Login"));
const ForgotPassword = lazy(() => import("./ForgotPassword"));
const ResetPassword = lazy(() => import("./ResetPassword"));
const UsersEvent = lazy(() => import("./UsersEvent"));
const Hosting = lazy(() => import("./User Components/Hosting"));
const Previous = lazy(() => import("./User Components/Previous"));
const Attending = lazy(() => import("./User Components/Attending"));
export {
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
};
