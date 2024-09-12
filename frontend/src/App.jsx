import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddProperty from "./pages/AddProperty";
import Listing from "./pages/Listing";
import Bookings from "./pages/Bookings";
import Favourites from "./pages/Favourites";
import { Suspense } from "react";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading Data...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/addproperty" element={<AddProperty />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/favourites" element={<Favourites />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
