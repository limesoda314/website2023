import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"; 
import Home from "./Components/Pages/Home"; 
import Projects from "./Components/Pages/Projects"; 
import Gallery from "./Components/Pages/Gallery";
import Blog from "./Components/Pages/Blog"; 
import Layout from "./Components/Pages/Layout"; 
import NoPage from "./Components/Pages/NoPage"; 
import Alphanumeric from './Components/Projects/alphanumeric';
import Poster from  './Components/Projects/dspathposter';
import ForwardBackwards from './Components/Projects/forwardbackward';
import NearestNeighbor from './Components/Projects/nearestneighbor';


function App() {
 return (
   <div className="App">
    <BrowserRouter>       
        <Routes>         
        <Route element={<Layout />}>           
            <Route path="/" element={<Home />} />           
            <Route path="projects" element={<Projects />} />           
            <Route path="gallery" element={<Gallery />} />   
            <Route path="blog" element={<Blog />} />  
            <Route path="*" element={<NoPage />} />

            <Route path="projects/alphanumeric-handwriting-detector" element={<Alphanumeric />} />           
            <Route path="projects/dspath-ucr-monet-poster" element={<Poster/>} />   
            <Route path="projects/cpp-forward-selection-and-backwards-elimination-implementation" element={<ForwardBackwards />} />  
            <Route path="projects/cpp-nearest-neighbor-implementation" element={<NearestNeighbor />} />  
        </Route>    

        </Routes>     
    </BrowserRouter>  
    
   </div>
 );
}
export default App;
 