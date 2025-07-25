import Home from "./components/Home";
import Actors from "./components/Actors";
import Directors from "./components/Directors";
import Movie from "./components/Movie";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/actors",
    element: <Actors />
  },
  {
    path: "/directors",
    element: <Directors />
  },
  {
    path: "/movie/:id",
    element: <Movie />
  }
];

export default routes;
