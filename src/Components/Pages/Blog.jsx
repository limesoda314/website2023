import { useState } from 'react';
import {Typography} from "@material-tailwind/react";
import BlogInfo from "../Imports/Info/BlogInfo"; 
import BlogCard from "../Cards/BlogCard";


function Blog() {
    // use react states 
    const [tagMap, setTagMap] = useState(new Map([
        ["tag1", -1],
        ["tag2", -1],
        ["tag3", -1],
        ["tag4", -1]
    ]));
    const [greenTag, setGreenTag] = useState(0); 
    const [showMore, setShowMore] = useState([0, "Show More"]); 
    
    var tagList = ["tag1",  "tag2", "tag3", "tag4"]; 

    

    function formatTags() {

        const newTagList = [];
        let tagClass; 
        
        tagList.forEach((tag) => {

            // include 
            if (tagMap.get(tag) === 1 || tagMap.get(tag) === true) {
                tagClass = "bg-green-300 hover:bg-red-500 text-green-950 rounded-md m-2 px-2 py-1 ";
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
                tagClass = "bg-red-400 hover:bg-slate-500 text-green-950 rounded-md m-2 px-2 py-1";
                newTagList.push(<button className={tagClass} 
                    onClick={
                        () => { 
                            
                            setTagMap(new Map(tagMap.set(tag, -1))); 
                            
                            
                        } 
                    } 
                >#{tag}</button>);
            } 
            // default 
            else {
                tagClass = "bg-slate-400 hover:bg-green-500 text-green-950 rounded-md m-2 px-2 py-1";
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
            
            console.log("isSelected:",tags[i], tagMap.get(tags[i])); 
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


    document.title = "Ann's Blog";
    return (
        <div className="flex flex-col ">

        
            <div className="m-8 h-full shadow-lg">
                <Typography variant="h5" color="blue-gray">
                    Ann's Blog
                </Typography>
            
                
                <Typography variant="paragraph" className="m-8 text-left">
                    Hello and welcome to my blog where I'll talk about things that I'm interested in. 

                    
                   

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
                        1) If there are no green tags, return all posts

                        2) If there is one or more green tags, only return posts with one or more green tags 

                        3) Never return posts that are red even if there is one green tag 

                        This means if you make #tag1 and #tag2 be green, all posts with at least one of the tags will show up. If #tag4 is red, that means any posts with #4 will not be returned even if it has #tag1 or #tag2. 
                        </p>

                        </div>
                        : 
                        <div></div>
                    }
                    
                    

                </Typography>

                <Typography>
                    Select Categories: {formatTags()}

                </Typography>
                

            </div>
            <div className="flex flex-col flex-wrap h-min text-left">
                {BlogInfo.map(({ title, author, date, tags, description, href}) => (
                    <div>
                        {console.log("update")}
                        { (isSelected(tags) === true || isSelected(tags) === 1) ? <div>  <BlogCard title={title} author={author} date={date} tags={tags} description={description} href={href} /> </div> : <div></div>}
                    </div>
                    
                ))}
            </div> 

            

            

1
        
        </div>
    )
};
export default Blog; 