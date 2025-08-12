import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./components/Pages/Home.jsx";
import About from "./components/Pages/About.jsx";
import Contact from "./components/Pages/Contact.jsx";
import Github, { githubInfoLoader } from "./components/Pages/Github.jsx";
import User from "./components/Pages/User.jsx";
// const router = createBrowserRouter([
//   // Define your routes here
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "", // this will be `/`
//         element: <Home />,
//       },
//       {
//         path: "about", // this will be `/about`
//         element: <About />,
//       },
//       {
//         path: "contact", // `/contact`
//         element: <Contact />,
//       },
//       {
//         path: "github", // `/github`
//         element: <Github />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<Github />} loader={githubInfoLoader} />
      <Route path="user/:userid" element={<User />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
