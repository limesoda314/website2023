import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
// import remarkMath from 'remark-math';
// import rehypeKatex from 'rehype-katex';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useState, useEffect } from 'react';
import test from '../posts/test.md'; 
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

export default function Post2() {
    const [content, setContent] = useState(""); 
    document.title = 'Post2';
    
    useEffect(() => {
        console.log('Before fetch');
        fetch(test)
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
      }, [content]);

    return (
    <article className="container mx-auto object-center shadow-lg p-5 m-10 text-left prose prose-lg">
        
        <ReactMarkdown 
            className="text-left"
            remarkPlugins={[gfm,remarkMath]}
            rehypePlugins={[rehypeKatex]}
            children={content}
            components={{
                code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        {...props}
                        children={String(children).replace(/\n$/, '')}
                        style={dark}
                        language={match[1]}
                        PreTag="div"
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