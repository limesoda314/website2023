// image card taken from material tailwind 
// https://www.material-tailwind.com/docs/react/img
import GalleryCard from "../Cards/GalleryCard";
import {Typography} from "@material-tailwind/react";
import images from "../Imports/Info/images"; 
import readingMode from "../Imports/Info/ReadingMode";
import {useSelector} from 'react-redux'; 

export default function Gallery() {
    const { darkThemeIndex } = useSelector((state) => state.rootReducer);
    document.title = 'Gallery';

    return (
    
    <div>
        
        <div className={"m-8 h-full shadow-lg p-8" + readingMode[darkThemeIndex].color2 + readingMode[darkThemeIndex].text}>
        <Typography variant="h1" color="blue-gray">Gallery</Typography>
        <Typography className="m-8">
            Below are a few of my favorite photos
        </Typography>
        </div>
        
        <div className="flex flex-col flex-wrap justify-center text-center h-min">
            {images.map(
                // shows all images from the import page and includes the info about it
                ({ title, href, description, alt, date, id}) => (
                <GalleryCard title={title} href={href} description={description}  alt={alt} date={date} key={id}/>
            ))}
        </div>
    </div>); 
};
