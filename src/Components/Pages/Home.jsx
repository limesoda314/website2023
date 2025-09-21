import { Typography } from "@material-tailwind/react";
import readingMode from "../Imports/Info/ReadingMode";
import {useSelector} from 'react-redux'; 

function Home() {
    document.title = 'Home';
    const { darkThemeIndex } = useSelector((state) => state.rootReducer);
    return (

            <div className={"m-8 shadow-lg p-8" + readingMode[darkThemeIndex].color2 + readingMode[darkThemeIndex].text}>
                <Typography variant="h1" color="blue-gray">
                    Home
                </Typography>
                <Typography variant="paragraph" className="m-8">
                    Hello! I'm Ann. Welcome to my website! 
                </Typography>
                
            </div>

     
    );

}; 
export default Home; 