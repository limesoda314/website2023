import BlogCard from "../../Cards/BlogCard";
export default function FormatPosts(props) {
    function isSelected(tags) {

        // include all green tags WITHOUT red tags, include grey tags 
        //
        // don't include grey tags WITHOUT green tags IF there are ANY green tags within the hashmap
        // 
        // exclude any red tags WITH grey tags OR WITH GREEN TAGS 

        let green = false; 
        for (let i = 0; i < tags.length; i++) {
            
            // console.log("isSelected:",tags[i], tagMap.get(tags[i])); 
            // never show red tags 
            if (props.tagMap.get(tags[i]) === 0 || props.tagMap.get(tags[i]) === false) {
                return false; 
            } 
            // always show green tags 
            else if (props.tagMap.get(tags[i]) === 1 || props.tagMap.get(tags[i] === true)) {
                green = true; 
            }
        }

        if (green === true || green === 1) {
            // if there were no red tags 
            return true; 
        } else {
            // only grey tags in hashmap 
            if (props.greenTag === 0 || props.greenTag === false) {
                return true;
            } else {
                // there are green tags in the hashmap but not in the post's tags 
                return false;
            }
        }

    }

    function toReformat() {
        if (props.reformat === 1) {
            props.setReformat(0); 
            return 1;
        } else {
            return 0; 
        }
    }


    return (

        <div>
            {(toReformat() === 1) ? 
                    <div>
                        
                        {props.BlogArray.map(({ title, author, date, tags, description, href, id}) => (
                            <div>
                                {/* {console.log("update")} */}
                                { (isSelected(tags) === true || isSelected(tags) === 1) ? <div>  <BlogCard key={id} title={title} author={author} date={date} tags={tags} tagMap={props.tagMap} description={description} href={href} /> </div> : <div></div>}
                            </div>
                            
                        ))}
            
                    </div> :
                    <div>
                        {props.BlogArray.map(({ title, author, date, tags, description, href, id}) => (
                            <div>
                                {/* {console.log("update")} */}
                                { (isSelected(tags) === true || isSelected(tags) === 1) ? <div>  <BlogCard key={id} title={title} author={author} date={date} tags={tags} tagMap={props.tagMap} description={description} href={href} /> </div> : <div></div>}
                            </div>
                            
                        ))}
            
                    </div>
                }

        </div>
    )
    
}