// image card taken from material tailwind 
// https://www.material-tailwind.com/docs/react/img
import GalleryCard from "../GalleryCard";
import {Typography} from "@material-tailwind/react";
import images from "../images"; 

export default function Gallery() {
    

    const testProjectItems = [
        {
            href: images.img1,
            alt: 'orange tabby cat',
            date: '7-30-2023',
            title: 'Mango',
            description: 'Mango close up',
        },
        {
            href: images.img2,
            alt: 'orange tabby cat',
            date: '7-30-2023',
            title: 'Mango',
            description: "Mango's face",
        },
        {
            href: images.img3,
            alt: 'orange tabby cat',
            date: '7-30-2023',
            title: 'Mango',
            description: 'Mango outside',
        },
        {
            href: images.img4,
            alt: 'siamese tabby cat',
            date: '7-21-2023',
            title: 'Koori',
            description: 'Koori under the avocado tree',
        },
        {
            href: images.img5,
            alt: 'orange tabby cat',
            date: '7-21-2023',
            title: 'Mango',
            description: "Mango by the lemon tree",
        },
        {
            href: images.img6,
            alt: 'orange tabby cat',
            date: '7-21-2023',
            title: 'Mango',
            description: 'Mango laying in the shade',
        },
        {
            href: images.img7,
            alt: 'orange tabby cat',
            date: '7-21-2023',
            title: 'Mango',
            description: 'Mango laying on brick',
        },
        {
            href: images.img8,
            alt: 'orange tabby cat and siamese tabby cat',
            date: '7-21-2023',
            title: 'Koori and Mango',
            description: "Koori and Mango looking at each other through the window",
        },
        {
            href: images.img9,
            alt: 'siamese tabby cat',
            date: '7-20-2023',
            title: 'Koori',
            description: 'Koori in car',
        },
        {
            href: images.img10,
            alt: 'orange tabby cat and siamese tabby cat',
            date: '6-16-2023',
            title: 'Mango',
            description: 'mango and koor on window sill perch',
        },
        {
            href: images.img11,
            alt: 'siamese tabby cat',
            date: '8-6-2023',
            title: 'Koori',
            description: 'Koori in bathtub',
        },
    ];
    document.title = 'Gallery';

    return (
    
    <div>
        
        <div className="m-8 h-full shadow-lg">
        <Typography variant="h1" color="blue-gray">Gallery</Typography>
        <Typography className="m-8">
            Below are a few of my favorite photos
        </Typography>
        </div>
        

        <div className="flex flex-col flex-wrap justify-center text-center p-3 m-8">
            {testProjectItems.map(({ title, href, description, alt, date}) => (
                <GalleryCard title={title} description={description} href={href} alt={alt} date={date}/>
            ))}
        </div>


    </div>); 
};
