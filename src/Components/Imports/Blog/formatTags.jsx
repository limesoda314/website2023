
export default function FormatTags(props) {

    const newTagList = [];
    let tagClass; 
    
    props.tagList.forEach((tag) => {
        
        // include 
        if (props.tagMap.get(tag) === 1 || props.tagMap.get(tag) === true) {
            tagClass = "bg-green-300 hover:bg-red-500 text-black rounded-md m-2 px-2 py-1 ";
            newTagList.push(<button className={tagClass} 
                onClick={
                    () => { 
                        props.setTagMap(new Map(props.tagMap.set(tag, 0))); 
                        props.setGreenTag(props.greenTag-1); 
                    } 
                } 
            >#{tag}</button>);
        
        }
        // exclude  
        else if (props.tagMap.get(tag) === 0 || props.tagMap.get(tag) === false) {
            tagClass = "bg-red-400 hover:bg-slate-500 text-black rounded-md m-2 px-2 py-1";
            newTagList.push(<button className={tagClass} 
                onClick={
                    () => { props.setTagMap(new Map(props.tagMap.set(tag, -1))); } 
                } 
            >#{tag}</button>);
        } 
        // default 
        else {
            tagClass = "bg-slate-400 hover:bg-green-500 text-black rounded-md m-2 px-2 py-1";
            newTagList.push(<button className={tagClass} 
                onClick={
                    () => { 
                        props.setTagMap(new Map(props.tagMap.set(tag, 1)));   
                        props.setGreenTag(props.greenTag+1);                           
                    } 
                } 
            >#{tag}</button>);
        }
        
  
    });
  
    return newTagList;
  
};