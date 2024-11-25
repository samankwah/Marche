import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import RootLayout from "./layouts/RootLayout";

// Lazy load components for better performance
const HomePage = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));
const Features = lazy(() => import("./pages/Features"));
const Services = lazy(() => import("./pages/Services"));
const News = lazy(() => import("./pages/News"));
const Error = lazy(() => import("./pages/Error"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: (
            <Suspense>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: "/shop",
          element: (
            <Suspense
              fallback={
                <div className="flex w-full h-[100vh]  justify-center items-center ">
                  {" "}
                  <h1 className="text-gray-700 text-3xl">Loading...</h1>
                </div>
              }
            >
              <Products />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: (
            <Suspense>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "/features",
          element: (
            <Suspense>
              <Features />{" "}
            </Suspense>
          ),
        },
        {
          path: "/services",
          element: (
            <Suspense>
              <Services />
            </Suspense>
          ),
        },
        {
          path: "/news",
          element: (
            <Suspense>
              <News />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: (
            <Suspense>
              <Error />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
      {/* <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/features" element={<Features />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      <Footer /> */}
    </div>
  );
}

export default App;
