import {Typography} from "@material-tailwind/react";

export default function formatPostHeading(postData) {

    function formatTags(postData) {
        const tagList = [];
    
        postData.tags.forEach((tag) => {
    
            tagList.push(<button className="bg-green-300 text-green-950 rounded-md m-2 px-2 py-1">#{tag}</button>);
    
        });
    
        return tagList;
    }

    return (
        <div>
            <Typography variant="h5" color="blue-gray" className="py-4">
                {postData.title}
            </Typography>
            <Typography variant="h2" color="blue-gray">
                {postData.author} • {postData.date} 
                <div>
                {formatTags(postData)}
                </div>
            </Typography>

        </div>
        
    );

}