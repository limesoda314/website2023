
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
    return (
        <div>
        <title>Projects</title>

        <div className="flex flex-col">
            <h1 className='text-5xl font-bold underline'>Projects</h1>
            <div>
                Below are a few of the projects that I've completed :) 
            </div>
            <div className="flex flex-row flex-wrap justify-center text-center p-3">
                    {testProjectItems.map(({ href, description, title }) => (
                        <SimpleCard  title={title} description={description} href={href} />
                    ))}
            </div>
                
        </div>

    </div>
    );
 
};
