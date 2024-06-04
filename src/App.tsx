import { RouteObject, useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Article from "./pages/Article";

function App() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/articulo/:id",
          element: <Article />,
        },
        { path: "*", element: <p>Page not found</p> },
      ],
    },
  ];

  const element = useRoutes(routes);

  return <main>{element};</main>;
}

export default App;
