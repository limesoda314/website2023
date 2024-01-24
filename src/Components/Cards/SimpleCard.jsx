// card taken from material tailwind 
// https://www.material-tailwind.com/docs/react/card
// use .jsx extension next time instead of converting it to work with .js
// Used for project cards 

import { NavLink} from "react-router-dom";
import readingMode from "../Imports/Info/ReadingMode";
import themeColor from "../Imports/Info/ThemeColors";
import {useSelector} from 'react-redux'; 

import {
    Card,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
   
  export default function SimpleCard(props) {
  const { darkThemeIndex, themeColorIndex } = useSelector((state) => state.rootReducer);

    return (
      <Card key={props.id} className={readingMode[darkThemeIndex].color2 + readingMode[darkThemeIndex].text + "mt-6 w-96 rounded-lg shadow-lg p-6 m-2"}>
        <CardBody>
          <Typography className={readingMode[darkThemeIndex].text + "font-bold text-2xl h-32"}> 
            {props.title}
          </Typography>
          <Typography className="text-left px-3">
            {props.description}
          </Typography>
        </CardBody>
        <CardFooter >
          <NavLink to={props.href} >
              <button className={themeColor[themeColorIndex].hover1 + " bg-slate-800 text-white rounded-lg shadow-md py-2 px-5"}>Read More</button>
          </NavLink>
          
        </CardFooter>
      </Card>
    );
  }
