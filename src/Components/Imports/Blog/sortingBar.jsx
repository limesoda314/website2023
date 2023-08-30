import { compareByTitleA, compareByTitleZ, compareByDateNewest, compareByDateOldest } from './comparisons';
// props
// showOpions, setShowOptions, BlogArray, setBlogArray, reformat, setReformat, 
// sortedByList, sortedBy, setSortedBy
export default function SortingBar(props) {

    var sortedByList = ["Title A-Z", "Title Z-A", "Date Newest", "Date Oldest"]; 

    return (
        <div className="relative inline-block m-4 mb-0">
            <div>
                <button type="button" onClick={
                        () => { 
                        if (props.showOptions === 0) {
                            props.setShowOptions(1); 
                        } else {
                            props.setShowOptions(0); 
                        }
                    } 

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
                    <button onClick={
                        () => { 
                            props.setBlogArray(props.BlogArray.sort(compareByTitleA)); 
                            props.setReformat(1);
                            props.setSortedBy(0);
                        } 
                    }
                    className="w-full text-gray-700 hover:bg-green-100 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Sort By Title A-Z</button>
                    <button onClick={
                        () => { 
                            props.setBlogArray(props.BlogArray.sort(compareByTitleZ));  
                            props.setReformat(1);
                            props.setSortedBy(1);
                        } 
                    }
                    className="w-full text-gray-700 hover:bg-green-100 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Sort By Title Z-A</button>
                    <button onClick={
                        () => { 
                            props.setBlogArray(props.BlogArray.sort(compareByDateNewest));  
                            props.setReformat(1);
                            props.setSortedBy(2);
                        } 
                    }
                    className="w-full text-gray-700 hover:bg-green-100 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Sort By Date Newest</button>
                    <button onClick={
                        () => { 
                            props.setBlogArray(props.BlogArray.sort(compareByDateOldest)); 
                            props.setReformat(1);
                            props.setSortedBy(3);
                        } 
                    }
                    className="w-full text-gray-700 hover:bg-green-100 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Sort By Date Oldest</button >
                </div>
                <div className="text-center bg-slate-200 p-3">

                    Sorted By: {sortedByList[props.sortedBy]}
                </div>
            </div> :
                <div> </div>
            }
            
        </div>
    ); 
}

