import { Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Gallery from "./pages/Gallery.jsx";
import Donation from "./pages/Donation.jsx";

export default function Router(){

return (

<Routes>

<Route path="/" element={<App />} />

<Route path="/galeri" element={<Gallery />} />

<Route path="/sumbangan" element={<Donation />} />

</Routes>

);

}