import { Routes, Route } from "react-router-dom";

import App from "./App";
import Gallery from "./pages/Gallery";
import Donation from "./pages/Donation";


export default function Router(){

return(

<Routes>

<Route path="/" element={<App/>}/>

<Route path="/galeri" element={<Gallery/>}/>

<Route path="/sumbangan" element={<Donation/>}/>

</Routes>

)

}