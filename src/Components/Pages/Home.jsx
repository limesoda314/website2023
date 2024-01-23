import { Typography } from "@material-tailwind/react";
function Home() {
    document.title = 'Home';
    return (

            <div className="m-8 h-full shadow-lg">
                <Typography variant="h1" color="blue-gray">
                    Home
                </Typography>
                <Typography variant="paragraph" className="m-8">
                    Hello! I'm Ann, I just graduated with my bachelor's spring 2024. I plan to improve this website soon! 
                </Typography>
                
            </div>

     
    );

}; 
export default Home; 