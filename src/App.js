import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Projects from './Components/Pages/Projects';
import Gallery from './Components/Pages/Gallery';
import Blog from './Components/Pages/Blog';
import Layout from './Components/Pages/Layout';
import NoPage from './Components/Pages/NoPage';
import ProjectInfo from './Components/Imports/Info/ProjectInfo';
// import BlogInfo from './Components/Imports/Info/BlogInfo';
import BlogLinks from './Components/Imports/Info/BlogLinks'; 
import Post from './Components/posts/post';

function App() {
  // Generate routes for individual blog posts
  const postRoutes = BlogLinks.map((blog) => (
    <Route
      key={blog.id}
      path={`blog/${blog.href}`}
      element={<Post markdown={blog.content}/>}
    />
  ));

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
            {ProjectInfo.map(({ page, href, id }) => (
              <Route key={id} path={`projects/${href}`} element={page} />
            ))}
            {postRoutes}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
