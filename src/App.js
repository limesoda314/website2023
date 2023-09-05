import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Projects from './Components/Pages/Projects';
import Gallery from './Components/Pages/Gallery';
import Blog from './Components/Pages/Blog';
import Layout from './Components/Pages/Layout';
import NoPage from './Components/Pages/NoPage';
import ProjectLinks from './Components/Imports/Info/ProjectLinks';
import BlogLinks from './Components/Imports/Info/BlogLinks'; 
import Post from './Components/Imports/Blog/post';
import Project from './Components/Imports/Projects/project';

function App() {
  // Generate routes for individual blog posts
  const postRoutes = BlogLinks.map((blog) => (
    <Route
      key={blog.id}
      path={`blog/${blog.href}`}
      element={<Post markdown={blog.content}/>}
    />
  ));

  // Generate routes for individual project posts
  const projectRoutes = ProjectLinks.map((project) => (
    <Route
      key={project.id}
      path={`projects/${project.href}`}
      element={<Project markdown={project.content}/>}
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
            {postRoutes}
            {projectRoutes}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
