
import Post from './../Imports/Blog/postFormat'; 
import markdown from '../posts/test.md'; 
import formatHeading from '../Imports/Blog/formatPostHeading'; 
import postData from "../Imports/Info/BlogInfo"; 

export default function Post2() {

    console.log(postData[1]);
    document.title = postData[1].title; 

    return (
    <div>
    
        {formatHeading(postData[1])}
        <Post markdownFile={markdown}></Post>
 
    </div>); 
};