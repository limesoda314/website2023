import { Typography } from "@material-tailwind/react";
function Home() {
    document.title = 'Home';
    return (

            <div className="m-8 h-full shadow-lg">
                <Typography variant="h1" color="blue-gray">
                    Home
                </Typography>
                <Typography variant="paragraph" className="m-8">
                    Hello! I'm Ann, a soon to be masters student at UCR. I just graduated with my bachelor's this spring so over the summer I'm planning to work on this website. 
                    Hopefully before the end of summer you'll get to see something cool
                </Typography>
                
            </div>

     
    );

}; 
export default Home; 