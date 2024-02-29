"use client";
import { useState } from "react";

const Home:React.FC = () => {
  const [inputUrl, setInputUrl] = useState("")
  const [isConverted, setIsConverted] = useState(false)
  const [shortenedLink, setShortenedLink] = useState("")

  const handleSubmit = async (url:string) => {
    const req = await fetch(`http://localhost:8080/url`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({uri: url})
      })
    
    const res = await req.json()
    
    setShortenedLink(res.NewLink)
    return res
  }

  if (shortenedLink == "") {
    return (
      <div className={"flex items-center justify-center h-screen w-screen bg-slate-900"}>
        <div>
          <input onChange={(e) => {setInputUrl(e.target.value)}} className={"rounded border border-gray-300 focus:outline-slate-500 text-lg w-96"} placeholder="Enter url to shorten" type="text"/>
          <button className={"rounded border bg-slate-100 border-red-500 text-lg w-24"} onClick={() => {handleSubmit(inputUrl)}}>Convert</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={"flex items-center justify-center h-screen w-screen bg-slate-900"}>
        <div>
          <h1 className={"rounded border border-gray-300 focus:outline-slate-500 text-lg w-96"}>{shortenedLink}</h1>
          <button className={"rounded border bg-slate-100 border-red-500 text-lg w-24"} onClick={() => {setShortenedLink("")}}>Do another</button>
        </div>
      </div>
    );
  }
}

export default Home;