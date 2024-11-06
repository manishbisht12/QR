import React, { useState } from 'react';
import QRCode from "react-qr-code";

const app = () => {

   const[value, setvalue] = useState("");
  return (
   <div className="container bg-slate-800 w-full h-screen flex justify-center items-center">
    <div className="card border w-fit p-8 bg-white rounded-lg flex flex-col items-center gap-4 shadow-lg shadow-purple-400">
      <h1 className="text-4xl font-bold tracking-wider text-purple-600 drop-shadow-lg">QR Code Generator</h1>
      <input type="text"
       placeholder= "Enter Url or Text"
       value={value}
       onChange={(e)=>{setvalue(e.target.value)}}
        className="border rounded-md placeholder:tracking-wide  tracking-widest font-semibold focus:ring outline-none focus:ring-purple-500 w-full px-1.5 py-1 text-slate-600" />
    <div className="p-4 shadow-lg shadow-slate-400 hover:shadow-purple-600 box-border border rounded-lg transition-all duration-300 ease-in-out">
    <QRCode value={value} size={170} bgColor="white" fgColor="black"/>
    </div>
      </div>
   </div>
  )
}

export default app
