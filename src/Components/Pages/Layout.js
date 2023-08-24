import { NavLink, Outlet } from "react-router-dom";
export default function Layout() {
   const testMenuItems = [
       {
           href: '/',
           title: 'Home',
       },
       {
           href: 'projects',
           title: 'Projects',
       },
       {
           href: 'gallery',
           title: 'Gallery',
       }, 
       {
            href: 'blog',
            title: 'Blog',
       }
   ];

   <li><NavLink to="/">Home</NavLink></li>

   return (
       <div className='min-h-screen flex flex-col'>
           <header className='bg-lime-600 text-white sticky top-0 h-14 flex justify-center items-center font-semibold uppercase'>
               Ann Miyaguchi
           </header>
           <div className='flex flex-col md:flex-row flex-1'>
               <aside className='bg-lime-500 w-full md:w-60'>
                   <nav>
                       <ul>
                           {testMenuItems.map(({ href, title }) => (
                               <li className='m-2' key={title}>
                                   <NavLink to={href} >
                                       <p className={'text-white'}>{title}</p>
                                   </NavLink>
                               </li>
                           ))}
                       </ul>
                   </nav>
               </aside>
               <main className={'flex-1'}>
                   <Outlet />
               </main>
           </div>
       </div>
   );
}
