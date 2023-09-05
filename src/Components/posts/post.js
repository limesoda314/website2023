import Post from './../Imports/Blog/postFormat'; 
import formatHeading from '../Imports/Blog/formatPostHeading'; 

export default function Post2(props) {
    return (
    <div>
        <Post markdownFile={props.markdown}></Post>
 
    </div>); 
};