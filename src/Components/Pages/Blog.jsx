
import {Typography} from "@material-tailwind/react";
import BlogInfo from "../Imports/Info/BlogInfo"; 
import BlogCard from "../Cards/BlogCard";

function Blog() {


    document.title = "Ann's Blog";
    return (
        <div className="m-8 h-full shadow-lg">
            <Typography variant="h5" color="blue-gray">
                Ann's Blog
            </Typography>
            
            <Typography variant="paragraph" className="m-8 text-left">
                Hello and welcome to my blog where I'll talk about things that I'm interested in. 
            </Typography>

            <div className="flex flex-col flex-wrap justify-center text-center h-min">
                {BlogInfo.map(({ title, author, date, description, href}) => (
                    <BlogCard title={title} author={author} date={date} description={description} href={href} />
                ))}
            </div> 

            


        
        </div>
    )
};
export default Blog; 