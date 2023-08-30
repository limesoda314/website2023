import Alphanumeric from '../../Projects/alphanumeric';
import Poster from  '../../Projects/dspathposter';
import ForwardBackwards from '../../Projects/forwardbackward';
import NearestNeighbor from '../../Projects/nearestneighbor';

const ProjectPages = [
    {
        id: 0,
        href: "projects/alphanumeric-handwriting-detector",
        page: <Alphanumeric/>,
    },
    {
        id: 1,
        href: "projects/dspath-ucr-monet-poster",
        page: <Poster/>,
    },
    {
        id: 2,
        href: "projects/cpp-forward-selection-and-backwards-elimination-implementation",
        page: <ForwardBackwards/>,
    },
    {
        id:3, 
        href: "projects/cpp-nearest-neighbor-implementation",
        page: <NearestNeighbor/>,
    },
]; 
export default ProjectPages;
