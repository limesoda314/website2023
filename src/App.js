import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"; 
import Home from "./Components/Pages/Home"; 
import Projects from "./Components/Pages/Projects"; 
import Gallery from "./Components/Pages/Gallery";
import Blog from "./Components/Pages/Blog"; 
import Layout from "./Components/Pages/Layout"; 
import NoPage from "./Components/Pages/NoPage"; 

import ProjectPages from './Components/Imports/Pages/ProjectPages'
import BlogPages from './Components/Imports/Pages/BlogPages'; 

function App() {
 return (
   <div className="App">
    <BrowserRouter>       
        <Routes>         
        <Route element={<Layout/>}>     
             
            <Route path="/" element={<Home/>} />           
            <Route path="projects" element={<Projects/>} />           
            <Route path="gallery" element={<Gallery/>} />   
            <Route path="blog" element={<Blog/>} />  
            <Route path="*" element={<NoPage/>} />

            <Route path="projects/alphanumeric-handwriting-detector" element={<ProjectPages.Alphanumeric/>} />           
            <Route path="projects/dspath-ucr-monet-poster" element={<ProjectPages.Poster/>} />   
            <Route path="projects/cpp-forward-selection-and-backwards-elimination-implementation" element={<ProjectPages.ForwardBackwards/>} />  
            <Route path="projects/cpp-nearest-neighbor-implementation" element={<ProjectPages.NearestNeighbor/>} />  
 
            <Route path="blog/post1" element={<BlogPages.Post1/>} />       
            <Route path="blog/post2" element={<BlogPages.Post2/>} />
            <Route path="blog/post3" element={<BlogPages.Post3/>} />

        </Route>    
        </Routes>     
    </BrowserRouter>  
    
   </div>
 );
}
export default App;
 