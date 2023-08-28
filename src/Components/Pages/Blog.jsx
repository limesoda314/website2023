import { useState } from 'react';
import {Typography} from "@material-tailwind/react";
import BlogInfo from "../Imports/Info/BlogInfo"; 
import BlogCard from "../Cards/BlogCard";


function Blog() {
    // use react states 
    const [tagMap, setTagMap] = useState(new Map([
        ["tag1", 1],
        ["tag2", 1],
        ["tag3", 1],
        ["tag4", 1]
    ]));
    
    var tagList = ["tag1",  "tag2", "tag3", "tag4"]; 

    

    function formatTags() {

        const newTagList = [];
        let tagClass; 
        
        tagList.forEach((tag) => {
            (tagMap.get(tag) === 1 || tagMap.get(tag) === true) ? tagClass = "bg-green-300 hover:bg-green-500 text-green-950 rounded-md m-2 px-2 py-1 " : tagClass = "bg-red-400 hover:bg-green-500 text-green-950 rounded-md m-2 px-2 py-1" ; 
            newTagList.push(<button className={tagClass} 
                onClick={
                    () => { 
                        setTagMap(new Map(tagMap.set(tag, !(tagMap.get(tag))))); 

                        
                    } 
                } 
            >#{tag}</button>);
      
        });
      
        return newTagList;
      
    };

    function isSelected(tags) {
        for (let i = 0; i < tags.length; i++) {
            
            console.log("isSelected:",tags[i], tagMap.get(tags[i])); 
            if (tagMap.get(tags[i]) === 1 || tagMap.get(tags[i]) === true) {
                return true; 
            }
        }
        return false; 

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