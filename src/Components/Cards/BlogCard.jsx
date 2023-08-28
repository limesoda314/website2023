// Card from: https://www.material-tailwind.com/docs/react/card

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { NavLink} from "react-router-dom";
 
export default function SimpleCard(props) {
  
  function formatTags() {

    const tagList = [];
  
    props.tags.forEach((tag) => {
      tagList.push(<button className="hover:bg-green-500 bg-green-300 text-green-950 rounded-md m-2 px-2 py-1">#{tag}</button>);
  
    });
  
    return tagList;
  
  };


  return (
    <Card className="m-4 md:mt-6 md:left-1/4 left-0 w-[calc(100%-2rem)] md:w-1/2 shadow-lg">
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
          <button className="bg-slate-800 text-white hover:bg-lime-400 rounded-lg shadow-md py-2 px-5">Read More</button>
          </NavLink>
        
      </CardFooter>
    </Card>
  );
}