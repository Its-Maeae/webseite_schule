import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProjectsKlasse11 from "./pages/ProjectsKlasse11";
import ProjectsKlasse12 from "./pages/ProjectsKlasse12";
import FiliusMain from "./pages/content/klasse_11/Flilius/FiliusMain"
import mainBG from "./assets/main_bg.webp";

function RootLayout() {
  return (
    <>
      <div className="global-bg" style={{ backgroundImage: `url(${mainBG})` }} />
      <Header />
      <main className="page-content">
        <Outlet />
      </main>
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projekte/klasse11", element: <ProjectsKlasse11 /> },
      { path: "/projekte/klasse12", element: <ProjectsKlasse12 /> },
      { path: "/projekte/filius/Filius_main", element: <FiliusMain /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
