// Card from: https://www.material-tailwind.com/docs/react/card

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { NavLink} from "react-router-dom";
import readingMode from "../Imports/Info/ReadingMode";
import themeColor from "../Imports/Info/ThemeColors";
import {useSelector} from 'react-redux'; 
 
export default function SimpleCard(props) {

  const { darkThemeIndex, themeColorIndex } = useSelector((state) => state.rootReducer);
  
  function formatTags() {

    const tagList = [];
  
    props.tags.forEach((tag) => {
      if (props.tagMap.get(tag) === 1 || props.tagMap.get(tag) === true) {  

        tagList.push(<button className="bg-green-300 text-green-950 rounded-md m-2 px-2 py-1">#{tag}</button>);
     
      } else if (props.tagMap.get(tag) === 0 || props.tagMap.get(tag) === false){
        tagList.push(<button className="bg-red-500 text-green-950 rounded-md m-2 px-2 py-1">#{tag}</button>);
      } else {
        tagList.push(<button className="bg-slate-300 text-green-950 rounded-md m-2 px-2 py-1">#{tag}</button>);
      }
  
    });
    return tagList;
  
  };


  return (
    <Card key={props.id} className={readingMode[darkThemeIndex].color2 + readingMode[darkThemeIndex].text + "m-4 md:mt-6 md:left-1/4 left-0 w-[calc(100%-2rem)] md:w-1/2 shadow-lg"}>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {props.title}
        </Typography>
        <Typography>
          {props.author} • {props.date}
          
        </Typography>
        <Typography>
          {formatTags()}
        </Typography>
        <Typography>
          {props.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
          <NavLink to={props.href} >
          <button className={themeColor[themeColorIndex].hover1 + " bg-slate-800 text-white rounded-lg shadow-md py-2 px-5"}>Read More</button>
          </NavLink>
        
      </CardFooter>
    </Card>
  );
}