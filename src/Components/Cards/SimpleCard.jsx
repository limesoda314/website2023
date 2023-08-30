// card taken from material tailwind 
// https://www.material-tailwind.com/docs/react/card
// use .jsx extension next time instead of converting it to work with .js
// Used for project cards 

import { NavLink} from "react-router-dom";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
   
  export default function SimpleCard(props) {
    return (
      <Card key={props.id} className="mt-6 w-96 rounded-lg shadow-lg p-6 m-2">
        <CardBody>
          <Typography className="font-bold text-2xl text-gray-900 h-32"> 
            {props.title}
          </Typography>
          <Typography className="text-left px-3">
            {props.description}
          </Typography>
        </CardBody>
        <CardFooter >
          <NavLink to={props.href} >
              <button className="bg-slate-800 text-white hover:bg-lime-400 rounded-lg shadow-md py-2 px-5">Read More</button>
          </NavLink>
          
        </CardFooter>
      </Card>
    );
  }
