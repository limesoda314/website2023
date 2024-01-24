import { NavLink, Outlet } from "react-router-dom";
import { useState } from 'react';
import themeColor from "../Imports/Info/ThemeColors"; 
import readingMode from "../Imports/Info/ReadingMode"; 
import testMenuItems from "../Imports/Info/MenuItems";
import {useSelector, useDispatch} from 'react-redux'; 

export default function Layout() {
   const [showMenu, setShowMenu] = useState(1); 
   const { darkThemeIndex, themeColorIndex } = useSelector((state) => state.rootReducer);
   const dispatch = useDispatch(); 

   function toShowMenu() {return (showMenu === 1) ?  1 :  0; }

   return (
       <div className='min-h-screen flex flex-col'>
            <div className={themeColor[themeColorIndex].color1}>
           <header className='z-50 text-white sticky top-0 h-14 flex justify-center items-center text-2xl font-semibold uppercase'>
               Ann Miyaguchi
           </header>
           </div>
           <div className='flex flex-col md:flex-row flex-1'>
           <div className={themeColor[themeColorIndex].color2}>
               <aside className='w-full h-min md:h-screen sticky z-20 inset-x-0 top-14 md:w-60'>
               
                   <nav>
                    {/* className="inline-flex w-full right-0 gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button">
                    Sorting Options */}
                    
                    
                   <button className="inline-flex text-white text-2xl font-semibold uppercase mt-4" onClick={
                        () => { (showMenu === 1 || showMenu===true) ? setShowMenu(0) : setShowMenu(1)} 
                    } >
                        Menu
                        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                   </button>
                   
                    
                    {
                        (toShowMenu()) ? 
                        <ul >
                            {testMenuItems.map(({ href, title }) => (
                                <li className='m-2' key={title}>
                                    <NavLink to={href} >
                                        <div className={themeColor[themeColorIndex].hover1}>
                                        <p className={'text-xl text-white'}>{title}</p>
                                        </div>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    : <div></div>
                    }
                       
                        <div className={themeColor[themeColorIndex].hover1}>
                            <button className="inline-flex text-white text-2xl font-semibold uppercase mt-4" onClick={() => { dispatch({ type: 'UPDATE_THEME_COLOR_INDEX', payload: (themeColorIndex + 1) % themeColor.length }); }}>
                                change theme {/* {themeColor[themeColorIndex].name} */}
                            </button>
                        </div>
                        <div className={themeColor[themeColorIndex].hover1}>
                            <button className="inline-flex text-white text-2xl font-semibold uppercase mt-4" onClick={() => { dispatch({ type: 'UPDATE_READING_THEME', payload: (darkThemeIndex + 1) % readingMode.length }); }}>
                                reading mode
                            </button>
                        </div>
                       
                   </nav>
                   
               </aside> 
               </div>
               
                <main className={readingMode[darkThemeIndex].color1 + readingMode[darkThemeIndex].text + ' flex-1'}>
                    <Outlet />
                </main>    
               
           </div>
           <div className={themeColor[themeColorIndex].color1}>
           <footer className={"p-8 text-white flex inset-x-0 bottom-0 h-16 "}>
                <p>
                    Ann Miyaguchi 
                </p>
            </footer>
            </div>
       </div>
   );
}
