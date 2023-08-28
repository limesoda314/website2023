// image card taken from material tailwind 
// https://www.material-tailwind.com/docs/react/img
import GalleryCard from "../Cards/GalleryCard";
import {Typography} from "@material-tailwind/react";
import images from "../Imports/Info/images"; 

export default function Gallery() {

    document.title = 'Gallery';

    return (
    
    <div>
        
        <div className="m-8 h-full shadow-lg">
        <Typography variant="h1" color="blue-gray">Gallery</Typography>
        <Typography className="m-8">
            Below are a few of my favorite photos
        </Typography>
        </div>
        
        <div className="flex flex-col flex-wrap justify-center text-center h-min">
            {images.map(({ title, href, description, alt, date}) => (
                <GalleryCard title={title} href={href} description={description}  alt={alt} date={date}/>
            ))}
        </div>


    </div>); 
};
