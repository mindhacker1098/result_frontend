import { BrowserRouter, Route,Routes} from "react-router-dom";
import ResultPage from "./pages/resultpagge";
import Home from "./pages/home";
import Upload from "./pages/Upload";
import Sign from "./pages/sign";

 const Ducky=()=>{
return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}></Route>
<Route path="/result" element={<ResultPage/>}></Route>
<Route path="/upload" element={<Upload/>}></Route>
<Route path="/signin" element={<Sign/>}></Route>



</Routes>




</BrowserRouter>



);


}
export default Ducky;