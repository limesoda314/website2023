
import { Typography } from '@material-tailwind/react';
import SimpleCard from '../SimpleCard';

export default function Projects() {

    const testProjectItems = [
        {
            href: 'alphanumeric-handwriting-detector',
            title: 'AlphaNumeric Handwriting Detector',
            description: 'This project ...',
        },
        {
            href: 'dspath-ucr-monet-poster',
            title: 'DS-Path UCR - Monet Poster ',
            description: 'This project ...',
        },
        {
            href: 'cpp-forward-selection-and-backwards-elimination-implementation',
            title: 'C++ Implementation of Forward Selection and Backwards Elimination',
            description: 'This project ...',
        }, 
        {
             href: 'cpp-nearest-neighbor-implementation',
             title: 'C++ Implementation of Nearest Neighbor',
             description: 'This project ...',
        },
    ];

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
                    {testProjectItems.map(({ href, description, title }) => (
                        <SimpleCard  title={title} description={description} href={href} />
                    ))}
            </div>
                
        </div>

    );
 
};
