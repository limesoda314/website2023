import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import remarkMentions from 'remark-mentions';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeInline from "rehype-inline";
import rehypeRaw from "rehype-raw"; 
import 'katex/dist/katex.min.css';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dracula as CodeStyle} from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useState, useEffect } from 'react';


export default function Post(props) {
    const [content, setContent] = useState(""); 
    document.title = 'Post2';
    
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
          })
          .catch((error) => {
            console.error('Error fetching Markdown content:', error);
          });
      }, [content, props.markdownFile]);

    return (
    <article className="container mx-auto my-10 p-5 rounded-lg shadow-lg text-left prose prose-lg">
        
        <ReactMarkdown 
            className="text-left"
            remarkPlugins={[gfm,remarkMentions, remarkMath]}
            rehypePlugins={[rehypeKatex, rehypeInline, rehypeRaw]}
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
    </article>); 
};
