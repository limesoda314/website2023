// Card from: https://www.material-tailwind.com/docs/react/card

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { NavLink} from "react-router-dom";
 
export default function SimpleCard(props) {
  return (
    <Card className="mt-6 w-96 shadow-lg">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {props.title}
        </Typography>
        <Typography>
          {props.author} • {props.date}
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