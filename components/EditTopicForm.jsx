"use client"

import { useState } from "react";
import { useRouter } from "next/router";

export default function EditTopicForm(id, title, description) {

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setnewDescription] = useState(description);

    const router = useRouter()

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-type":"application/json",
                },
                body: JSON.stringify({newTitle, newDescription}),

            }
        );

        if (!res.ok){
            throw new Error("Failed to update topic");
        }
        router.refresh();
        router.push("/");

        } catch (error) {
            
        }
    }

    return (
        <form className="flex flex-col gap-3">
        <input onChange={(e)=>setNewTitle(e.target.value)} value={newTitle}
        className="border
         bg-slate-500 px-8 py-2" type="text" 
         placeholder="Topic Tittle" />

    <input onChange={(e)=>setnewDescription(e.target.value)} value={newDescription}
        className="border 
         bg-slate-500 px-8 py-2" type="text" 
         placeholder="Topic Description" />

         <button className="bg-green-600 font-bold text-white
         py-3 px-6 w-fit">
            Update Topic
         </button>
    </form>
    );
}