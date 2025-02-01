import About from "../pages/about/About";
import ContactUs from "../pages/contact/ContactUs";
import Home from "../pages/home/Home";

export const routesConfig = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <ContactUs />,
  },
];
