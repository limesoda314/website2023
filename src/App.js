import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"; 
import Home from "./Components/Pages/Home"; 
import Projects from "./Components/Pages/Projects"; 
import Gallery from "./Components/Pages/Gallery";
import Blog from "./Components/Pages/Blog"; 
import Layout from "./Components/Pages/Layout"; 
import NoPage from "./Components/Pages/NoPage"; 

import ProjectInfo from './Components/Imports/Info/ProjectInfo';
import BlogInfo from './Components/Imports/Info/BlogInfo'; 

import Post from './Components/posts/post';

function App() {
    let postRoutes = [];
    for (let i = 0; i < BlogInfo.length; i++) {
        postRoutes.push(<Route key={BlogInfo[i].id} path={"blog/"+BlogInfo[i].href} element={<Post markdown={BlogInfo[i].content} postData={BlogInfo[i]}/>} /> ); 
    }
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
            
            {ProjectInfo.map(({ page, href, id}) => (
                <Route key={id} path={"projects/"+href} element={page} />    
            ))}
            { postRoutes }

        </Route>    
        </Routes>     
    </BrowserRouter>  
    
   </div>
 );
}
export default App;
 