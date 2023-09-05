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

import FormatProjectHeading from './formatProjectHeading';


export default function Post(props) {
  const [content, setContent] = useState('');
  const [frontmatter, setFrontmatter] = useState({title:"", date: "", tags: [], author: ""});

  useEffect(() => {
    console.log('Before fetch');
    fetch(props.markdownFile)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.text();
      })
      .then((md) => {
        console.log('After fetch');
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
      
        <article className="container mx-auto my-10 p-5 rounded-lg shadow-lg text-left prose prose-lg">
          <FormatProjectHeading title={frontmatter.title} author={frontmatter.author} date={frontmatter.date}/>
        
          <ReactMarkdown 
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
