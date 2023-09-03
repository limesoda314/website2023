import Alphanumeric from '../../Projects/alphanumeric';
import Poster from  '../../Projects/dspathposter';
import ForwardBackwards from '../../Projects/forwardbackward';
import NearestNeighbor from '../../Projects/nearestneighbor';

const ProjectInfo = [
    {
        id: 0,
        href: 'alphanumeric-handwriting-detector',
        page: <Alphanumeric/>,
        title: 'AlphaNumeric Handwriting Detector',
        description: 'This project ...',
    },
    {
        id: 1,
        href: 'dspath-ucr-monet-poster',
        page: <Poster/>,
        title: 'DS-Path UCR - Monet Poster ',
        description: 'This project ...',
    },
    {
        id: 2,
        href: 'cpp-forward-selection-and-backwards-elimination-implementation',
        page: <ForwardBackwards/>,
        title: 'C++ Implementation of Forward Selection and Backwards Elimination',
        description: 'This project ...',
    }, 
    {
        id: 3,
         href: 'cpp-nearest-neighbor-implementation',
         page: <NearestNeighbor/>,
         title: 'C++ Implementation of Nearest Neighbor',
         description: 'This project ...',
    },
];

export default ProjectInfo; 