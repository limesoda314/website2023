import { compareByTitleA, compareByTitleZ, compareByDateNewest, compareByDateOldest } from './comparisons';
// props
// showOpions, setShowOptions, BlogArray, setBlogArray, reformat, setReformat, 
// sortedByList, sortedBy, setSortedBy
import themeColor from '../Info/ThemeColors';
import {useSelector} from 'react-redux'; 

export default function SortingBar(props) {

    var sortedByList = ["Title A-Z", "Title Z-A", "Date Newest", "Date Oldest"]; 
    var buttonArray = [
        {title: "Title A-Z", bsort : compareByTitleA, id: 0},
        {title: "Title Z-A", bsort : compareByTitleZ, id: 1},
        {title: "Date Newest", bsort : compareByDateNewest, id: 2},
        {title: "Date Oldest", bsort : compareByDateOldest, id: 3},
    ]; 
    const { themeColorIndex } = useSelector((state) => state.rootReducer);

    return (
        <div className="relative inline-block m-4 mb-0">
            <div>
                <button type="button" onClick={ 
                    // when you click this button, show or hide the dropdown with sorting options; default is to not show 
                    () => { (props.showOptions === 0) ? props.setShowOptions(1) :  props.setShowOptions(0) } 
                } 
                
                className="inline-flex w-full right-0 gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button">
                Sorting Options
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
                </button>
            </div>

            {props.showOptions===1 ? 
            
            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1" role="none">
                    
                    {buttonArray.map(({ title, bsort, id}) => (
                        // using a map to generate the buttons for each option
                        // clicking a button calls the corresponding sort function (id) and reformats the posts
                        // we keep track of which sort was clicked and later display it
                        <button onClick={
                            () => { 
                                props.setBlogArray(props.BlogArray.sort(bsort)); 
                                props.setReformat(1);
                                props.setSortedBy(id);
                            } 
                        }
                        className={themeColor[themeColorIndex].hover1 + " w-full text-gray-700 block px-4 py-2 text-sm"} role="menuitem" tabIndex="-1" id="menu-item-0">{title}</button> 
                    ))}
                   
                </div>
                <div className="text-center bg-slate-200 text-slate-800 p-3">
                    Sorted By: {sortedByList[props.sortedBy]}
                </div>
            </div> :
                <div> </div>
            }
            
        </div>
    ); 
}

