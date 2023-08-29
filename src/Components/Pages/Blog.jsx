import { useState } from 'react';
import {Typography} from "@material-tailwind/react";
import BlogInfo from "../Imports/Info/BlogInfo"; 
import BlogCard from "../Cards/BlogCard";


function Blog() {
    // use react states 
    const [BlogArray, setBlogArray] = useState(BlogInfo); 
    const [reformat, setReformat] = useState(0); 
    const [tagMap, setTagMap] = useState(new Map([
        ["tag1", -1],
        ["tag2", -1],
        ["tag3", -1],
        ["tag4", -1]
    ]));
    const [greenTag, setGreenTag] = useState(0); 
    const [showMore, setShowMore] = useState([0, "Show More"]); 
    const [showOptions, setShowOptions] = useState(0); 
    const [sortedBy, setSortedBy] = useState(-1);
    
    var tagList = ["tag1",  "tag2", "tag3", "tag4"]; 
    var sortedByList = ["Title A-Z", "Title Z-A", "Date Newest", "Date Oldest"]; 

    function compareByTitleA(a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
    }
    function compareByTitleZ(a, b) {
        if (a.title > b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }
        return 0;
    }

    function compareByDateNewest(a, b) {
        
        if ((new Date(a.date).getTime() - new Date(b.date).getTime()) < 0) {
            return 1;
        }
        if ((new Date(a).getTime() - new Date(b).getTime()) > 0) {
            return -1; 
        }
        return 0;
    }
    function compareByDateOldest(a, b) {
        if ((new Date(a.date).getTime() - new Date(b.date).getTime()) > 0) {
            return 1;
        }
        if ((new Date(a.date).getTime() - new Date(b.date).getTime()) < 0) {
            return -1; 
        }
        return 0;
    }

    function formatTags() {

        const newTagList = [];
        let tagClass; 
        
        tagList.forEach((tag) => {

            // include 
            if (tagMap.get(tag) === 1 || tagMap.get(tag) === true) {
                tagClass = "bg-green-300 hover:bg-red-500 text-black rounded-md m-2 px-2 py-1 ";
                newTagList.push(<button className={tagClass} 
                    onClick={
                        () => { 
                            setTagMap(new Map(tagMap.set(tag, 0))); 
                            setGreenTag(greenTag-1); 
                        } 
                    } 
                >#{tag}</button>);
            
            }
            // exclude  
            else if (tagMap.get(tag) === 0 || tagMap.get(tag) === false) {
                tagClass = "bg-red-400 hover:bg-slate-500 text-black rounded-md m-2 px-2 py-1";
                newTagList.push(<button className={tagClass} 
                    onClick={
                        () => { setTagMap(new Map(tagMap.set(tag, -1))); } 
                    } 
                >#{tag}</button>);
            } 
            // default 
            else {
                tagClass = "bg-slate-400 hover:bg-green-500 text-black rounded-md m-2 px-2 py-1";
                newTagList.push(<button className={tagClass} 
                    onClick={
                        () => { 
                            setTagMap(new Map(tagMap.set(tag, 1)));   
                            setGreenTag(greenTag+1);                           
                        } 
                    } 
                >#{tag}</button>);
            }
            
      
        });
      
        return newTagList;
      
    };

    function isSelected(tags) {


        // include all green tags WITHOUT red tags, include grey tags 
        //
        // don't include grey tags WITHOUT green tags IF there are ANY green tags within the hashmap
        // 
        // exclude any red tags WITH grey tags OR WITH GREEN TAGS 


        let green = false; 
        for (let i = 0; i < tags.length; i++) {
            
            // console.log("isSelected:",tags[i], tagMap.get(tags[i])); 
            // never show red tags 
            if (tagMap.get(tags[i]) === 0 || tagMap.get(tags[i]) === false) {
                return false; 
            } 
            // always show green tags 
            else if (tagMap.get(tags[i]) === 1 || tagMap.get(tags[i] === true)) {
                green = true; 
            }
        }

        if (green === true || green === 1) {
            // if there were no red tags 
            return true; 
        } else {
            // only grey tags in hashmap 
            if (greenTag === 0 || greenTag === false) {
                return true;
            } else {
                // there are green tags in the hashmap but not in the post's tags 
                return false;
            }
        }
        

    }

    function toReformat() {
        if (reformat === 1) {
            setReformat(0); 
            return 1;
        } else {
            return 0; 
        }
    }

    function formatPosts() {

        return (

            <div>
                {(toReformat() === 1) ? 
                        <div>
                            
                            {BlogArray.map(({ title, author, date, tags, description, href}) => (
                                <div>
                                    {/* {console.log("update")} */}
                                    { (isSelected(tags) === true || isSelected(tags) === 1) ? <div>  <BlogCard title={title} author={author} date={date} tags={tags} tagMap={tagMap} description={description} href={href} /> </div> : <div></div>}
                                </div>
                                
                            ))}
                
                        </div> :
                        <div>
                            {BlogArray.map(({ title, author, date, tags, description, href}) => (
                                <div>
                                    {/* {console.log("update")} */}
                                    { (isSelected(tags) === true || isSelected(tags) === 1) ? <div>  <BlogCard title={title} author={author} date={date} tags={tags} tagMap={tagMap} description={description} href={href} /> </div> : <div></div>}
                                </div>
                                
                            ))}
                
                        </div>
                    }

            </div>
        )
        
    }

    function sortingBar() {
        return (
            <div className="relative inline-block m-4 mb-0">
                <div>
                    <button type="button" onClick={
                            () => { 
                            if (showOptions === 0) {
                                setShowOptions(1); 
                            } else {
                                setShowOptions(0); 
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

                {showOptions===1 ? 
                
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    <div className="py-1" role="none">
                        <button onClick={
                            () => { 
                                setBlogArray(BlogArray.sort(compareByTitleA)); 
                                setReformat(1);
                                setSortedBy(0);
                                console.log(BlogArray); 
                                console.log("sort by Title A-Z");
                            } 
                        }
                        className="w-full text-gray-700 hover:bg-green-100 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Sort By Title A-Z</button>
                        <button onClick={
                            () => { 
                                setBlogArray(BlogArray.sort(compareByTitleZ));  
                                setReformat(1);
                                setSortedBy(1);
                                console.log(BlogArray);
                                console.log("sort by Title Z-A");
                            } 
                        }
                        className="w-full text-gray-700 hover:bg-green-100 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Sort By Title Z-A</button>
                        <button onClick={
                            () => { 
                                setBlogArray(BlogArray.sort(compareByDateNewest));  
                                setReformat(1);
                                setSortedBy(2);
                                console.log(BlogArray);
                                console.log("sort by Date Newest");
                            } 
                        }
                        className="w-full text-gray-700 hover:bg-green-100 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Sort By Date Newest</button>
                        <button onClick={
                            () => { 
                                setBlogArray(BlogArray.sort(compareByDateOldest)); 
                                setReformat(1);
                                setSortedBy(3);
                                console.log(BlogArray);
                                console.log("sort by Date Oldest");
                            } 
                        }
                        className="w-full text-gray-700 hover:bg-green-100 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Sort By Date Oldest</button >
                    </div>
                    <div className="text-center bg-slate-200 p-3">

                        Sorted By: {sortedByList[sortedBy]}
                    </div>
                </div> :
                    <div> </div>
                }
                
                
            </div>
              

        ); 
    }



    document.title = "Ann's Blog";
    return (
        <div className="flex flex-col ">

        
            <div className="m-8 h-full shadow-lg">
                <Typography variant="h5" color="blue-gray">
                    Ann's Blog
                </Typography>
            
                
                <Typography variant="paragraph" className="m-8 text-left">
                    Hello and welcome to my blog where I talk about things that I'm interested in. 

                </Typography>
                <Typography className="text-left m-8">
                    <button className="bg-cyan-300 p-2 rounded-lg" 
                            onClick={
                                
                                () => { 
                                    if (showMore[0] === 0) {
                                        setShowMore([1, "Show Less"]); 
                                    } else {
                                        setShowMore([0, "Show More"]); 
                                    }
                                } 
                            } 
                    >{showMore[1]}</button> 

                    {
                        showMore[0] === 1 ?
                        <div>
                        <b>Searching via Categories Criteria</b>
                        <p>
                        There are 3 possible values for a post when searching via Categories. 
                        <ol class="px-8 list-decimal">
                            <li> If there are no green tags, return all posts</li>
                            <li> If there is one or more green tags, only return posts with one or more green tags </li>
                            <li> Never return posts that are red even if there is one green tag </li>
                        </ol>

                        This means if you make #tag1 and #tag2 be green, all posts with at least one of the tags will show up. If #tag4 is red, that means any posts with #4 will not be returned even if it has #tag1 or #tag2. 
                        </p>
                        <b>Searching via Sorting</b>
                        <p>
                        There are 4 possible ways to sort posts 

                        <ol class="px-8 list-decimal">
                            <li> Sort By Title A-Z which sorts posts in ascending alphabetical order </li>
                            <li> Sort By Title Z-A which sorts posts in descending alphabetical order</li>
                            <li> Sort By Date Newest which sorts posts in descending date with newer posts at the top</li>
                            <li> Sort By Date Oldest which sorts posts in ascending date with older posts at the top</li>
                        </ol>
                       
                        You can combine searching via sorting and categories, so you can sort by date for all posts with #tag 
                        </p>

                        </div>
                        : 
                        <div></div>
                    }
                    
                    

                </Typography>
                
            </div>

            
            <Typography className="relative w-full h-min sticky z-10 inset-x-0 top-14 bg-lime-600">

                <div className="flex justify-end pt-10">
                {sortingBar()}
                </div>
                <Typography className="flex flex-row justify-center">
                    <div className="text-white">
                    Select Categories: {formatTags()}
                    </div>
                    
                </Typography>

            </Typography>
            
            <div className="flex flex-col flex-wrap h-full text-left">
                {formatPosts()}
            
            </div> 

            
        
        </div>
    )
};
export default Blog; 