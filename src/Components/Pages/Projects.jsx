
import React, { useState, useEffect } from 'react';
import { remark } from 'remark';
import remarkFrontmatter from 'remark-frontmatter'; 
import remarkParseFrontmatter from 'remark-parse-frontmatter';

import { Typography } from '@material-tailwind/react';
import ProjectLinks from '../Imports/Info/ProjectLinks'; 
import FormatProjects from "../Imports/Projects/formatProjects"; 
import readingMode from "../Imports/Info/ReadingMode";
import {useSelector} from 'react-redux'; 

export default function Projects() {
    const [ProjectArray, setProjectArray] = useState([]);
    const { darkThemeIndex } = useSelector((state) => state.rootReducer);

    useEffect(() => {
        const fetchAndProcessMarkdown = async () => {
            const newProjectArray = [];

            for (const projectLink of ProjectLinks) {
                try {
                    const response = await fetch(projectLink.content);
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
                    console.log(frontmatter); 
                    newProjectArray.push(frontmatter);
                } catch (error) {
                    console.error('Error fetching Markdown content:', error);
                }
            }

            setProjectArray(newProjectArray);
        };

        fetchAndProcessMarkdown();
    }, []);

    document.title = 'Projects';
    return (
        
        <div className="flex flex-col">
            <div className={"m-8 h-full shadow-lg p-8" + readingMode[darkThemeIndex].color2 + readingMode[darkThemeIndex].text}>
            <Typography variant="h1"> 
                Projects
            </Typography>
            <Typography className="m-8">
            Below are a few of the projects that I've completed :) 
            </Typography>
            </div>
            
            <FormatProjects ProjectArray={ProjectArray}/> 
        </div>

    );
 
};
