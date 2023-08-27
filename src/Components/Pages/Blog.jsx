
import {Typography} from "@material-tailwind/react";

function Blog() {
    document.title = "Ann's Blog";
    return (
        <div className="m-8 h-full shadow-lg">
            <Typography variant="h1" color="blue-gray">
                Ann's Blog
            </Typography>
            
            <Typography variant="paragraph" className="m-8 text-left">
                Hello and welcome to my blog where I'll talk about things that I'm interested in. 
            </Typography>
        
        </div>
    )
};
export default Blog; 