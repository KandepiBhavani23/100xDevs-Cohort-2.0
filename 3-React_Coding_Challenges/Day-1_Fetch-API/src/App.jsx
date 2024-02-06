import "./App.css";
import {
  Header,
  Footer,
  Carousel,
  TeamMembers,
  Posts,
  PostsDetails,
  PostsComments,
} from "./components/index";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Carousel />
            <TeamMembers />
          </>
        ),
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <PostsDetails />,
      },
      {
        path: "/posts/:id/comments",
        element: <PostsComments />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
