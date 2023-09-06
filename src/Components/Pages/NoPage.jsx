import React from 'react'; 
import {Typography} from "@material-tailwind/react";

function NoPage() {    
    document.title = '404 Error';
    return (     
        <div className="m-8 h-full shadow-lg">
            <Typography variant="h1">404 Error</Typography>  
            <Typography className="py-8">
            Sorry, the page you are trying to access doesn't exist
            </Typography> 
      
        </div>  
    ); 
} export default NoPage;