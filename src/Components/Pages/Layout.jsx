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
           <header className='z-50 bg-lime-600 text-white sticky top-0 h-14 flex justify-center items-center text-2xl font-semibold uppercase'>
               Ann Miyaguchi
           </header>
           <div className='flex flex-col md:flex-row flex-1'>
               <aside className='bg-lime-500 w-full md:w-60'>
                   <nav>
                       <ul>
                           {testMenuItems.map(({ href, title }) => (
                               <li className='m-2' key={title}>
                                   <NavLink to={href} >
                                       <p className={' hover:bg-lime-300 text-xl text-white'}>{title}</p>
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
           <footer className={"bg-lime-600 p-8 text-white flex inset-x-0 bottom-0 h-16 "}>
                <p>
                    Ann Miyaguchi 
                </p>
            </footer>
       </div>
   );
}
