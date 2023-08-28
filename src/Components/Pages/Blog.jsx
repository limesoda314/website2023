
import {Typography} from "@material-tailwind/react";
import BlogInfo from "../Imports/Info/BlogInfo"; 
import BlogCard from "../Cards/BlogCard";


function Blog() {
    let tagList = ["Tag1", "Tag2", "Tag3", "Tag4"]; 
    let selectedTags = tagList;

    function selectTags(tag) {
        // if tag is not found 
        if (selectedTags.find((item) => item === tag) ) {
            selectedTags.push(tag); 
        } else {
            // remove tag if found 
            selectedTags = selectedTags.filter((item) => item !== tag); 
        }
        return; 
    }

    function formatTags() {

        const newTagList = [];
      
        tagList.forEach((tag) => {
          newTagList.push(<button onClick={selectTags(tag)} className="hover:bg-green-500 bg-green-300 text-green-950 rounded-md m-2 px-2 py-1">#{tag}</button>);
      
        });
      
        return newTagList;
      
    };

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
                    <BlogCard title={title} author={author} date={date} tags={tags} description={description} href={href} />
                ))}
            </div> 

            


        
        </div>
    )
};
export default Blog; 