import React, { useState, useEffect } from 'react';
import { remark } from 'remark';
import remarkFrontmatter from 'remark-frontmatter'; 
import remarkParseFrontmatter from 'remark-parse-frontmatter';
import { Typography } from "@material-tailwind/react";
import BlogLinks from "../Imports/Info/BlogLinks"; // Import an array of Markdown file paths here
import tagList from "../Imports/Info/TagInfo"; 
import SortingBar from '../Imports/Blog/sortingBar';
import FormatTags from '../Imports/Blog/formatTags';
import FormatPosts from '../Imports/Blog/formatPosts';

function Blog() {
    // State variables
    const [BlogArray, setBlogArray] = useState([]);
    const [reformat, setReformat] = useState(0);
    const [tagMap, setTagMap] = useState(new Map(tagList.map(tag => [tag, -1])));
    const [greenTag, setGreenTag] = useState(0);
    const [showMore, setShowMore] = useState([0, "Show More"]);
    const [showOptions, setShowOptions] = useState(0);
    const [sortedBy, setSortedBy] = useState(-1);

    useEffect(() => {
        const fetchAndProcessMarkdown = async () => {
            const newBlogArray = [];

            for (const blogLink of BlogLinks) {
                try {
                    const response = await fetch(blogLink.content);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const md = await response.text();

                    // Parse the Markdown content to extract YAML frontmatter
                    const fileOfRemark = remark()
                        .use(remarkFrontmatter, ['yaml', 'toml'])
                        .use(remarkParseFrontmatter)
                        .processSync(md);

                    const frontmatter = fileOfRemark.data.frontmatter;
                    newBlogArray.push(frontmatter);
                } catch (error) {
                    console.error('Error fetching Markdown content:', error);
                }
            }

            setBlogArray(newBlogArray);
        };

        fetchAndProcessMarkdown();
    }, [BlogLinks]);

    document.title = "Ann's Blog";
    return (
        <div className="flex flex-col ">

            <div className="m-8 h-full shadow-lg">
                <Typography variant="h5" color="blue-gray">
                    Ann's Blog
                </Typography>
                <Typography variant="paragraph" className="m-8 text-left">
                    Hello and welcome to my blog where I talk about things that I'm interested in. 

                </Typography>
                <Typography className="text-left m-8">
                    <button className="bg-cyan-300 p-2 rounded-lg" 
                    onClick={  () => { (showMore[0] === 0) ? setShowMore([1, "Show Less"]) : setShowMore([0, "Show More"])} } 
                    >{showMore[1]}</button> 

                    { showMore[0] === 1 ?
                        <Typography>
                            <b>Searching via Categories Criteria</b>
                            
                                There are 3 possible values for a post when searching via Categories. 
                                <ol class="px-8 list-decimal">
                                    <li key="grey"> If there are no green tags, return all posts without red tags</li>
                                    <li key="green"> If there is one or more green tags, only return posts with one or more green tags </li>
                                    <li key="red"> Never return posts that are red even if there is one green tag </li>
                                </ol>
                            <p>
                                This means if you make #tag1 and #tag2 be green, all posts with at least one of the tags will show up. If #tag4 is red, that means any posts with #4 will not be returned even if it has #tag1 or #tag2. 
                            </p>
                            <b>Searching via Sorting</b>
                            <p>
                                There are 4 possible ways to sort posts 
                            </p>
                                <ol class="px-8 list-decimal">
                                    <li key="A-Z"> Sort By Title A-Z which sorts posts in ascending alphabetical order </li>
                                    <li key="Z-A"> Sort By Title Z-A which sorts posts in descending alphabetical order</li>
                                    <li key="newest"> Sort By Date Newest which sorts posts in descending date with newer posts at the top</li>
                                    <li key="oldest"> Sort By Date Oldest which sorts posts in ascending date with older posts at the top</li>
                                </ol>
                            <p>
                                You can combine searching via sorting and categories, so you can sort by date for all posts with #tag 
                            
                            </p>
                        </Typography> : <div></div>
                    }
                </Typography>
            </div>
            <Typography className="relative w-full h-min sticky z-10 inset-x-0 top-14 bg-lime-600">
                    <div className="flex justify-end pt-10">
                        <SortingBar showOptions={showOptions} setShowOptions={setShowOptions} sortedBy={sortedBy} setSortedBy={setSortedBy} BlogArray={BlogArray} setBlogArray={setBlogArray} reformat={reformat} setReformat={setReformat}/>
                    </div>
                    <Typography className="justify-center text-white">
                        Select Categories: <FormatTags tagMap={tagMap} setTagMap={setTagMap} tagList={tagList} greenTag={greenTag} setGreenTag={setGreenTag}/>
                    </Typography>
            </Typography>
            
            <Typography className="flex flex-col flex-wrap h-full text-left">
                <FormatPosts BlogArray={BlogArray} tagMap={tagMap} greenTag={greenTag} reformat={reformat} setReformat={setReformat} />
            </Typography> 

            
        
        </div>
    )
};
export default Blog; 