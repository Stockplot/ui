import ReactMarkdown from 'react-markdown'
import file from "./Blogs/Terms.md"
import file1 from "./Blogs/BBands.md"
import file2 from "./Blogs/RSI.md"
import file3 from "./Blogs/MACD.md"
import "./styles.css"
import React, { useState,useEffect} from 'react'


function Article() {
  const [markdown,setMarkdown]=useState("")
  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  console.log(markdown)
  return (
    <div className="blog" id="blog-hero">
    
     <ReactMarkdown>
       
       {markdown}
       
     </ReactMarkdown>
     
    </div>
  )
}



function Bbands() {
  const [markdown,setMarkdown]=useState("")
  useEffect(() => {
    fetch(file1)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  console.log(markdown)
  return (
    <div className="blog" id="blog-hero">
    
     <ReactMarkdown>
       
       {markdown}
       
     </ReactMarkdown>
     
    </div>
  )
}
function RSI() {
  const [markdown,setMarkdown]=useState("")
  useEffect(() => {
    fetch(file2)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  console.log(markdown)
  return (
    <div className="blog" id="blog-hero">
    
     <ReactMarkdown>
       
       {markdown}
       
     </ReactMarkdown>
     
    </div>
  )
}
function MACD() {
  const [markdown,setMarkdown]=useState("")
  useEffect(() => {
    fetch(file3)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  console.log(markdown)
  return (
    <div className="blog" id="blog-hero">
    
     <ReactMarkdown>
       
       {markdown}
       
     </ReactMarkdown>
     
    </div>
  )
}

export {Article,Bbands,RSI,MACD}