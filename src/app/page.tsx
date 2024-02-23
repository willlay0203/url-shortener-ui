"use client";
import { useState } from "react";

const Home:React.FC = () => {
  const [inputUrl, setInputUrl] = useState("")
  const [isConverted, setIsConverted] = useState(false)

  if (!isConverted) {
    return (
      <div className={"flex items-center justify-center h-screen w-screen bg-slate-900"}>
        <div>
          <input onChange={(e) => {setInputUrl(e.target.value)}} className={"rounded border border-gray-300 focus:outline-slate-500 text-lg w-96"} placeholder="Enter url to shorten" type="text"/>
          <button className={"rounded border bg-slate-100 border-red-500 text-lg w-24"} onClick={() => {setIsConverted(true)}}>Convert</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={"flex items-center justify-center h-screen w-screen bg-slate-900"}>
        <div>
          <h1 className={"rounded border border-gray-300 focus:outline-slate-500 text-lg w-96"}>{inputUrl}</h1>
          <button className={"rounded border bg-slate-100 border-red-500 text-lg w-24"} onClick={() => {setIsConverted(false)}}>Do another</button>
        </div>
      </div>
    );
  }
}

export default Home;