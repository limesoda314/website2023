import ProjectTemplate from './projectFormat'; 

export default function Project(props) {
    return (
    <div>
        <ProjectTemplate markdownFile={props.markdown}></ProjectTemplate>
 
    </div>); 
};