import Post from './../Imports/Blog/postFormat'; 
import formatHeading from '../Imports/Blog/formatPostHeading'; 

export default function Post2(props) {

    console.log(props.postData);
    document.title = props.postData.title; 

    return (
    <div>
    
        {formatHeading(props.postData)}
        <Post markdownFile={props.markdown}></Post>
 
    </div>); 
};