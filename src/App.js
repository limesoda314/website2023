import './App.css';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom"; 
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
             
            <Route exact path="/" element={<Home/>} />           
            <Route exact path="projects" element={<Projects/>} />           
            <Route exact path="gallery" element={<Gallery/>} />   
            <Route exact path="blog" element={<Blog/>} />  
            <Route exact path="*" element={<NoPage/>} />

            <Route exact path="projects/alphanumeric-handwriting-detector" element={<ProjectPages.Alphanumeric/>} />           
            <Route exact path="projects/dspath-ucr-monet-poster" element={<ProjectPages.Poster/>} />   
            <Route exact path="projects/cpp-forward-selection-and-backwards-elimination-implementation" element={<ProjectPages.ForwardBackwards/>} />  
            <Route exact path="projects/cpp-nearest-neighbor-implementation" element={<ProjectPages.NearestNeighbor/>} />  
 
            <Route exact path="blog/post1" element={<BlogPages.Post1/>} />       
            <Route exact path="blog/post2" element={<BlogPages.Post2/>} />
            <Route exact path="blog/post3" element={<BlogPages.Post3/>} />

        </Route>    
        </Routes>     
    </BrowserRouter>  
    
   </div>
 );
}
export default App;
 