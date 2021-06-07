import {render} from 'react-dom'
import ReactMarkdown from 'react-markdown'
import file from "./Blogs/Terms.md"
import "./styles.css"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import React, { useState,useEffect} from 'react'

function Blog() {
  const [markdown,setMarkdown]=useState("")
  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  console.log(markdown)
  return (
    <div className="blog">
    
     <ReactMarkdown>
       
       {markdown}
       
     </ReactMarkdown>
    </div>
  )
}

export default Blog
