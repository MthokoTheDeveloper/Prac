'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function addTopic() {
const [title, setTitle] = useState("");
const [description, setDescription]= useState("");

const router = useRouter();

const handleSubmit = async (e)=>{
 e.preventDefault();

 if(!title || !description){
    alert("Title and Description required");
    return;
 }
try {
    await fetch("http://localhost:3000/api/topics", {
        method : "POST",
        headers:{
            "Content-tyoe":"application.json"
        },
        body: JSON.stringify({title,description}),
    });

    if (resizeBy.ok) {
        router.push('/')
    }else{
            throw new Error("failed to create a topic")
        }
    }
 catch (error) {
    console.log(error);
    
}

}

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input onChange={e=>setTitle(e.target.value)}
            value={title}
            className="border
             bg-slate-500 px-8 py-2" type="text" 
             placeholder="Topic Tittle" />

        <input onChange={e=>setDescription(e.target.value)}
            value={description}
            className="border bg-slate-500 px-8 py-2" type="text" 
             placeholder="Topic Description" />

             <button className="bg-green-600 font-bold text-white
             py-3 px-6 w-fit">
                Add Topic
             </button>
        </form>
    );
}