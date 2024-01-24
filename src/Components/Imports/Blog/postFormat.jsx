import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkMdx from 'remark-mdx';

import 'katex/dist/katex.min.css';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dracula as CodeStyle} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState, useEffect } from 'react';
import remarkFrontmatter from 'remark-frontmatter'; 
import remarkParseFrontmatter from 'remark-parse-frontmatter';
import { remark } from 'remark';

import FormatPostHeading from './formatPostHeading';
import readingMode from "../Info/ReadingMode";
import {useSelector} from 'react-redux'; 

export default function Post(props) {
  const [content, setContent] = useState('');
  const [frontmatter, setFrontmatter] = useState({title:"", date: "", tags: [], author: ""});
  const { darkThemeIndex} = useSelector((state) => state.rootReducer);

  useEffect(() => {
    console.log('Before fetch');
    fetch(props.markdownFile)
      // fetches the markdown file that we pass in via props and either throws an error or returns the text from the file 
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.text();
      })
      .then((md) => {
        // console.log('After fetch');
        // we keep the markdown content and the frontmatter (metadata such as title, date, author, etc)
        // frontmatter is used for the post heading and we use ReactMarkdown to format the markdown content 
        setContent(md);

        // Parse the Markdown content to extract YAML frontmatter
        const fileOfRemark = remark()
          .use(remarkFrontmatter, ['yaml', 'toml'])
          .use(remarkParseFrontmatter)
          .processSync(md); 

        setFrontmatter(fileOfRemark.data.frontmatter);

      })
      .catch((error) => {
        console.error('Error fetching Markdown content:', error);
      });
  }, [props.markdownFile]);


    return (
      <div>
      

        <article className={"container mx-auto my-10 p-5 rounded-lg shadow-lg text-left prose prose-lg" + readingMode[darkThemeIndex].color2 + readingMode[darkThemeIndex].text}>
          <FormatPostHeading title={frontmatter.title} author={frontmatter.author} date={frontmatter.date} tags={frontmatter.tags} textColor={ readingMode[darkThemeIndex].text }/>
        
          <ReactMarkdown 
            // ReactMarkdown formats the images, codeblocks, latex, and other extensions from a markdown file 
              className="text-left"
              remarkPlugins={[gfm, remarkMath, remarkMdx, remarkFrontmatter]}
              rehypePlugins={[rehypeKatex]}
              children={content}
              components={{
                  code({node, inline, className, children, ...props}) {
                      const match = /language-(\w+)/.exec(className || '')
                      return !inline && match ? (
                        <SyntaxHighlighter
                          {...props}
                          children={String(children).replace(/\n$/, '')}
                          style={CodeStyle}
                          language={match[1]}
                          PreTag="div"
                          showLineNumbers="true"
                          customStyle={{backgroundColor: "#1f2937"}}
                        />
                      ) : (
                        <code {...props} className={className}>
                          {children}
                        </code>
                      )
                    }
                }}
          
              >
              
          </ReactMarkdown>
      </article>
    </div>); 
};
