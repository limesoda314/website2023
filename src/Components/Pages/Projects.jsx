
import { Typography } from '@material-tailwind/react';
import SimpleCard from '../Cards/SimpleCard';
import ProjectInfo from '../Imports/Info/ProjectInfo'; 

export default function Projects() {

    document.title = 'Projects';
    return (
        
        <div className="flex flex-col">
            <div className="m-8 h-full shadow-lg">
            <Typography variant="h1"> 
                Projects
            </Typography>
            <Typography className="m-8">
            Below are a few of the projects that I've completed :) 
            </Typography>
            </div>
            
            
            <div className="flex flex-row flex-wrap justify-center text-center p-3">
                    {ProjectInfo.map(({ href, description, title, id}) => (
                        <SimpleCard key={id} title={title} description={description} href={href} />
                    ))}
            </div>
                
        </div>

    );
 
};
