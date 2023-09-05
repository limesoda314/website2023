import PostTemplate from './postFormat'; 

export default function Post(props) {
    return (
    <div>
        <PostTemplate markdownFile={props.markdown}></PostTemplate>
 
    </div>); 
};